module.exports = function(eleventyConfig){


    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
  
    eleventyConfig.setLibrary("md", markdownIt(options));

    eleventyConfig.addPairedShortcode("markdown", function(content) {
		return content;
	});

    eleventyConfig.addPassthroughCopy("assets");

    return {
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "_includes"
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        passthroughFileCopy: true
    };


};
