import { database } from './database.js'

database.iceCream.sort((a, b) => a.name.localeCompare(b.name));
export const iceCreamList = () => {
    // Generate an HTML representation of each cookie card
    return database.iceCream.map(scoop =>
        `<div class="ice-cream-card">
            <div class="card__img__button__container">
                <img src= "${scoop.img}" alt="${scoop.name} image" class="ice-cream-card__image">
                <button class="card__button" data-name="${scoop.name}">Add to Cart</button>
            </div>
            <div class="ice-cream-card__text">
                <h3 class="ice-cream-card__name">${scoop.name}!</h3>
                <p class="ice-cream-card__description">${scoop.description}</p>
            </div>
        </div>`
    ).join("")
}