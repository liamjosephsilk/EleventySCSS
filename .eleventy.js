module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/site/css");

  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
