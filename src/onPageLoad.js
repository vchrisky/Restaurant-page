function createElements() {

    const contentDiv = document.querySelector('#content');
    
    function createElement(el, parent, prepend = false) {
        const { nodeName = 'div', ...attrs } = el;
        const element = document.createElement(nodeName);
        Object.entries(attrs).forEach(([attr, value]) => {
            element[attr] = value;
        });
        prepend ? parent.prepend(element) : parent.append(element);
    }
    
    function createImg(...elem) {
        let shortName;
        elem.forEach(element => {
            switch (element) {
                case bowlImg:
                    shortName = 'bowl';
                    break;
                case spoonImg:
                    shortName = 'spoon';
                    break;
                case glassImg:
                    shortName = 'glass';
                    break;
                default:
                    shortName = 'wifi';
                    break;
            }
            element.src = `../assets/icons/${shortName}-white.svg`;
            element.width = '42';
            element.height = '42';
            element.alt = `${shortName}-icon`;
        });
        
    }
    const bowlImg = document.createElement('img');
    const spoonImg = document.createElement('img');
    const glassImg = document.createElement('img');
    const wifiImg = document.createElement('img');
    
    createImg(bowlImg, spoonImg, glassImg, wifiImg);
    
    createElement({nodeName: 'section', className: 'hero', id: 'greeting-section'}, contentDiv, true);
    const heroSection = contentDiv.querySelector('#greeting-section');
    createElement({
        nodeName: 'h2',
        className: 'font-secondary',
        textContent: 'Welcome to La Bella Italia.'
        }, 
        heroSection);
    createElement({
        nodeName: 'p',
        className: 'font-primary dark mb-1 mt-3',
        textContent: 'Experience the authentic taste of Italy in the heart of the city.'
        },
        heroSection);   

    // console.log(contentDiv);
    createElement({className: 'section bg-color', id: 'main-section'}, contentDiv);
    const section = contentDiv.querySelector('#main-section');
    
    createElement({className: 'container'}, section);
    const container = section.firstElementChild;
    
    createElement({className: 'mx-auto row'}, container);
    const row = container.firstElementChild;
    
    createElement({}, row);
    const rowDiv = row.firstChild;
    // rowDiv.
    
    createElement({
        nodeName: 'h2', 
        className: 'heading font-secondary',
        textContent: 'Taste from Italy.'
        }, 
        rowDiv);

    createElement({
        nodeName: 'p',
        className: 'sub-heading hide-mobile dark',
        textContent: 'Who Needs a Boyfriend when Pizza And WiFi are both available.'
        },
        rowDiv);

    createElement({className: 'static-content'}, rowDiv);
    const staticContent = rowDiv.lastChild;

    const imgNames = ['bowl', 'spoon', 'glass', 'wifi'];

    imgNames.forEach(name => {
        createElement({
            nodeName: 'img',
            src: `../assets/icons/${name}-white.svg`,
            className: name == 'bowl' ? '' : 'ms-4',
            width: '42',
            height: '42',
            alt: `${name}-icon`
            }, 
            staticContent
        );
    });

    createElement({nodeName: 'section', className: 'about', id: 'about-section'}, contentDiv);
    const aboutSection = contentDiv.querySelector('#about-section');
    createElement({
        nodeName: 'h2',
        textContent: 'About Us'
        }, 
        aboutSection);
    createElement({
        nodeName: 'p',
        textContent: 'La Bella Italia brings you the finest Italian cuisine with a modern twist. Our chefs use the freshest ingredients to create dishes that are both delicious and visually stunning.'
        },
        aboutSection); 
    
    // console.log(staticContent);
    // console.log(rowDiv);
}

export default createElements;