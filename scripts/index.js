// Находим попап редактирования профиля в DOM
const popupElementProfile = document.querySelector('.page__popup-profile');

// Находим кнопку для открытия попапа редактирования профиля в DOM
const popupOpenButtonElementProfile = document.querySelector('.profile__info-row-edit-button');

// Находим кнопку для закрытия попапа редактирования профиля в DOM
const popupCloseButtonElementProfile = popupElementProfile.querySelector('.popup__close-button');

// Находим имя в профаиле в DOM
let nameProfile = document.querySelector('.profile__info-row-name');

// Находим работу в профаиле в DOM
let jobProfile = document.querySelector('.profile__info-job');

// Находим форму редактирования профиля в DOM
let formElelementProfile = popupElementProfile.querySelector('.popup__form');

// Находим поля формы редактирования профиля в DOM
let nameInput = formElelementProfile.querySelector('.popup__input_element_name');
let jobInput = formElelementProfile.querySelector('.popup__input_element_job');


// Функция для открытия попапа редактирования профиля
let openPopupProfile = function () {
  // Добавляем попапу класс для его открытия
  popupElementProfile.classList.add('popup_opened');

  // При открытии заполняем поля уже имеющейся информацией на странице
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};


// Функция для закрытия попапа редактирования профиля
let closePopupProfile = function () {
  // Удаляем попапу редактирования профиля класс для его закрытия
  popupElementProfile.classList.remove('popup_opened');
};


// Обработчик отправки формы (пока что ее никуда не отправляет!)
function handleFormSubmitProfile(evt) {
  // Отмена стандартной отправки формы
  evt.preventDefault();

  // Заменяем информацию в профаиле на ту, которую указали в форме
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  // Закрываем попап редактирования профиля
  closePopupProfile();
}


// Прикрепляем слушатель на кнопку открытия попапа редактирования профиля
popupOpenButtonElementProfile.addEventListener('click', openPopupProfile);

// Прикрепляем слушатель на кнопку закрытия попапа редактирования профиля
popupCloseButtonElementProfile.addEventListener('click', closePopupProfile);

// Прикрепляем обработчик к форме, который следит за отправкой
formElelementProfile.addEventListener('submit', handleFormSubmitProfile);

// Массив из названий и фотографий для 6 карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Находим мэйн блок в DOM
const content = document.querySelector('.content');
// Находим секцию с карточками в DOM
const cards = content.querySelector('.elements');
// Находим тег темплэйт в DOM
const cardTemplate = document.querySelector('#card-template').content;
// Находим попап с фотографией
const popupElementPhoto = document.querySelector('.page__popup-photo');
// Находим фотографию в попапе
let imagePhoto = popupElementPhoto.querySelector('.popup__photo');
// Находим подпись к фотографии в попапе
let figcaptionPhoto = popupElementPhoto.querySelector('.popup__figcaption');
// Находим кнопку для закрытия попапа с фотографией
let popupCloseButtonElementPhoto = popupElementPhoto.querySelector('.popup__close-button-photo');

// функция для закрытия попапа с фотографией
let closePopupPhoto = function () {
  popupElementPhoto.classList.remove('popup_opened');
};

// Прикрепляем слушатель на кноаку закрытия попапа с фотографией
popupCloseButtonElementPhoto.addEventListener('click', closePopupPhoto);

// Функция переключения класса для лайка
function switchLikeStatus(evt) {
  evt.target.classList.toggle('element__caption-like_active');
}

// Функция удаления карточки
function deleteCard(evt) {
  const cardItem = evt.target.closest('.element');
  cardItem.remove();
}


