import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43121129-d44587e207dc12fa46ae63de0';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}