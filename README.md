# Проект: Место
---
### Обзор

* Описание проекта и его функциональности
* Используемые технологии
* Ссылка на GitHub Pages

**Описание проекта и его функциональности**

Сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.

**Используемые технологии**

* Для написания сайта использовалась технология HTML. Например:

```html
<article class="element" aria-label="Карточка">
  <img src="./images/karachayevsk.jpg" alt="Вид на Сентинский храм" class="element__photo">
  <div class="mask-group element__mask-group">
    <p class="mask-group__title">Карачаевск</p>
    <button class="mask-group__like"></button>
  </div>
</article>
```

* Для придания сайту привлекательного и уникального внешнего вида использовалась технология CSS. Пример:

```css
.element {
  border-radius: 10px;
  background-color: #fff;
}

@media screen and (max-width: 540px) {
  .element {
    max-height: 361px;
    height: 361px;
    margin-bottom: 20px;
  }

  .element:last-child {
    margin-bottom: 0;
  }
}
```
* С помощью языка программирования Java Script сайт стал интерактивным. Пример:

```javascript
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupElement.classList.remove('popup_opened');
}
```

**Ссылка на GitHub Pages**

https://allison4444.github.io/mesto/
