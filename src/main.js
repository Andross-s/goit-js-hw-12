import { getImageByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.form`);
const loadMoreButton = document.querySelector('.load-more-button');

// Global variables for pagination
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
const per_page = 15;

// Handle form submission
form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchInput = form.querySelector('input[name="search-text"]');
  const searchQuery = searchInput.value.trim();

  searchInput.value = '';

  // Check if search field is empty
  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  // Reset pagination for new search
  currentPage = 1;
  currentQuery = searchQuery;

  // Hide load more button initially
  hideLoadMoreButton();

  // Clear previous search results
  clearGallery();

  // Show loader
  showLoader();

  try {
    // Fetch images from API
    const response = await getImageByQuery(currentQuery, currentPage);
    totalHits = response.totalHits;

    // Hide loader
    hideLoader();

    // Check if response has hits array
    if (!response.hits || response.hits.length === 0) {
      iziToast.info({
        title: 'info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    // Create gallery with fetched images
    createGallery(response.hits);

    // Check if there are more images to load
    const loadedImages = currentPage * per_page;
    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'info',
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    // Hide loader on error
    hideLoader();
    // Show error message
    iziToast.error({
      title: 'Error',
      message: error.message || 'Failed to fetch images. Please try again.',
      position: 'topRight',
    });
  }
});

// Handle Load More button click
loadMoreButton.addEventListener('click', async () => {
  // Increment page number for pagination
  currentPage += 1;

  // Hide load more button and show loader
  hideLoadMoreButton();
  showLoader();

  try {
    // Fetch next page of images
    const response = await getImageByQuery(currentQuery, currentPage);

    // Hide loader
    hideLoader();

    // Check if response has hits array
    if (!response.hits || response.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    // Add new images to gallery
    createGallery(response.hits);

    // Scroll smoothly after loading new images
    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    // Check if there are more images to load
    const loadedImages = currentPage * per_page;
    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    // Hide loader on error
    hideLoader();

    // Show error message
    iziToast.error({
      title: 'Error',
      message: error.message || 'Failed to fetch images. Please try again.',
      position: 'topRight',
    });
  }
});
