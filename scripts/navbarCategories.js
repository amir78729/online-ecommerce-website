const getCategories = async () => {
    try {
        let categories = await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json());

        let nav = document.getElementById('nav');
        let navUl = document.createElement('ul');
        for (let i = 0; i < categories.length; i++) {
            let navLi = document.createElement('li');
            let navA = document.createElement('a');
            let AText = document.createTextNode(categories[i]);
            nav.style.color = '#eee';
            navA.style.cursor = 'pointer';
            navA.appendChild(AText)
            navLi.appendChild(navA);
            navUl.appendChild(navLi);
        }
        nav.appendChild(navUl);
        console.log('nav bar is ready now.');
    } catch (e) {
        console.log(e, '\nSomething went wrong with nav bar.');
    }
};

getCategories();