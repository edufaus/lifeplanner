export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/room/[roomId].svelte"),
	() => import("../../src/routes/room/invalidId.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"room/invalidId": [[0, 4], [1]],
	"room/[roomId]": [[0, 3], [1]]
};