import homePage from "./onPageLoad.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import './style.css';

    console.log('We are up and Running');
    
window.addEventListener('load', () => {
    // Function for switching the mobile menu
    const closeSidebar = document.querySelector('.close-sidebar');
    const openSidebar = document.querySelector('.open-sidebar');
    const sideBar = document.querySelector('.sidebar');
    closeSidebar.addEventListener('click', () => sideBar.style.display = 'none');
    openSidebar.addEventListener('click', () => sideBar.style.display = 'initial');

    // Tab Switching logic
    const content = document.getElementById('content');

    const homeTab = document.querySelectorAll('.home-tab');
    const menuTab = document.querySelectorAll('.menu-tab');
    const aboutTab = document.querySelectorAll('.about-tab');

    homeTab.forEach(element => {
        element.addEventListener('click', () => {
            content.innerHTML = '';
            homePage();
        })
    });

    menuTab.forEach(element => {
        element.addEventListener('click', () => {
            content.innerHTML = '';
            menuPage();
        })
    });

    aboutTab.forEach(element => {
        element.addEventListener('click', () => {
            content.innerHTML = '';
            console.log('Bout Pressed');
            aboutPage();
        })
    });

    homePage();
    // menuPage();
    // aboutPage();
});