
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createPhoto, getPhotoById, getUserPhotos, updatePhotoById } from "../services/photo_service";
import { CreatePhoto } from "../types/photo_types";
import { getUserProfile } from "../services/user_service";
import Debug from "debug";


const debug = Debug("prisma-debug_pic:Hello from photo_controller");

/**
 * Create a new photo
 */
export const createPhotoHandler = async (req: Request, res: Response) => {
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

        const photoData: CreatePhoto = req.body;
        const createdPhoto = await createPhoto(userId, photoData);

        res.status(201).json({
            status: "success",
            data: createdPhoto,
        });
    	} catch (error) {
        debug("Error creating photo:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Get all photos of the user
 */
export const getUserPhotosHandler = async (req: Request, res: Response) => {
    try {

        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

		// Get user credentials from the request object
        const { email, password } = req.userCredentials;

        // Authenticate user and get user's id
        const userProfile = await getUserProfile(email, password);
        const userId = userProfile.id;

        // fetch them photos (of the user)
        const userPhotos = await getUserPhotos(userId);

        res.status(200).json({
            status: "success",
            data: userPhotos,
        });
    } catch (error) {
        debug("Error fetching users photos:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Get a photo of the user (by id)
 */
export const getOnePhotoHandler = async (req: Request, res: Response) => {
    try {
        // Get the photoId from the request
        const photoId = parseInt(req.params.photoId);

        // Get the authenticated user's ID if available
        const userId = req.userCredentials?.id;

        // Check if userId is undefined
        if (userId === undefined) {
            return res.status(401).json({ status: "error", message: "Unauthorized" });
        }

        // Get the photo details
        const photo = await getPhotoById(photoId, userId);

        // If the photo is not found, return 404 error
        if (!photo) {
            return res.status(404).json({ status: "error", message: "Photo not found" });
        }

        // If the photo is found and belongs to the user, return it in the response
        res.status(200).json({ status: "success", data: photo });
    } catch (error) {
        debug("Error fetching photo by ID:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

/**
 * Update a photo of the user (by id)
 */
export const updatePhotoHandler = async (req: Request, res: Response) => {
    try {
        // Get the photoId from the request
        const photoId = parseInt(req.params.photoId);

        // Check so that the user credentials are available
        if (!req.userCredentials) {
            return res.status(401).json({ message: "You need authorization to do this!" });
        }

        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user is authorized to update the photo
		const userId = req.userCredentials.id;
		const updatePhoto = await updatePhotoById(photoId, req.body, userId);

		// If photo not found or don't belong to the user, return error
		if (updatePhoto.status === "error") {
		return res.status(404).json({ status: "error", message: updatePhoto.message });
		}

		// Return updated photo
		res.status(200).json({
		status: "success",
		data: updatePhoto.data,
		});
	} catch (error) {
		debug("Error updating photo:", error);
		res.status(500).json({ status: "error", message: "Internal server error" });
	}

};
