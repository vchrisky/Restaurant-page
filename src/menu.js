function createElements() {
    // const contentDiv = document.querySelector('#content');

    // function createElement(el, parent, prepend = false) {
    //     const { nodeName = 'div', ...attrs } = el;
    //     const element = document.createElement(nodeName);
    //     Object.entries(attrs).forEach(([attr, value]) => {
    //         element[attr] = value;
    //     });
    //     prepend ? parent.prepend(element) : parent.append(element);
    // }

    // Function to create an element with specified attributes and content
    function createElement(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        element.innerHTML = content;
        return element;
    }

    // Function to create a tab with icon
    function createTab(id, target, ariaControls, imgSrc, text) {
        return createElement('li', { class: 'nav-item', role: 'presentation' },
            `<button class="nav-link" id="${id}" data-bs-toggle="pill" data-bs-target="${target}" type="button" role="tab" aria-controls="${ariaControls}" aria-selected="false">
                <img src="${imgSrc}" alt="Image"> ${text}
            </button>`
        );
    }

    // Function to create a portfolio item
    function createPortfolioItem(imgSrc, title, price) {
        return createElement('div', { class: 'col-lg-3 col-md-6' },
            `<div class="portfolio-item">
                <a href="#" class="portfolio-image"><img src="${imgSrc}" alt="1" class="rounded"></a>
                <div class="portfolio-desc pt-2">
                    <h4 class="mb-1"><a href="#">${title}</a></h4>
                    <div class="item-price">&dollar; ${price}</div>
                </div>
            </div>`
        );
    }

    // Function to create feature box
    function createFeatureBox(imgSrc, title, description) {
        return createElement('div', { class: 'col-lg-4 col-sm-6' },
            `<div class="feature-box media-box">
                <div class="fbox-media" style="width: 60px; height: 60px">
                    <img src="${imgSrc}" alt="Image">
                </div>
                <div class="fbox-content px-0">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>`
        );
    }

    const content = document.getElementById('content');

        // Section element
        const section = createElement('section', { id: 'main' });

        // Content wrap div
        const contentWrap = createElement('div', { class: 'content-wrap py-0', style: 'overflow: visible;' });

        // Container div
        const container = createElement('div', { class: 'container' });

        // Tab restaurant div
        const tabRestaurant = createElement('div', { id: 'tab-restuarant' });

        // Tabs
        const ul = createElement('ul', { class: 'nav canvas-alt-tabs2 tabs nav-pills nav-fill mb-5', id: 'canvas-tab-nav2', role: 'tablist' });

        // Tab items
        const tabs = [
            createTab('canvas-tabs-breakfast-tab', '#tabs-breakfast', 'canvas-tabs-breakfast', '../assets/images/icons/breakfast.svg', 'Breakfast'),
            createTab('canvas-tabs-salad-tab', '#tabs-salad', 'canvas-tabs-salad', '../assets/images/icons/salads.svg', 'Salads'),
            createTab('canvas-tabs-pizza-tab', '#tabs-pizza', 'canvas-tabs-pizza', '../assets/images/icons/pizza.svg', 'Pizza'),
            createTab('canvas-tabs-dessert-tab', '#tabs-dessert', 'canvas-tabs-dessert', '../assets/images/icons/dessert.svg', 'Dessert')
        ];

        tabs.forEach(tab => ul.appendChild(tab));

        // Tab content
        const tabContent = createElement('div', { id: 'canvas-tab-alt-content', class: 'tab-content mt-4' });

        const breakfastTab = createElement('div', { class: 'tab-pane fade show active', id: 'tabs-breakfast', role: 'tabpanel', 'aria-labelledby': 'canvas-tabs-breakfast-tab', tabindex: '0' });
        const breakfastRow = createElement('div', { class: 'row gutter-40' });

        const breakfastItems = [
            { img: '../assets/images/menu/breakfast/1.jpg', title: 'Banana Pancake', price: '19.49' },
            { img: '../assets/images/menu/breakfast/2.jpg', title: 'Raisins Croissant', price: '11.99' },
            { img: '../assets/images/menu/breakfast/3.jpg', title: 'Healthy Omelette', price: '8.00' },
            { img: '../assets/images/menu/breakfast/4.jpg', title: 'Fried Eggs with Bread', price: '13.19' },
            { img: '../assets/images/menu/breakfast/5.jpg', title: 'Cheese Croissant', price: '7.49' },
            { img: '../assets/images/menu/breakfast/6.jpg', title: 'Croissant and Coffee', price: '11.99' },
            { img: '../assets/images/menu/breakfast/7.jpg', title: 'Blueberries Waffle', price: '29.00' },
            { img: '../assets/images/menu/breakfast/8.jpg', title: 'Fried Egg With Beans', price: '5.99' }
        ];

        breakfastItems.forEach(item => breakfastRow.appendChild(createPortfolioItem(item.img, item.title, item.price)));
        breakfastTab.appendChild(breakfastRow);

        const saladTab = createElement('div', { class: 'tab-pane fade', id: 'tabs-salad', role: 'tabpanel', 'aria-labelledby': 'canvas-tabs-salad-tab', tabindex: '0' });
        const saladRow = createElement('div', { class: 'row gutter-40' });

        const saladItems = [
            { img: '../assets/images/menu/salads/1.jpg', title: 'Pomegranate Salad', price: '19.49' },
            { img: '../assets/images/menu/salads/2.jpg', title: 'Greek Salad', price: '11.99' },
            { img: '../assets/images/menu/salads/3.jpg', title: 'Fruit Lover', price: '8.00' },
            { img: '../assets/images/menu/salads/4.jpg', title: 'Egg Salad', price: '13.19' },
            { img: '../assets/images/menu/salads/5.jpg', title: 'Mushroom & Avocado', price: '7.49' },
            { img: '../assets/images/menu/salads/6.jpg', title: 'Ceasar Salad', price: '11.99' },
            { img: '../assets/images/menu/salads/7.jpg', title: 'Thai Salad', price: '29.00' },
            { img: '../assets/images/menu/salads/8.jpg', title: 'Supreme Veggie', price: '5.99' }
        ];

        saladItems.forEach(item => saladRow.appendChild(createPortfolioItem(item.img, item.title, item.price)));
        saladTab.appendChild(saladRow);

        const pizzaTab = createElement('div', { class: 'tab-pane fade', id: 'tabs-pizza', role: 'tabpanel', 'aria-labelledby': 'canvas-tabs-pizza-tab', tabindex: '0' });
        const pizzaRow = createElement('div', { class: 'row gutter-40' });

        const pizzaItems = [
            { img: '../assets/images/menu/pizza/1.jpg', title: 'Pizza Tomatino', price: '19.49' },
            { img: '../assets/images/menu/pizza/2.jpg', title: 'Pizza Margerita', price: '12.99' },
            { img: '../assets/images/menu/pizza/3.jpg', title: 'Greasy Italian', price: '17.00' },
            { img: '../assets/images/menu/pizza/4.jpg', title: 'Deluxe Veggie', price: '22.19' },
            { img: '../assets/images/menu/pizza/5.jpg', title: 'Pizza Rustica', price: '17.49' },
            { img: '../assets/images/menu/pizza/6.jpg', title: 'Pizza Bianca', price: '21.99' },
            { img: '../assets/images/menu/pizza/7.jpg', title: 'Pizza Quattro', price: '11.99' },
            { img: '../assets/images/menu/pizza/8.jpg', title: 'Pizza Roma', price: '15.99' }
        ];

        pizzaItems.forEach(item => pizzaRow.appendChild(createPortfolioItem(item.img, item.title, item.price)));
        pizzaTab.appendChild(pizzaRow);

        const dessertTab = createElement('div', { class: 'tab-pane fade', id: 'tabs-dessert', role: 'tabpanel', 'aria-labelledby': 'canvas-tabs-dessert-tab', tabindex: '0' });
        const dessertRow = createElement('div', { class: 'row gutter-40' });

        const dessertItems = [
            { img: '../assets/images/menu/desserts/1.jpg', title: 'Chocolate Fudge', price: '19.49' },
            { img: '../assets/images/menu/desserts/2.jpg', title: 'Blueberry Cake', price: '11.99' },
            { img: '../assets/images/menu/desserts/3.jpg', title: 'Truffle Coffee', price: '8.00' },
            { img: '../assets/images/menu/desserts/4.jpg', title: 'Strawberry Velvet', price: '13.19' },
            { img: '../assets/images/menu/desserts/5.jpg', title: 'Delicious Blueberry', price: '7.49' },
            { img: '../assets/images/menu/desserts/6.jpg', title: 'Herbs & Pomegranate', price: '11.99' },
            { img: '../assets/images/menu/desserts/7.jpg', title: 'Chocolate & Raspberry Tart', price: '29.00' },
            { img: '../assets/images/menu/desserts/8.jpg', title: 'Fruits Cake', price: '5.99' }
        ];

        dessertItems.forEach(item => dessertRow.appendChild(createPortfolioItem(item.img, item.title, item.price)));
        dessertTab.appendChild(dessertRow);

        tabContent.appendChild(breakfastTab);
        tabContent.appendChild(saladTab);
        tabContent.appendChild(pizzaTab);
        tabContent.appendChild(dessertTab);

        tabRestaurant.appendChild(ul);
        tabRestaurant.appendChild(tabContent);

        container.appendChild(tabRestaurant);

        tabs.forEach(element => {
            const button = element.firstChild;
            
            button.addEventListener('click', () => {
                // tabs.querySelectorAll('.nav-link').forEach(el => {
                //     if (el.getAttribute('aria-selected')) {
                //         el.setAttribute('aria-selected', 'false');
                //     }
                // });

                button.setAttribute('aria-selected', 'true');
                const target = button.getAttribute('data-bs-target');
                tabContent.querySelectorAll('.tab-pane').forEach(element => {
                    if (element.classList.contains('active')) {
                        element.classList.remove('active', 'show');
                    }
                });
                tabContent.querySelector(`${target}`).classList.add('active', 'show');
            })
        });


        // Steps of Order section
        const stepsSection = createElement('div', { class: 'section mb-0 mt-3', style: 'padding: 80px 0; background: #F5F5F5 url("../assets/images/food-pattern.png") repeat center center;' });

        const stepsContainer = createElement('div', { class: 'container' });
        const headingBlock = createElement('div', { class: 'heading-block border-bottom-0 text-center mb-4' },
            `<span class="font-primary ls-1 color">Steps of Order</span>
            <h3 class="text-transform-none font-secondary ls-0" style="font-size: 52px; line-height: 1.3;">How do you Get your Food</h3>`
        );

        const clearDiv = createElement('div', { class: 'clear' });

        const stepsRow = createElement('div', { class: 'row mt-5 g-5' });

        const stepsItems = [
            { img: '../assets/images/icons/route.svg', title: '1. Select Your Location', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas omnis nam molestias minus ipsa!' },
            { img: '../assets/images/icons/shop.svg', title: '2. Choose your Food', description: 'Facere aliquam itaque quia recusandae, corporis fugit fugiat eaque, accusamus officiis reprehenderit.' },
            { img: '../assets/images/icons/delivery-bg.svg', title: '3. Your Item is on the Way', description: 'Velit id facilis odit aliquid laudantium. Tempore, sequi. Harum nesciunt, magni aperiam est?' }
        ];

        stepsItems.forEach(item => stepsRow.appendChild(createFeatureBox(item.img, item.title, item.description)));

        stepsContainer.appendChild(headingBlock);
        stepsContainer.appendChild(clearDiv);
        stepsContainer.appendChild(stepsRow);
        stepsSection.appendChild(stepsContainer);

        container.appendChild(stepsSection);

        // Order section
        const orderSection = createElement('div', { class: 'section m-0 bg-transparent', style: 'padding: 80px 0 70px;' });

        const orderContainer = createElement('div', { class: 'container' });

        const orderDiv = createElement('div', { class: 'mx-auto d-flex justify-content-center text-center', style: 'max-width: 900px;' },
            `<h3 class="mb-0 ls-0">Get $30 Off on Your First Order 
                <a href="#" class="button button-circle button-xlarge button-light text-white ls-0 text-transform-none mt-0 mb-1 ms-3" style="position: relative;">
                    <span>Order Now</span> <i class="bi-arrow-right fw-semibold"></i>
                </a>
            </h3>`
        );

        orderContainer.appendChild(orderDiv);
        orderSection.appendChild(orderContainer);

        container.appendChild(orderSection);

        contentWrap.appendChild(container);
        section.appendChild(contentWrap);

        // Footer background image
        const footerBackground = createElement('div', { style: 'position: absolute; bottom: 0; left: 0; width: 100%; z-index: 3; background: url("../assets/images/sketch-header.png") repeat center bottom; background-size: auto 100%; height: 40px; margin-bottom: -10px;' });
        // section.appendChild(footerBackground);

        // Append to the main content
        content.appendChild(section);
    
}

export default createElements;