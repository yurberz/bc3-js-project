// import '../../../images/img/hero img/1.jpg';

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
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Михайло Ковальчук</p>
            <p class="student-modal__tasks">Team Lead</p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Олексанр Власюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Захар Скиба</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Валентина</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="../../../images/hero-img/1.jpg" alt="" width="60" height="60">
            <p class="student-modal__name">Констянтин Панасюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="../img-portret/SergeyVishnevskiy.jpg" alt="SV" width="60" height="60">
            <p class="student-modal__name">Юрий</p>
            <p class="student-modal__tasks"></p>
        </li>
          <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Игорь</p>
            <p class="student-modal__tasks">Team Lead</p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Олексанр Власюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Захар Скиба</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="" alt="" width="60" height="60">
            <p class="student-modal__name">Валентина</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="../../../../images/hero-img/1.jpg" alt="" width="60" height="60">
            <p class="student-modal__name">Констянтин Панасюк</p>
            <p class="student-modal__tasks"></p>
        </li>
        <li class="student-modal__item">
            <img class="student-modal__avatar" src="./img-portret/SergeyVishnevskiy.jpg" alt="SV" width="60" height="60">
            <p class="student-modal__name">Cергій Вишневський</p>
            <p class="student-modal__tasks">Scrum Master</p>
        </li>

    </ul>

</div>
    `;
  };
  const closeModal = () => {
    container.classList.remove('show-modal');
    container.addEventListener('click', close);
    document.removeEventListener('keydown', close);
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
