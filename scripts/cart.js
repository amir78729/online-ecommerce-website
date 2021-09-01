let totalPrice = 0;
const buy = () => {
    if (confirm('Are you sure that you want to buy these items?\nYour cart is going to be empty!')){
        localStorage.clear();
        creatCartItems();
    }
};




const createSingleCartItem = (data, quantity) => {

    /**
     <div class="cart-item">
         <div class="cart-item-pic"></div>

         <div>
             <p class="cart-item-title">CART ITEM TITLE</p>
             <div class="cart-item-quantity">
                 <button class="change-quantity">-</button>
                 <p>1</p>
                 <button class="change-quantity">+</button>
             </div>
         </div>

         <div>
             <a href=""><button>more info about product</button></a>
             <a href=""><button>remove item from cart</button></a>
         </div>

     </div>
     * */
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');

    // picture
    let pic = document.createElement('div');
    pic.classList.add('cart-item-pic');
    pic.style.backgroundImage = `url("${data.image}")`;
    itemContainer.appendChild(pic);

    // info div (title + quantity)
    let infoDiv = document.createElement('div');

    let title = document.createElement('p');
    title.textContent = data.title;
    title.classList.add('cart-item-title');
    infoDiv.appendChild(title);

    let cartItemQuantity = document.createElement('div');
    cartItemQuantity.classList.add('cart-item-quantity');

    /*const increase = () => {

    }
    const decrease = () => {

    }

    cartItemQuantity.innerHTML = `
        <button id="decrease" class="change-quantity">-</button>
        <p>${quantity}</p>
        <button id="increase" class="change-quantity" onclick="increase()">+</button>
        `*/
    let decrease = document.createElement('button');
    decrease.classList.add('change-quantity');
    decrease.innerText = '-';
    decrease.onclick = () => {
        quantity--;
        localStorage.setItem(JSON.stringify(data), quantity);
        creatCartItems();
    }
    cartItemQuantity.appendChild(decrease);

    let q = document.createElement('p');
    q.innerText = quantity;
    cartItemQuantity.appendChild(q);

    let increase = document.createElement('button');
    increase.classList.add('change-quantity');
    increase.innerText = '+';
    increase.onclick = () => {
        quantity++;
        localStorage.setItem(JSON.stringify(data), quantity);
        creatCartItems();
    }
    cartItemQuantity.appendChild(increase);

    infoDiv.appendChild(cartItemQuantity);
    itemContainer.appendChild(infoDiv);

    let buttons = document.createElement('div');
    buttons.innerHTML = `
      <p style="color: goldenrod; text-align: center">${quantity} × ${data.price}$</p>
      <a href="product.html?productId=${data.id}">more info about product</a>
    `

    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'remove item from cart list';
    removeBtn.onclick = () => {
        if(confirm(`Are you sure you want to remove "${data.title}" from your cart?`)) {
            localStorage.removeItem(JSON.stringify(data));
            creatCartItems();
        }
    }

    buttons.appendChild(removeBtn);

    itemContainer.appendChild(buttons);

    console.log(itemContainer.innerHTML)


    return itemContainer
}

const creatCartItems = () => {
    totalPrice = 0;

    let main = document.getElementById('main');
    main.innerHTML = '';
    let isEmpty = true
    for (let p in localStorage) {
        if (localStorage.getItem(p) !== null) {
            isEmpty = false;
            main.appendChild(createSingleCartItem(JSON.parse(p), localStorage.getItem(p)))
            totalPrice += JSON.parse(p).price * localStorage.getItem(p);
        }
    }
    if (isEmpty) {
        let emptyCart = document.createElement('footer');
        emptyCart.innerHTML = `
            <p style="text-align: center; width: 100%">Your cart is Empty</p>
        `
        main.appendChild(emptyCart);

    } else {
        // purchase area
        let footer = document.createElement('footer');
        footer.innerHTML = `
            <p>Total Price: <strong>${(totalPrice).toFixed(2)}$</strong></p>
            <button onclick="buy()">Buy!</button>`;
        main.appendChild(footer);
    }


};

creatCartItems()
