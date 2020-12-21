import axios from 'axios';
import validator from 'validator';
import './auth.css';
import signUp from './template/signUp.hbs';
import logOut  from './template/logOut.hbs';

const authWrapRef = document.querySelector('.auth__wrap');

// =========SIGN UP========================================

// authWrapRef.innerHTML = signUp();


// const refs = {
//     authForm: document.forms.authForm,
//     clsBtn: authForm.elements.close,
//     authFormBtnSignUp: authForm.querySelector('.authForm__btn_signUp'),
//     authFormBtnLogIn: authForm.querySelector('.authForm__btn_logIn'),
//     authFormInput:authForm.querySelectorAll('.authForm__input'),
// };

// const url = 'https://callboard-backend.herokuapp.com';

// const user = {
//     email: '',
//     password: '',
// };

// let logInUser ={
//   email: '',
//   id: '',
//   favorites: [],
//   calls: [],
//   registrationDate: '',
// };

// let signUpUser = {
//     email: '',
//     id: '',
//     registrationDate: '',
// };


// const gatherInfo = (e) => {
//     if (validator.isEmail(authForm.elements.email.value)) {
//        user[e.target.name] = e.target.value;
//     }
//     return user;
// };

// const onSignUpBtn = async () => {
//     try {
//         const result = await axios.post(`${url}/auth/register`, { ...user });
//         signUpUser = { ...result.data };
//     } catch (error) {
//         throw error;
//     } finally {
//         console.log('signUpUser', signUpUser);
//     };
// };

// const onLogInBtn = async () => {
//     const result = await axios.post(`${url}/auth/login`, { ...user });
//     logInUser = {...result.data.user}
//     localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
// }

// const submitHandler = e => {
//     e.preventDefault();
//     refs.authForm.addEventListener('input', gatherInfo);
//     refs.authFormBtnSignUp.addEventListener('click', onSignUpBtn);
//     refs.authFormBtnLogIn.addEventListener('click', onLogInBtn);
// }


// refs.authForm.addEventListener('submit', submitHandler);
// refs.authForm.addEventListener('input', gatherInfo);

// ==================SIGN OUT========================

// authWrapRef.innerHTML = logOut();

// const refs = {
//     authFormBtnLogOut: document.querySelector('.authForm__btn_logOut'),
//     authFormBtnExit: document.querySelector('.authForm__btn_exit'),
//     authFormBtnCls: document.querySelector('.authForm__btn_cls'),
// };


// const onLogoutBtn = () => {
//     if (localStorage.getItem('accessToken')) {
//         console.log(localStorage);
//         localStorage.removeItem('accessToken');
//     };
//     clsModal();
// };

// const clsModal = () => {
//     console.log('close');
// };

// refs.authFormBtnLogOut.addEventListener('click', onLogoutBtn);
// refs.authFormBtnExit.addEventListener('click', clsModal);
// refs.authFormBtnCls.addEventListener('click', clsModal);



