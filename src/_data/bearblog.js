const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async function () {
    try {
        const feed = await parser.parseURL('https://vaiva.bearblog.dev/feed/?type=rss');
        
        // Uncomment for troubleshooting
        // console.log("Fetched posts:", feed.items.slice(0,5));

        return feed.items.slice(0,5).map(post => ({
            title: post.title,
            date: post.pubDate,
            content: post.contentSnippet || post.content
        }));
    } catch (error) {
        console.error("Error fetching Bearblog feed:", error);
        return [];
    }
};
