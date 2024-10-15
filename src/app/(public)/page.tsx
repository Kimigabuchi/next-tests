import { VideosList } from "@/features/videos-list/pub/videos-list"
import { CreateVideoForm } from "@/features/videos-list/pub/create-videos-form"


export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col p-8">
			<h1 className="text-3xl mb-2">Videos</h1>
			<CreateVideoForm
				revalidatePagePath="/"
				className="max-w-[300px] mb-10"
			/>
			<VideosList revalidatePagePath="/" />
		</main>
	)
}
