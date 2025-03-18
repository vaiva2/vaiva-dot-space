const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async function () {
    try {
        const feed = await parser.parseURL('https://vaiva.bearblog.dev/feed/?type=rss');
        
        console.log("Fetched posts:", feed.items.slice(0,3));

        return feed.items.slice(0,3).map(post => ({
            title: post.title,
            link: post.link,
            date: post.pubDate,
            content: post.contentSnippet || post.content
        }));
    } catch (error) {
        console.error("Error fetching Bearblog feed:", error);
        return [];
    }
};
