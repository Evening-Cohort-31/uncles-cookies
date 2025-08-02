import { database } from './database.js'


export const cookiesList = () => {
    // Generate an HTML representation of each cookie card
    return database.cookies.map(cookie => 
        `<div class="cookie-card">
            <h3>${cookie.name}!</h3>
            <p>${cookie.description}</p>
            <img src= "${cookie.img}" alt="${cookie.name} image" class="cookie__image">
        </div>`
    ).join("")
}