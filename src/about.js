function createElements() {
    // Function to create an element with specified attributes and content
    function createElement(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        element.innerHTML = content;
        return element;
    }

    // Function to create feature box
    function createFeatureBox(imgSrc, title, description) {
        return createElement('div', { class: 'col-lg-3 col-sm-6' },
            `<div class="feature-box media-box">
                <div class="fbox-media" style="width: 50px; height: 50px">
                    <img src="${imgSrc}" alt="Image">
                </div>
                <div class="fbox-content px-0">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>`
        );
    }

    //Function to create image box
    function createImageBox(imgSrc, imgAlt, personRole, personDesc) {
        return createElement('div', {class: 'col-lg-3 col-md-6'},
            `<div class="team">
                <div class="team-image imagescalein">
                    <img src="${imgSrc}" alt="${imgAlt}">
                </div>
                <div class="team-desc text-start">
                    <div class="team-title">
                        <h4 class="font-primary fw-normal ls-2"><a href="#" class="text-dark">${imgAlt}</a></h4>
                        <span>${personRole}</span>
                    </div>
                    <p>${personDesc}</p>
                </div>
            </div>`
        );
    }

    const content = document.getElementById('content');
    
        // Content wrap div
        const contentWrap = createElement('div', { class: 'content-wrap pb-0', style: 'overflow: visible;' });

            //How we work section
            const aboutContainer = createElement('div', { class: 'container' });

                const aboutHeadingBlock = createElement('div', { class: 'heading-block border-bottom-0 mb-4' },
                    `<span class="font-primary ls-1 color">Processes</span>
                    <h3 class="text-transform-none font-secondary ls-0" style="font-size: 52px; line-height: 1.3;">How We Work</h3>`
                );

                const aboutRow = createElement('div', { class: 'row g-5' });

                const aboutItems = [
                    { img: '../assets/images/icons/bowl.svg', title: 'Food Served Hot', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas omnis nam molestias minus ipsa!' },
                    { img: '../assets/images/icons/spoon.svg', title: 'Ample Options', description: 'Facere aliquam itaque quia recusandae, corporis fugit fugiat eaque, accusamus officiis reprehenderit.' },
                    { img: '../assets/images/icons/glass.svg', title: 'In-House Brewery', description: 'Velit id facilis odit aliquid laudantium. Tempore, sequi. Harum nesciunt, magni aperiam est?' },
                    { img: '../assets/images/icons/delivery.svg', title: 'Great Ambience', description: 'Velit id facilis odit aliquid laudantium. Tempore, sequi. Harum nesciunt, magni aperiam est?' }
                ];

                aboutItems.forEach(item => aboutRow.appendChild(createFeatureBox(item.img, item.title, item.description)));

                const lineDiv = createElement('div', { class: 'line mt-5' });

                aboutContainer.appendChild(aboutHeadingBlock);
                aboutContainer.appendChild(aboutRow);
                aboutContainer.appendChild(lineDiv);

                
            //Team section
            const teamSection = createElement('div', {class: "section mt-4 mb-0", style: "padding: 80px 0; background: #F5F5F5 url('../assets/images/food-pattern.png') repeat center center;"})
                
                const teamContainer = createElement('div', { class: 'container' });
                
                const teamHeadingBlock = createElement('div', { class: 'heading-block text-center border-bottom-0' },
                    `<span class="font-primary ls-1" style="font-size: 14px; color: #AAA">Expert &amp; Skillful</span>
                    <h3 class="text-transform-none font-secondary ls-0" style="font-size: 60px; line-height: 1.3;">Our Chefs</h3>`
                );
                
                const teamRow = createElement('div', {class: 'row'});

                const teamItems = [
                    {img: '../assets/images/chefs/1.jpg', alt: 'Fig Nelson', role: 'Chef', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor sequi quaerat, deleniti beatae ratione.'},
                    {img: '../assets/images/chefs/2.jpg', alt: 'Josh Clark', role: 'Chef', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eveniet magnam nam, atqu.'},
                    {img: '../assets/images/chefs/3.jpg', alt: 'Mary Jane', role: 'Manager', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis cum minima mollitia, velit.'},
                    {img: '../assets/images/chefs/4.jpg', alt: 'Nix Maxwell', role: 'Staff', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolore ipsam nemo, similique.'}
                    ]
                    
                teamItems.forEach(item => teamRow.appendChild(createImageBox(item.img, item.alt, item.role, item.desc)));
                
                teamContainer.appendChild(teamHeadingBlock);
                teamContainer.appendChild(teamRow);
                
                teamSection.appendChild(teamContainer);
            
            //Contact Section
            const contactSection = createElement('div', {class: 'section m-0 dark bg-color'},
                `<div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-10">
                            <h3 class="mb-0 ls-0">Do You want to Contact with us. Then Don't Hesitate!</h3>
                        </div>
                        <div class="col-md-2">
                            <a class="button button-circle button-xlarge text-dark bg-white button-light text-transform-none ls-0 font-primary ms-0 mt-3 mt-md-0 ">Contact Us Here</a>
                        </div>
                    </div>
                </div>`
            );
            
            contentWrap.appendChild(aboutContainer);
            contentWrap.appendChild(teamSection);
            contentWrap.appendChild(contactSection);

            content.appendChild(contentWrap);
}

export default createElements;