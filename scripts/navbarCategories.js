const getCategories = async () => {
    try {
        let categories = await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json());

        let nav = document.getElementById('nav');
        let navUl = document.createElement('ul');

        let navLiHome = document.createElement('li');
        let navAHome = document.createElement('a');
        let ATextHome = document.createTextNode('Home');

        navAHome.appendChild(ATextHome);
        navAHome.setAttribute('href','home.html')
        navLiHome.appendChild(navAHome);
        navUl.appendChild(navLiHome);

        for (let i = 0; i < categories.length; i++) {
            let navLi = document.createElement('li');
            let navA = document.createElement('a');
            let AText = document.createTextNode(categories[i]);
            nav.style.color = '#eee';
            /*categorizeHome(categories[i]);*/

            navA.appendChild(AText);
            navA.setAttribute('href','home.html?category=' + categories[i])
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