import '../components/auth/auth';
import '../components/servises/itemService';

export const loggedUser = {
  isAuth: false,
  accessToken: '',
  signUpUser: {
    email: '',
    id: '',
    registrationDate: '',
  },
  logInUser: {
    email: '',
    id: '',
    registrationDate: '',
    calls: [],
    favorites: [],
  },
};

export const data = {
  call: {
    allCategories: [],
    category: {},
  },
};
