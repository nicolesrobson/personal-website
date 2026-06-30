module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/audio/");
    eleventyConfig.addPassthroughCopy("./src/documents/");
    eleventyConfig.addWatchTarget("./src/css/");
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}

