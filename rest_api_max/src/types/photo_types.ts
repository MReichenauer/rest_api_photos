import { Photo } from "@prisma/client";

export type CreatePhoto = Omit<Photo, "id">

export type UpdatePhotoResult =
  | { status: "success"; data: Photo }
  | { status: "error"; message: string };
