"use server"

import { revalidatePath } from "next/cache"
import { videosRepository } from "./videos.repository";

export const createVideoAction = async (
	command: CreateVideoListElementCommand,
	revalidatePagePath: string,
) => {
	await videosRepository.createVideoElement(command);
	revalidatePath(revalidatePagePath);
};
