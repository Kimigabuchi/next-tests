import { revalidatePath } from "next/cache";
import { videosRepository } from "../videos.repository";
import { VideoItem } from "../ui/video-item";

export async function VideosList({
	revalidatePagePath,
}: {
	revalidatePagePath: string;
}) {
	const videosList = await videosRepository.getVideosList();

	const handleDeleteAction = async (videoId: string) => {
		"use server";

		await videosRepository.deleteVideoElement({ id: videoId })
		revalidatePath(revalidatePagePath)
	}

	return <div className="flex flex-col gap-3">
		{videosList.map((video) => (
			<VideoItem
				key={video.id}
				video={video}
				onDelete={handleDeleteAction.bind(null, video.id)}
			/>
		))}
	</div>;
}
