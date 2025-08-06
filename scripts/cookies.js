import { database } from './database.js'

database.cookies.sort((a, b) => a.name.localeCompare(b.name));
export const cookiesList = () => {
    // Generate an HTML representation of each cookie card
    return database.cookies.map(cookie =>
        `<div class="cookie-card">
          <div class="card__image__button__container">
            <img src= "${cookie.img}" alt="${cookie.name} image" class="cookie-card__image">
            <button class="card__button" data-name="${cookie.name}">Add to Cart</button>
          </div>
            <div class="cookie-card__text">
                <h3 class="cookie-card__name">${cookie.name}!</h3>
                <p class="cookie-card__description">${cookie.description}</p>
            </div>
            <button data-ingredientslist= "Ingredients: ${cookie.ingredients} Calories: ${cookie.calories}" 
                    class="cookie__button"> View Ingredients
            </button>
        </div>`
    ).join("")
}