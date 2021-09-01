let urlParams = new URLSearchParams(window.location.search);
let product;

const createProductElement = (product) => {
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-pic').style.backgroundImage = `url('${product.image}')`;
    document.getElementById('price').textContent = `${product.price}$`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('remove').onclick = () => {
        if (localStorage.getItem(JSON.stringify(product)) === null) {
            alert('Actually there is nothing to delete!');
        }
        else if (confirm(`Are you sure you want to remove "${product.title}" from your cart?`)) {
            localStorage.removeItem(JSON.stringify(product))
        }
    }
}

const resizePicture = () => {
    let size = document.getElementById('product-size').value;
    let pic = document.getElementById('product-pic');
    switch (size) {
        case '0':
            pic.style.backgroundSize = '42%';
            break;
        case '1':
            pic.style.backgroundSize = '44%';
            break;
        case '2':
            pic.style.backgroundSize = '46%';
            break;
        case '3':
            pic.style.backgroundSize = '48%';
            break;
        case '4':
            pic.style.backgroundSize = '50%';
            break;
    }
}

const getProductInfo = async () => {
    try {
        console.log('getting product info...');
        let productId = urlParams.get('productId');

        product = await fetch('https://fakestoreapi.com/products/' + productId)
            .then(res=>res.json());
        console.log(product);
        createProductElement(product);
    } catch (err) {
        console.log(err);
        console.log('failed to load product data')
    }
}

const addToCart = () => {
    let quantity = document.getElementById('product-quantity').value;
    localStorage.setItem(JSON.stringify(product),quantity);
}

getProductInfo();