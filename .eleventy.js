
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("user", function(firstName, lastName) {
    return `<div class="user">
    <div class="first-name">${firstName}</div>
    <div class="last-name">${lastName}</div>
  </div>`;
  });
};