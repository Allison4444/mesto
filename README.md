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
<article class="element">
  <img src="./images/karachayevsk.jpg" alt="Вид на Сентинский храм" class="element__photo">
  <div class="element__caption">
    <h2 class="element__caption-title">Карачаевск</h2>
    <button type="button" class="element__caption-like" aria-label="Кнопка лайка"></button>
  </div>
</article>
```

* Для придания сайту привлекательного и уникального внешнего вида использовалась технология CSS. Пример:

```css
.element__caption {
  display: flex;
  max-width: 246px;
  width: 100%;
  justify-content: space-between;
  margin: 21px 15px 25px 21px;
}

@media screen and (max-width: 900px) {
  .element__caption {
    max-width: 295px;
  }
}

@media screen and (max-width: 680px) {
  .element__caption {
    max-width: calc(100% - 2*20px);
  }
}

@media screen and (max-width: 540px) {
  .element__caption {
    padding-bottom: 25px;
    margin-bottom: 20px;
  }
}
```
* С помощью языка программирования Java Script сайт стал интерактивным. Пример:

```javascript
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

formElelement.addEventListener('submit', handleFormSubmit);
```

**Ссылка на GitHub Pages**

https://allison4444.github.io/mesto/
