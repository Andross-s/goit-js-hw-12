import axios from 'axios';

const API_KEY = '54139037-7f576b0c871bb9407eaf16e34';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Fetches images from Pixabay API by search query
 * @param {string} query - Search query string
 * @returns {Promise<Object>} Response from Pixabay API
 */

export async function getImageByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
}
