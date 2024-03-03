import { Album } from "@prisma/client";

export type CreateAlbum = Omit<Album, "id">

export type UpdateAlbumResult = { id: number; title: string; userId: number | null; } | { status: string; message: string; };
