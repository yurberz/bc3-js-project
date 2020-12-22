import other from '../templates/other.hbs';
import { getCategories } from '../../servises/itemService.js';

const categoriesList = document.querySelector('.categories-filter');
const clearCategoryBtn = document.querySelector('.clear-filters-wrapper');
const clearCategoryMobileBtn = document.querySelector(
  '.mobile-clear-filters-wrapper',
);

//===

export const markupFilter = () => {
  getCategories().then(data => {
    markup(data);
  });
};

markupFilter();

const markup = cat => {
  const filterCategories = { categories: cat };
  categoriesList.insertAdjacentHTML('beforeend', other(filterCategories));
};

//===

function activeCategory(e) {
  if (e.target.nodeName === 'A') {
    clearActiveCategory();
    if (e.target.classList.contains('active-category')) {
      return;
    }
    e.target.classList.add('active-category');
  }
}

function clearActiveCategory() {
  if (document.querySelector('.active-category')) {
    let activeCategoryATM = document.querySelector('.active-category');
    activeCategoryATM.classList.remove('active-category');
  }
}

categoriesList.addEventListener('click', activeCategory);
clearCategoryBtn.addEventListener('click', clearActiveCategory);
clearCategoryMobileBtn.addEventListener('click', clearActiveCategory);
