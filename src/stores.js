import { writable } from 'svelte/store';

export const FeedbackStore = writable([
	{
		id: 1,
		rating: 10,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga est, ratione, cupiditate a ducimus expedita, sed animi assumenda quibusdam voluptatibus in dicta. Veritatis cumque architecto ducimus consequuntur sapiente veniam suscipit!'
	},
	{
		id: 2,
		rating: 1,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga est, ratione, cupiditate a ducimus expedita, sed animi assumenda quibusdam voluptatibus in dicta. Veritatis cumque architecto ducimus consequuntur sapiente veniam suscipit!'
	},
	{
		id: 3,
		rating: 7,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga est, ratione, cupiditate a ducimus expedita, sed animi assumenda quibusdam voluptatibus in dicta. Veritatis cumque architecto ducimus consequuntur sapiente veniam suscipit!'
	}
]);
