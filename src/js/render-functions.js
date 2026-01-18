import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

/**
 * Creates gallery HTML markup and adds it to the gallery container
 * @param {Array} images - Array of image objects from Pixabay API
 * @returns {void}
 */

export function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery-image"/>
        </a>
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${downloads}
          </p>
        </div>
          
      </li>
      `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh();
}

/**
 * Clears gallery container content
 * @returns {void}
 */

export function clearGallery() {
  gallery.innerHTML = '';
}

/**
 * Shows loader element
 * @returns {void}
 */

export function showLoader() {
  loaderContainer.style.display = 'flex';
}

/**
 * Hides loader element
 * @returns {void}
 */

export function hideLoader() {
  loaderContainer.style.display = 'none';
}
