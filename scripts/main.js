import { cookiesList } from "./cookies.js"
import { iceCreamList } from "./iceCream.js"

const cookiesHTML = cookiesList()

const iceCreamHTML = iceCreamList()


let cookiesContainer = document.querySelector("#cookies-container")
cookiesContainer.innerHTML += `${cookiesHTML}`

let iceCreamContainer = document.querySelector("#ice-cream-container")
iceCreamContainer.innerHTML += `${iceCreamHTML}`