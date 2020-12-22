import axios from 'axios';
import { data } from '../../data/data';
const token = localStorage.getItem('accessToken');
axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUwOGU1YTAzMGZmMDAwMTcxMmQxYmEiLCJzaWQiOiI1ZmUwOGU2MjAzMGZmMDAwMTcxMmQxYmMiLCJpYXQiOjE2MDg1NTIwMzQsImV4cCI6MTYwODU1NTYzNH0.gFZyyhMgfEUu598z17xbb7Dn55YJp1JALDWZKaK6Kiw';

//=== Call endpoints ===//

/*
 Публикация, редактирование и удаление обьявления, получает такой обьект
*/

// const newAds = {
//   title: "string",
//   description: "string",
//   category: "string",
//   price: "integer",
//   phone: "string",
//   file: "string($binary)",
// };

export const postAds = newAds => {
  return axios.post(`/call`, newAds);
};

// export const postAds = (advertData) => {
//   const { title, description, category, price, phone, file } = advertData;
//   return axios.post(`/call`, {
//     title,
//     description,
//     category,
//     price,
//     phone,
//     file,
//   });
// };

// postAds();

export const patchAds = (advertData, id) => {
  const { title, description, category, price, phone, file } = advertData;
  return axios.patch(`/call/${id}`, {
    title,
    description,
    category,
    price,
    phone,
    file,
  });
};

// patchAds();

export const delAds = id => {
  return axios.delete(`/call/${id}`);
};

// delAds();

//===

/*
 Получение страниц с категориями по номеру страницы(1-3) параметр page получает такие объекты
*/

// {
//   "sales": [
//     {
//       "title": "Tesla Model X",
//       "imageUrls": [
//         "string"
//       ],
//       "description": "New tesla",
//       "category": "transport",
//       "price": 1500000,
//       "oldPrice": 1750000,
//       "isOnSale": true,
//       "discountPercents": 14.28571428571429,
//       "phone": "+380000000000",
//       "userId": "507f1f77bcf86cd799439011",
//       "_id": "507f1f77bcf86cd799439013",
//       "__v": 0
//     }
//   ],
//   "recreationAndSport": [
//     {
//       "title": "Tesla Model X",
//       "imageUrls": [
//         "string"
//       ],
//       "description": "New tesla",
//       "category": "transport",
//       "price": 1500000,
//       "isOnSale": false,
//       "phone": "+380000000000",
//       "userId": "507f1f77bcf86cd799439011",
//       "_id": "507f1f77bcf86cd799439014",
//       "__v": 0
//     }
//   ],

export const getPagesCategories = (page = 1) => {
  return axios.get(`/call?page=${page}`);
};

// getPagesCategories();

//====

/*
 Запрос, а так же добавляет и  удаляет избранное (id параметр в обьекте call)
*/

export const getFavourites = () => {
  return axios.get(`/call/favourites`);
};

// getFavourites();

export const addFavourite = id => {
  return axios.post(`/call/favourite/${id}`);
};

// addFavourite();

export const delFavourite = id => {
  return axios.delete(`/call/favourite/${id}`);
};

// delFavourite();

//===

/*
 Получает список объявлений юзера
*/

export const getUserCalls = () => {
  return axios.get(`/call/own}`);
};

// getUserCalls();

//===

/*
 Получение страниц с категориями по запросу(значения поля поиск)
*/

export const getSearchQuery = searchQuery => {
  return axios.get(`/call/find?search=${searchQuery}`);
};

// getSearchQuery('Work');

//===

/*
 Получает список всех категорий товаров
*/

// [
//   'Недвижимость',
//   'Транспорт',
//   'Работа',
//   'Электроника',
//   'Бизнес и услуги',
//   'Отдых и спорт',
//   'Отдам бесплатно',
//   'Обмен',
// ];

export const getCategories = () => {
  return axios.get(`/call/russian-categories`);
};

// getCategories();
//===

/*
 Получает одну категорию со списка категорий
*/

export const getOneCategory = cat => {
  return axios.get(`/call/specific/${cat}`);
};

// getOneCategory();

//===

/*
 Получает список рекламных карточек
*/

// [
//   {
//     title: "Compact Stereo Speakers",
//     price: 850,
//     imageUrl:
//       "https://storage.googleapis.com/kidslikev2_bucket/z120-stereo-speakers.png",
//   },
//   {
//     title: "Flying Drone 42K black",
//     price: 4000,
//     imageUrl:
//       "https://storage.googleapis.com/kidslikev2_bucket/5cb84c5f7ff3656569c8cec5.png",
//   },
// ];

export const getAds = () => {
  return axios.get(`/call/ads`);
};

// getAds();

//===
