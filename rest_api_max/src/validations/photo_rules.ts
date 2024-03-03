import { body } from "express-validator";

export const createPhotoRules = [
	body("title")
		.isString().withMessage("title needs to be a string").bail()
		.trim().isLength({ min: 3}).withMessage("title needs to be at least 3 characters long"),

	body("url")
		.isString().withMessage("url needs to be in a string").bail()
		.isURL().withMessage("url must be a url, dummy..."),

	body("comment")
		.optional()
		.isString().withMessage("comment needs to be a string").bail()
		.trim().isLength({ min: 3}).withMessage("comment needs to be at least 3 characters long")
];

export const updatePhotoRules = [
    body("title")
		.optional()
		.isString().withMessage("title needs to be a string").bail()
		.trim().isLength({ min: 3}).withMessage("title needs to be at least 3 characters long"),

    body("url")
		.optional()
		.isString().withMessage("url needs to be in a string").bail()
		.isURL().withMessage("url must be a url, dummy..."),

    body("comment")
		.optional()
		.isString().withMessage("comment needs to be a string").bail()
		.trim().isLength({ min: 3}).withMessage("comment needs to be at least 3 characters long")
];
