const popupOpenButtonElement = document.querySelector('.profile-info-row__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__container_element_close-button');
const popupOpen = function () {
  popupElement.classList.add('popup_opened');
}
const popupClose = function () {
  popupElement.classList.remove('popup_opened');
}
popupOpenButtonElement.addEventListener('click', popupOpen);
popupCloseButtonElement.addEventListener('click', popupClose);


