import { dbClient } from "@/shared/lib/db"
import { cache } from "react"

class VideosRepository {
	getVideosList = cache(
		(): Promise<VideoListElement[]> => dbClient.video.findMany()
	);

	createVideoElement = (
		command: CreateVideoListElementCommand,
	): Promise<VideoListElement> => {
		return dbClient.video.create({
			data: command,
		})
	};

	deleteVideoElement = (command: DeleteVideoListElementCommand) => {
		return dbClient.video.delete({
			where: { id: command.id },
		})
	};
}

export const videosRepository = new VideosRepository();
