const addProductToHome = (product) => {

    /*<div class="home-item tooltip">
        <div>
            <p>stock+</p>
            <button class="like-button"><i class='fas fa-heart'></i></button>
        </div>
        <div class="item-image">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="an item from the shop">
        </div>
        <p class="item-name">Caylee Top</p>
        <div class="prices">
            <p class="old-price">$ 42</p>
            <p class="current-price">$ 30.90</p>
        </div>
        <a href="product.html"><button class="more-info"><i class='fas fa-info-circle'></i> more information...</button></a>
    </div> */

    let homeItem = document.createElement('div');
    homeItem.classList.add('home-item', 'tooltip');

    // top div
    let homeItemTopDiv = document.createElement('div');
    let homeItemTopDivP = document.createElement('p');
    homeItemTopDivP.appendChild(document.createTextNode('stock+'));
    homeItemTopDiv.appendChild(homeItemTopDivP);
    let likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    let likeIcon = document.createElement('i');
    likeIcon.classList.add('fas', 'fa-heart');
    likeButton.appendChild(likeIcon);
    homeItemTopDiv.appendChild(likeButton);
    homeItem.appendChild(homeItemTopDiv);

    // image of the product
    let itemImageDiv = document.createElement('div');
    itemImageDiv.classList.add('item-image');
    itemImageDiv.style.backgroundImage = `url('${product.image}')`;
    homeItem.appendChild(itemImageDiv);

    // item name
    let itemName = document.createElement('p');
    itemName.appendChild(document.createTextNode(product.title));
    itemName.classList.add('item-name');
    homeItem.appendChild(itemName);

    // prices
    let pricesDiv =  document.createElement('div');
    pricesDiv.classList.add('prices');
    let oldPrice = document.createElement('p');
    oldPrice.appendChild(document.createTextNode('$ ' + product.price));
    oldPrice.classList.add('old-price');
    pricesDiv.appendChild(oldPrice);
    let currentPrice = document.createElement('p');
    currentPrice.appendChild(document.createTextNode('$ ' + (product.price * .9).toFixed(2)));
    currentPrice.classList.add('current-price');
    pricesDiv.appendChild(currentPrice);
    homeItem.appendChild(pricesDiv);

    // more information
    let moreInfo = document.createElement('a');
    moreInfo.href = "product.html";
    let moreInfoButton = document.createElement('button');
    moreInfoButton.classList.add('more-info');
    let moreInfoButtonIcon = document.createElement('i');
    moreInfoButtonIcon.classList.add('fas', 'fa-info-circle');
    moreInfoButton.appendChild(moreInfoButtonIcon);
    moreInfoButton.appendChild(document.createTextNode(' more information...'));
    moreInfo.appendChild(moreInfoButton);
    homeItem.appendChild(moreInfo);

    homeItem.setAttribute('title', `${product.title}:\n${product.description}`)

    return homeItem
}

let productsInformation;


const getInfo = async () => {
    try {
        productsInformation = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json());

        let main = document.getElementById('main');

        for (let p = 0; p < productsInformation.length; p++) {
            main.appendChild(addProductToHome(productsInformation[p]));
        }
        console.log('home items are ready.')
    } catch (error) {
        console.log(error, '\n failed to get home items from the api');
    }
}

/*export const categorizeHome = category => {
    alert(category)
}*/

/*
module.exports(categorizeHome)
*/

getInfo();