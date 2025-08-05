import { database } from './database.js'

database.cookies.sort((a, b) => a.name.localeCompare(b.name));
export const cookiesList = () => {
    // Generate an HTML representation of each cookie card
    return database.cookies.map(cookie =>
        `<div class="cookie-card">
          <div class="image_button_container">
            <img src= "${cookie.img}" alt="${cookie.name} image" class="cookie-card__image">
            <button class="add_to_cart" data-name="${cookie.name}">Add to Cart</button>
          </div>
            <div class="cookie-card__text">
                <h3 class="cookie-card__name">${cookie.name}!</h3>
                <p class="cookie-card__description">${cookie.description}</p>
            </div>
        </div>`
    ).join("")
}