const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async function () {
    try {
        const feed = await parser.parseURL('https://vaiva.bearblog.dev/feed/?type=rss');

        // uncomment for debugging
        // console.log("Total fetched posts:", feed.items.length);

        // filter posts that contain an image
        const postsWithImages = feed.items
            .filter(post => post.content && post.content.includes('<img'))
            .slice(0, 1)
            .map(post => ({
                title: post.title,
                date: post.pubDate,
                image: post.content.match(/<img.*?src="(.*?)"/)?.[1] // extract first image URL
            }));

        // uncomment for debugging
        // console.log("Posts with images:", postsWithImages.length);

        return postsWithImages;

    } catch (error) {
        console.error("Error fetching Bearblog images:", error);
        return [];
    }
};
