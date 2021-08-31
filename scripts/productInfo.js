const createProductElement = (product) => {
    let title = document.getElementById('product-title');
    let titleText = document.createTextNode(product.title);
    title.appendChild(titleText);

    let pic = document.createElement('div');
    pic.classList.add('product-image');
    pic.id = 'profile-pic';
    pic.style.backgroundImage = `url('${product.image}')`;
    pic.style.backgroundSize = '46%';
    title.after(pic);

    document.getElementById('price').textContent = `${product.price}$`
}

const resizePicture = () => {
    let size = document.getElementById('product-size').value;
    let pic = document.getElementById('profile-pic');
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
    console.log('getting product info');
    const product = await fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json());
    console.log(product);
    createProductElement(product);
}

getProductInfo();