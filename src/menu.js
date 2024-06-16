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
}