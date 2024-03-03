import { PrismaClient } from "@prisma/client";
import { CreateAlbum, UpdateAlbumResult } from "../types/album_types";
import Debug from "debug";

const prisma = new PrismaClient();
const debug = Debug("prisma-debug_pic:Hello from photo_service");


export async function createAlbum(userId: number, albumData: CreateAlbum) {
    return prisma.album.create({
        data: {
            ...albumData,
            userId: userId,
        },
    });
}

// Gets all albums for a user
export async function getUserAlbums(userId: number) {
    return prisma.album.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
            title: true,
			userId: true,
        },
    });
}

// Get a single album for a user
export async function getAlbumById(albumId: number, userId: number) {
    return prisma.album.findUnique({
        where: {
            id: albumId,
            userId: userId
        },
		select: {
			id: true,
			title: true,
			photos: true,
		}
    });
}

// Update a album by its id
export async function updateAlbumById(albumId: number, data: CreateAlbum, userId: number): Promise<UpdateAlbumResult> {
    try {
        // Check so that the album exists, and that it belongs to the user
        const existingAlbum = await prisma.album.findUnique({
            where: { id: albumId },
            include: { user: true },
        });

        if (!existingAlbum || existingAlbum.userId !== userId) {
            return { status: "error", message: "Album not found, or album don't belong to this user" };
        }

        const updatedAlbum = await prisma.album.update({
            where: { id: albumId },
            data
        });
        return updatedAlbum;
    } catch (error) {
        debug("Error updating album:", error);
        return { status: "error", message: "Internal server error" };
    }
}
