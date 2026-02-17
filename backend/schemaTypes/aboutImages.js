export default {
    name: "aboutImages",
    title: "About Images",
    type: "document",
    fields: [
        {
            name: "mentalHealth",
            title: "Mental Health",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "vocalArtistry",
            title: "Vocal Artistry",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "researchAnalysis",
            title: "Research & Analysis",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
    __experimental_actions: ['update', 'publish'],
};
