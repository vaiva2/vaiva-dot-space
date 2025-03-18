const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async function () {
    try {
        const feed = await parser.parseURL('https://2025present.bearblog.dev/feed/?type=rss');
        
        // Uncomment for troubleshooting
        console.log("Fetched posts:", feed.items.slice(0,1));

        return feed.items.slice(0,1).map(post => ({
            title: post.title,
            date: new Date(post.pubDate).toLocaleDateString('da-DK', {
                month: 'long',
                day: 'numeric',
              }),                          
            content: post.content
        }));
    } catch (error) {
        console.error("Error fetching 2025-present post:", error);
        return [];
    }
};
