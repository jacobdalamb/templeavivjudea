import { collection, config, fields } from "@keystatic/core";
// import { repoURL } from "../utils/meta";

export default config({
	storage: {
		kind: "cloud",
		cloud: {
			project: "temple-aviv-judea/templeavivjudea",
		},
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
	},
});
