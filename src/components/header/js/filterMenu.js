import other from '../templates/other.hbs';
import { getCategories } from '../../servises/itemService.js';

// //===

const categoriesList = document.querySelector('.categories-filter');

const markupFilter = () => {
  getCategories().then(data => {
    markup(data);
  });
};

markupFilter();

const markup = cat => {
  const filterCategories = { categories: cat };
  categoriesList.insertAdjacentHTML('beforeend', other(filterCategories));
  //   console.log(filterCategories);
};

// //===

const mobileFilters = document.querySelector('.categories-filter-mobile');
const tabletFilters = document.querySelector('.categories-filter-tablet');
const filterBtn = document.querySelector('.filters-wrapper');
const mobileFiltersBtn = document.querySelector('.mobile-filters-wrapper');

// const mobileFilter = () => {
//   getCategories().then(data => {
//     markupMobile(data);
//   });
// };

// const markupMobile = cat => {
//   const filterCategories = { categories: cat };

//   if (mobileFilters.innerHTML === '') {
//     mobileFilters.innerHTML = other(filterCategories);
//   } else {
//     mobileFilters.innerHTML = '';
//   }
// };

// mobileFiltersBtn.addEventListener('click', mobileFilter);

const tabletFilter = () => {
  getCategories().then(data => {
    markupTablet(data);
  });
};

const markupTablet = cat => {
  const filterCategories = { categories: cat };

  if (tabletFilters.innerHTML === '') {
    tabletFilters.style.display = 'flex';
    tabletFilters.innerHTML = other(filterCategories);
  } else {
    tabletFilters.innerHTML = '';
    tabletFilters.style.display = 'none';
  }
};

filterBtn.addEventListener('click', tabletFilter);

// const markupTablet = () => {
//   if (window.screen.width > 320 && window.screen.width < 1279) {
//     if (categoriesList.style.display === 'flex') {
//       categoriesList.style.display = 'none';
//     } else {
//       categoriesList.style.display = 'flex';
//     }
//   }
// };

// filterBtn.addEventListener('click', markupTablet);

// //===

const clearCategoryBtn = document.querySelector('.clear-filters-wrapper');
const clearCategoryMobileBtn = document.querySelector(
  '.mobile-clear-filters-wrapper',
);

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
