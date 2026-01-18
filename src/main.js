import { getImageByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.form`);

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = form.querySelector('input[name="search-text"]');
  const searchQuery = searchInput.value.trim();

  searchInput.value = '';

  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }
  clearGallery();

  showLoader();

  getImageByQuery(searchQuery)
    .then(response => {
      hideLoader();
      if (!response.hits || response.hits.length === 0) {
        iziToast.info({
          title: 'info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(response.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: error.message || 'Failed to fetch images. Please try again.',
        position: 'topRight',
      });
      console.error(error);
    });
});
