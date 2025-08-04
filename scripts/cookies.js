import { database } from './database.js'


export const cookiesList = () => {
    // Generate an HTML representation of each cookie card
    return database.cookies.map(cookie =>
        `<div class="cookie-card">
          <img src= "${cookie.img}" alt="${cookie.name} image" class="cookie-card__image">
            <div class="cookie-card__text">
                <h3 class="cookie-card__name">${cookie.name}!</h3>
                <p class="cookie-card__description">${cookie.description}</p>
            </div>
        </div>`
    ).join("")
}