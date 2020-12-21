import '../css/styles.css';
// import devTemplates from '../templates/dev-templates.hbs';
import { modalBackDrop } from '../modal-window/dev-modal';
// import { modalBackDrop } from '../../modal/modalBackDrop';

const studentBtn = document.querySelector('.js-students');
studentBtn.addEventListener('click', modalBackDrop);
