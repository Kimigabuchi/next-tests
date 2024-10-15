import { render, screen } from "@testing-library/react"
import userEvent, { UserEvent } from "@testing-library/user-event"
import { VideoItem } from "./video-item"

describe('video item', () => {
	it('should call delete callback', async () => {
		const onDelete = jest.fn();
		render(
			<VideoItem video={{
				id: "test-id",
				description: "test description",
				name: "test-name",
			}}
			onDelete={onDelete}
		/>);

		await userEvent.click(screen.getByText("Delete"));

		expect(onDelete).toHaveBeenCalled();
	})
})