const cartCount = document.querySelector(".shopping_cart_count")

const buttons = document.querySelectorAll(".add_to_cart")

const cartIcon = document.querySelector("#cart");

const cartList = document.querySelector(".cart_list")

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
}))

cartIcon.addEventListener('click', () => {
    if (cartList.style.display === "none") {
        cartList.style.display = "block"
    } else {
        cartList.style.display ="none"


    }
})

