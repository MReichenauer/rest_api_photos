/**
 * Main application routes
 */
import express from "express";
import { registerUser, getProfile } from "../controllers/user_controller";
import { basicAuthMiddleware } from "../validations/basic";
import { createUserRules } from "../validations/user_validations";
import { createPhotoRules, updatePhotoRules } from "../validations/photo_rules";
import { createPhotoHandler, getOnePhotoHandler, getUserPhotosHandler, updatePhotoHandler } from "../controllers/photo_controller";
import { createAlbumRules, updateAlbumRules } from "../validations/album_rules";
import { addPhotoToAlbumHandler, createAlbumHandler, getOneAlbumHandler, getUserAlbumsHandler, updateAlbumHandler } from "../controllers/album_controller";
const router = express.Router();

/**
 * GET /
 */
router.get("/", (req, res) => {
	res.send({
		message: "But first, let me take a selfie 🤳 https://www.youtube.com/watch?v=kdemFfbS5H0",
	});
});

/**
 * Register a user /register
 */
router.post("/register", createUserRules, registerUser);

/**
 * Get a users profile /profile
 */
router.get("/profile", basicAuthMiddleware, getProfile);

/**
 * Create a photo /photos
 */
router.post("/photos", basicAuthMiddleware, createPhotoRules, createPhotoHandler);

/**
 * Get all of a users photos /photos
 */
router.get("/photos", basicAuthMiddleware, getUserPhotosHandler);

/**
 * Get a single photo of a user /photos/:photoId
 */
router.get("/photos/:photoId", basicAuthMiddleware, getOnePhotoHandler);

/**
 * Update a single photo of a user /photos/:photoId
 */
router.patch("/photos/:photoId", basicAuthMiddleware, updatePhotoRules, updatePhotoHandler);

/**
 * Create a album /albums
 */
router.post("/albums", basicAuthMiddleware, createAlbumRules, createAlbumHandler);

/**
 * Get all of a users albums /albums
 */
router.get("/albums", basicAuthMiddleware, getUserAlbumsHandler);

/**
 * Get a single album of a user /albums/:albumId
 */
router.get("/albums/:albumId", basicAuthMiddleware, getOneAlbumHandler);

/**
 * Update a single album of a user /albums/:albumId
 */
router.patch("/albums/:albumId", basicAuthMiddleware, updateAlbumRules, updateAlbumHandler);

/**
 * Add a single photo to an album of a user /albums/:albumId/photos
 */
router.post("/albums/:albumId/photos", basicAuthMiddleware, addPhotoToAlbumHandler);

/**
 * Catch-all route handler
 */
router.use((req, res) => {
	// Respond with 404 and a message in JSON-format
	res.status(404).send({
		message: "Not Found",
	});
});

export default router;
