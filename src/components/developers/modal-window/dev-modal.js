// import '../../../images/img/hero img/1.jpg';
import SergeyVishnevskiy from '../img-portret/SergeyVishnevskiy.jpg';
import YuriiBerezynets from '../img-portret/YuriiBerezynets.jpg';
import MyhailoKovalchuk from '../img-portret/MyhailoKovalchuk.jpg';
import IrynaKosynienko from '../img-portret/IrynaKosynienko.jpg';
import AleksandrVlasiuk from '../img-portret/AleksandrVlasiuk.jpg';
import IrinaMaliugova from '../img-portret/IrinaMaliugova.jpg';
import TatianaUlrich from '../img-portret/TatianaUlrich.jpg';
import IgorVasylytsya from '../img-portret/IgorVasylytsya.jpg';
import KostyaPanasiuk from '../img-portret/KostyaPanasiuk.jpg';
import YuliyaChyzhkova from '../img-portret/YuliyaChyzhkova.jpg';
import ZaharSkyba from '../img-portret/ZaharSkyba.jpg';
import ValentinaManankova from '../img-portret/ValentinaManankova.jpg';

export const modalBackDrop = innerElement => {
  const body = document.querySelector('body');
  const container = document.querySelector('.modal');

  const createModalMarkup = closeModal => {
    return `
        <div class="student-modal">

    <button type="button" class="student-modal__close-btn"></button>

    <h2 class="student-modal__form--title">Наша команда</h2>

    <ul class="student-modal__list">
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${MyhailoKovalchuk}" alt="Михаил Ковальчук" width="60" height="60">
            <p class="student-modal__name">Михаил Ковальчук</p>
            <p class="student-modal__tasks">Team Lead</p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${AleksandrVlasiuk}" alt="Александр Власюк" width="60" height="60">
            <p class="student-modal__name">Александр Власюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${YuriiBerezynets}" alt="Юрий Березинец" width="60" height="60">
            <p class="student-modal__name">Юрий Березинец</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${KostyaPanasiuk}" alt="Константин Панасюк" width="60" height="60">
            <p class="student-modal__name">Константин Панасюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${ValentinaManankova}" alt="Валентина Мананкова" width="60" height="60">
            <p class="student-modal__name">Валентина Мананкова</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${IrinaMaliugova}" alt="Ирина Малюгова" width="60" height="60">
        <p class="student-modal__name">Ирина Малюгова</p>
        <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${IrynaKosynienko}" alt="Ирина Косиненко" width="60" height="60">
        <p class="student-modal__name">Ирина Косиненко</p>
        <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${TatianaUlrich}" alt="Татьяна Ульрих " width="60" height="60">
        <p class="student-modal__name">Татьяна Ульрих </p>
        <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${YuliyaChyzhkova}" alt="Юлия Чижкова" width="60" height="60">
        <p class="student-modal__name">Юлия Чижкова</p>
        <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="${IgorVasylytsya}" alt="" width="60" height="60">
            <p class="student-modal__name">Игорь</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${ZaharSkyba}" alt="Захар Скиба" width="60" height="60">
        <p class="student-modal__name">Захар Скиба</p>
        <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
        <img class="student-modal__avatar" src="${SergeyVishnevskiy}" alt="Cергей Вишневський" width="60" height="60">
        <p class="student-modal__name">Cергей Вишневський</p>
            <p class="student-modal__tasks">Scrum Master</p>
        </li>

    </ul>

</div>
    `;
  };
  const closeModal = () => {
    container.classList.remove('show-modal');
    // container.addEventListener('click', close);
    // document.removeEventListener('keydown', close);
    body.style.overflow = 'unset';
  };
  const close = e => {
    if (e.target === document.querySelector('.modal') || e.key === 'Escape') {
      closeModal();
    } else return;
  };
  container.innerHTML = createModalMarkup(closeModal);
  container.classList.add('show-modal', 'transition-effect');
  body.style.overflow = 'hidden';
  container.addEventListener('click', close);
  document.addEventListener('keydown', close);
  return closeModal;
};
