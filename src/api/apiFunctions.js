import { stripHtml } from "../utils/formatting.js";

/**
 * Fetches posts from the Wordpress CMS and returns them as a map of titles and content.
 * If a category ID is provided, filters posts by the specified category.
 *
 * @param {number} [category] - The ID of the category in Wordpress to filter posts by.
 * @returns {Promise<Map<string, string>>} - A promise that resolves to a Map where each key is a post title, and the value is the post content.
 *
 * @throws {Error} If the content could not be fetched from the CMS.
 */
export async function getPosts(category) {
  // Using Promise object to make sure that subsequent function calls don't fetch again.
  if (!window.contentPromise) {
    window.contentPromise = fetch(
      "https://cms.jaanatenni.fi/wp-json/wp/v2/posts"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Content could not be fetched: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        window.content = { posts: data };
        return data;
      })
      .catch((error) => {
        console.error(error);
        window.content = { posts: [] };
        return [];
      });
  }

  let posts = await window.contentPromise;
  if (posts.length > 0) {
    if (category) {
      posts = posts.filter((post) => post.categories.includes(category));
    }

    posts = posts.reduce((map, { title, content }) => {
      if (title.rendered !== "Bulleted list") {
        map.set(stripHtml(title.rendered), stripHtml(content.rendered));
      } else {
        map.set(stripHtml(title.rendered), content.rendered);
      }
      return map;
    }, new Map());
  }

  return posts;
}
