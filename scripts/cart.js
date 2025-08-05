const cartCount = document.querySelector(".cart__icon__counter")

const buttons = document.querySelectorAll(".card__button")

const cartIcon = document.querySelector(".cart__icon__img");

const cartList = document.querySelector(".cart__list__ul")

const cartListContainer = document.querySelector(".cart__list")

const total = document.querySelector(".cart__list__total")

let cart = []
let count = 0

buttons.forEach(button => button.addEventListener('click', (e) => {
    const name = e.target.getAttribute("data-name")
    let item = cart.find((obj) => obj.name === name)

    if (!item) {
        cart.push({name: name, amount: 1})
    } else {
        item.amount += 1
    }

    count += 1    
    if (count > 0) {
        cartCount.innerHTML = count
    }
    
    let html = "";
    for (const item of cart) {
        html += `<li>${item.name}:  ${item.amount}</li>`
    }
    cartList.innerHTML = html;
    total.innerHTML = `<p>Total:\t\t${count}</p>`
}))

cartIcon.addEventListener('click', () => {
    if (cartListContainer.style.display === "none") {
        cartListContainer.style.display = "block"
    } else {
        cartListContainer.style.display ="none"


    }
})

