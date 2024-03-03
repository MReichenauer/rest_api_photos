import { PrismaClient } from "@prisma/client";
import { CreatePhoto, UpdatePhotoResult } from "../types/photo_types";
import Debug from "debug";

const prisma = new PrismaClient();
const debug = Debug("prisma-debug_pic:Hello from photo_service");


export async function createPhoto(userId: number, photoData: CreatePhoto) {
    return prisma.photo.create({
        data: {
            ...photoData,
            userId: userId,
        },
    });
}

// Gets all photos for a user
export async function getUserPhotos(userId: number) {
    return prisma.photo.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
            title: true,
            url: true,
            comment: true,
        },
    });
}

// Get a single photo for a user
export async function getPhotoById(photoId: number, userId: number) {
    return prisma.photo.findUnique({
        where: {
            id: photoId,
            userId: userId
        },
    });
}

// Update a photo by its id
export async function updatePhotoById(photoId: number, data: CreatePhoto, userId: number): Promise<UpdatePhotoResult> {
	try {
		// Check if the photo belongs to the user
		const existingPhoto = await prisma.photo.findUnique({
		  where: { id: photoId },
		});

		if (!existingPhoto || existingPhoto.userId !== userId) {
		  return {
			status: "error",
			message: "Photo not found, or photo doesn't belong to this user",
		  };
		}

		const updatedPhoto = await prisma.photo.update({
		  where: { id: photoId },
		  data,
		});
		return { status: "success", data: updatedPhoto };
	  } catch (error) {
		debug("Error updating photo:", error);
		return { status: "error", message: "Internal server error" };
	  }
}

export async function addPhotoToAlbum(albumId: number, photoId: number, userId: number) {
    try {
        // Check so that the album exists, and that it belongs to the user
        const existingAlbum = await prisma.album.findUnique({
            where: { id: albumId },
			include: { user: true},
        });

        if (!existingAlbum || existingAlbum.userId !== userId) {
            return { success: false, message: "Album not found, or album don't belong to this user" };
        }

        // Check so that the photo exists, and belongs to the user
        const existingPhoto = await prisma.photo.findUnique({
            where: { id: photoId },
			include: { user: true},
        });

        if (!existingPhoto || existingPhoto.userId !== userId) {
            return { success: false, message: "Photo not found, or photo don't belong to this user" };
        }

        // Add photo to the album
        await prisma.album.update({
            where: { id: albumId },
            data: {
                photos: {
                    connect: { id: photoId },
                },
            },
        });

        return { success: true };
    } catch (error) {
        debug("Error adding photo to the album:", error);
        throw new Error("Internal server error");
    }
}


