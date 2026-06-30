module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/audio/");
    eleventyConfig.addPassthroughCopy("./src/documents/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addCollection("navPages", (collectionApi) => {
    return collectionApi
        .getFilteredByTag("pages")
        .sort((a, b) => {
        return a.data.navOrder - b.data.navOrder;
        });
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}



