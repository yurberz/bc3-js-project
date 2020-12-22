import '../components/auth/auth';

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
