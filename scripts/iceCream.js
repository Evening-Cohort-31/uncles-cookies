import { database } from './database.js'


export const iceCreamList = () => {
    // Generate an HTML representation of each cookie card
    return database.iceCream.map(scoop => 
        `<div class="ice-cream-card">
            <h3>${scoop.name}!</h3>
            <p>${scoop.description}</p>
            <img src= "${scoop.img}" alt="${scoop.name} image" class="iceCream__image">
        </div>`
    ).join("")
}