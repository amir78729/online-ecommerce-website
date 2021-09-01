const createSingleCartItem = (data, quantity) => {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');

    // picture
    let pic = document.createElement('div');
    pic.classList.add('cart-item-pic');
    pic.style.backgroundImage = `url("${data.image}")`;
    itemContainer.appendChild(pic);

    return itemContainer
}

const creatCartItems = () => {
    let main = document.getElementById('main');
    for (let p in localStorage) {
        if (localStorage.getItem(p) !== null) {
            main.appendChild(createSingleCartItem(JSON.parse(p), localStorage.getItem(p)))
        }
    }
};

creatCartItems()
