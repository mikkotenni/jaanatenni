import { stripHtml } from "../utils/formatting.js";

/**
 * Fetches posts from the Wordpress CMS.
 * @param {number} category in Wordpress
 * @returns {Promise<Map<string, string>>} as posts
 */
export async function getPosts(category) {
  const response = await fetch("https://cms.jaanatenni.fi/wp-json/wp/v2/posts");
  if (!response.ok) {
    console.error(`Content could not be fetched: ${response.status}`);
    return new Map();
  }

  let posts = await response.json();
  if (posts.length > 0) {
    if (category) {
      posts = posts.filter((post) => post.categories.includes(category));
    }

    posts = posts.reduce((map, { title, content }) => {
      map.set(stripHtml(title.rendered), stripHtml(content.rendered));
      return map;
    }, new Map());
  }

  return posts;
}
