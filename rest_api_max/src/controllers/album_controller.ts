
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { addPhotoToAlbum} from "../services/photo_service";
import { CreateAlbum } from "../types/album_types";
import { getUserProfile } from "../services/user_service";
import Debug from "debug";
import { createAlbum, getAlbumById, getUserAlbums, updateAlbumById } from "../services/album_service";


const debug = Debug("prisma-debug_pic:Hello from abum_controller");

/**
 * Create a new album
 */
export const createAlbumHandler = async (req: Request, res: Response) => {
    try {

        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

        // Get user credentials from the request object
        const { email, password } = req.userCredentials;

        // Authenticate user and get user's id
        const userProfile = await getUserProfile(email, password);
        const userId = userProfile.id;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const albumData: CreateAlbum = req.body;
        const createdAlbum = await createAlbum(userId, albumData);

        res.status(201).json({
            status: "success",
            data: createdAlbum,
        });
    	} catch (error) {
        debug("Error creating album:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Get all of the users albums
 */
export const getUserAlbumsHandler = async (req: Request, res: Response) => {
    try {

        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

		// Get user credentials from the request object
        const { email, password } = req.userCredentials;

        // Authenticate user and get user's id
        const userProfile = await getUserProfile(email, password);
        const userId = userProfile.id;

        // fetch them albums (of the user)
        const userAlbums = await getUserAlbums(userId);

        res.status(200).json({
            status: "success",
            data: userAlbums,
        });
    } catch (error) {
        debug("Error fetching users albums:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Get a single album of the user (by id)
 */
export const getOneAlbumHandler = async (req: Request, res: Response) => {
    try {
        // Get the albumId from the request
        const albumId = parseInt(req.params.albumId);

        // Get the authenticated user's ID if available
        const userId = req.userCredentials?.id;

        // Check if userId is undefined
        if (userId === undefined) {
            return res.status(401).json({ status: "error", message: "Unauthorized" });
        }

        // Get the album details
        const album = await getAlbumById(albumId, userId);

        // If the album is not found, return 404 error
        if (!album) {
            return res.status(404).json({ status: "error", message: "Album not found" });
        }

        // If the album is found and belongs to the user, return it in the response
        res.status(200).json({ status: "success", data: album });
    } catch (error) {
        debug("Error fetching album by ID:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Update a single album of the user (by id)
 */
export const updateAlbumHandler = async (req: Request, res: Response) => {
    try {
        // Get the albumId from the request
        const albumId = parseInt(req.params.albumId);

        // Check so that the user credentials are available
        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userId = req.userCredentials.id;

        // Update album
        const updatedAlbum = await updateAlbumById(albumId, req.body, userId);

        // Check if updatedAlbum is a error object
        if ('status' in updatedAlbum && updatedAlbum.status === "error") {
            return res.status(404).json({ status: "fail", message: "Album not found or not authorized" });
        }

        // Return updated album
        res.status(200).json({
            status: "success",
            data: updatedAlbum,
        });
    } catch (error) {
        debug("Error updating album:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Add a photo(of the user) to an album(of the user) (by id)
 */
export const addPhotoToAlbumHandler = async (req: Request, res: Response) => {
    try {
        const albumId = parseInt(req.params.albumId);
        const photoId = req.body.id;

        // Check so that the user credentials are available
        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

		const userId = req.userCredentials.id;

        // Add photo to album
        const result = await addPhotoToAlbum(albumId, photoId, userId);

        if (result.success) {
            res.status(200).json({
                status: "success",
                data: null,
            });
        } else {
            res.status(404).json({
                status: "error",
                message: result.message,
            });
        }
    } catch (error) {
        debug("Error adding photo to album:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};
