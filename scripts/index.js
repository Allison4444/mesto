const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile-info-row__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const nameProfile = document.querySelector('.profile-info-row__name');
const jobProfile = document.querySelector('.profile-info__job');
const formElelement = document.querySelector('.popup__container');
const nameInput = formElelement.querySelector('.popup__input_element_name');
const jobInput = formElelement.querySelector('.popup__input_element_job');

nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;

const popupOpen = function () {
  popupElement.classList.add('popup_opened');
};

const popupClose = function () {
  popupElement.classList.remove('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

popupOpenButtonElement.addEventListener('click', popupOpen);
popupCloseButtonElement.addEventListener('click', popupClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupElement.classList.remove('popup_opened');
}

formElelement.addEventListener('submit', handleFormSubmit);



