type VideoListElement = {
	id: string;
	name: string;
	description: string;
}

type CreateVideoListElementCommand = {
	name: string;
	description: string;
}

type DeleteVideoListElementCommand = {
	id: string;
}
