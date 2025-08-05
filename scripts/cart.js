const cartCount = document.querySelector(".shopping_cart_count")

const buttons = document.querySelectorAll(".add_to_cart")

let count = 0

buttons.forEach(button => button.addEventListener('click', () => {
    count += 1    
    if (count > 0) {
        cartCount.innerHTML = count
    }
    
}))
