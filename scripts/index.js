// Находим попап в DOM
const popupElement = document.querySelector('.popup');

// Находим кнопку для открытия попапа в DOM
const popupOpenButtonElement = document.querySelector('.profile__info-row-edit-button');

// Находим кнопку для закрытия попапа в DOM
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');

// Находим имя в профаиле в DOM
let nameProfile = document.querySelector('.profile__info-row-name');

// Находим работу в профаиле в DOM
let jobProfile = document.querySelector('.profile__info-job');

// Находим форму в DOM
let formElelement = document.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = formElelement.querySelector('.popup__input_element_name');
let jobInput = formElelement.querySelector('.popup__input_element_job');

// Функция для открытия попапа
let openPopup = function () {
  // Добавляем попапу класс для его открытия
  popupElement.classList.add('popup_opened');

  // При открытии заполняем поля уже имеющейся информацией на странице
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

// Функция для закрытия попапа
let closePopup = function () {
  // Удаляем попапу класс для его закрытия
  popupElement.classList.remove('popup_opened');
};

// Обработчик отправки формы (пока что ее никуда не отправляет!)
function handleFormSubmit(evt) {
  // Отмена стандартной отправки формы
  evt.preventDefault();

  // Заменяем информацию в профаиле на ту, которую указали в форме
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  // Закрываем попап
  closePopup()
}

// Прикрепляем слушатель на кнопку открытия попапа
popupOpenButtonElement.addEventListener('click', openPopup);

// Прикрепляем слушатель на кнопку закрытия попапа
popupCloseButtonElement.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме, который следит за отправкой
formElelement.addEventListener('submit', handleFormSubmit);
