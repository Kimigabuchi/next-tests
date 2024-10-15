"use client";
import { Button } from "@/shared/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter
} from "@/shared/ui/card";
import { useTransition } from "react";

export function VideoItem({
	video,
	onDelete,
}: {
	video: VideoListElement;
	onDelete: () => Promise<void>;
}) {
	const [
		isLoadingDelete,
		startDeleteTransition,
	] = useTransition()

	const handleDelete = () => {
		startDeleteTransition(async () => {
			await onDelete();
		})
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{video.name}</CardTitle>
				<CardDescription>{video.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button
					disabled={isLoadingDelete}
					onClick={handleDelete}
				>Delete</Button>
			</CardFooter>
		</Card>
	);
}