// Функция вставки 6 карточек при загрузке страницы
function addInitialCard() {
  // Перебор массива initialCards
  initialCards.forEach(function (card) {
    // Клонируем содержимое карточки
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    // Находим кнопку лайка
    const likeButton = cardElement.querySelector('.element__caption-like');

    // Находим кнопку удаления карточки
    const cardDeleteButton = cardElement.querySelector('.element__garbage-icon');

    // Прикрепляем слушатель на кнопку лайка
    likeButton.addEventListener('click', switchLikeStatus);

    // Прикрепляем слушатель накнопку удаления карточки
    cardDeleteButton.addEventListener('click', deleteCard);

    // Берем данные из массива
    cardElement.querySelector('.element__photo').setAttribute('src', card.link);
    cardElement.querySelector('.element__caption-title').textContent = card.name;


    // Функция для открытия попапа с фотографией
    let openPopupPhoto = function () {
      popupElementPhoto.classList.add('popup_opened');

      // Берем данные из массива
      imagePhoto.setAttribute('src', card.link);
      figcaptionPhoto.textContent = card.name;
    };

    // Прикрепляем слушатель на фотографию
    cardElement.querySelector('.element__photo').addEventListener('click', openPopupPhoto);

    // вставляем карточку
    cards.append(cardElement);
  });
}

addInitialCard();


// Находим попап редактирования карточек в DOM
const popupElementCard = document.querySelector('.page__popup-card');

// Находим кнопку для открытия попапа редактирования карточек в DOM
const popupOpenButtonElementCard = document.querySelector('.profile__add-button');

// Находим кнопку для закрытия попапа редактирования карточек в DOM
const popupCloseButtonElementCard = popupElementCard.querySelector('.popup__close-button');

// Находим форму редактирования карточек в DOM
let formElelementCard = popupElementCard.querySelector('.popup__form');

// Находим поля формы редактирования карточек в DOM
let titleInput = formElelementCard.querySelector('.popup__input_element_title');
let linkInput = formElelementCard.querySelector('.popup__input_element_link');


// Функция для открытия попапа редактирования карточек
let openPopupCard = function () {
  // Добавляем попапу редактирования карточек класс для его открытия
  popupElementCard.classList.add('popup_opened');
};

// Функция для закрытия попапа редактирования карточек
let closePopupCard = function () {
  // Удаляем попапу редактирования карточек класс для его закрытия
  popupElementCard.classList.remove('popup_opened');

  titleInput.value = '';
  linkInput.value = '';
};


// Прикрепляем слушатель на кнопку открытия попапа редактирования карточек
popupOpenButtonElementCard.addEventListener('click', openPopupCard);

// Прикрепляем слушатель на кнопку закрытия попапа редактирования карточек
popupCloseButtonElementCard.addEventListener('click', closePopupCard);


// Функция добавления новой карточки
function addCard() {
  // Клонируем содержимое карточки
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  // Находим кнопку лайка
  const likeButton = cardElement.querySelector('.element__caption-like');

  // Находим кнопку удаления карточки
  const cardDeleteButton = cardElement.querySelector('.element__garbage-icon');

  // Прикрепляем слушатель на кнопку лайка
  likeButton.addEventListener('click', switchLikeStatus);

  // Прикрепляем слушатель на кнопку удаления карточки
  cardDeleteButton.addEventListener('click', deleteCard);

  // Присваиваем значение из полей ввода
  cardElement.querySelector('.element__photo').setAttribute('src', linkInput.value);
  cardElement.querySelector('.element__caption-title').textContent = titleInput.value;


  // Функция открытия попапа с фотографией
  let openPopupPhoto = function () {
    popupElementPhoto.classList.add('popup_opened');

    // Берем данные из заданных значений
    imagePhoto.setAttribute('src', cardElement.querySelector('.element__photo').getAttribute('src'));
    figcaptionPhoto.textContent = cardElement.querySelector('.element__caption-title').textContent;
  };

  // Прикрепляем слушатель на фотографию
  cardElement.querySelector('.element__photo').addEventListener('click', openPopupPhoto);

  // Вставляем новую карточку
  cards.prepend(cardElement);
}


// Обработчик отправки формы (пока что ее никуда не отправляет!)
function handleFormSubmitCard(evt) {
  // // Отмена стандартной отправки формы
  evt.preventDefault();

  // Вызов функции добавления новой карточки
  addCard();

  // Вызов функции закрытия попапа
  closePopupCard();

  // Обнуляем значения полей ввода
  linkInput.value = '';
  titleInput.value = '';
}

// Прикрепляем обработчик к форме, который следит за отправкой
formElelementCard.addEventListener('submit', handleFormSubmitCard);



