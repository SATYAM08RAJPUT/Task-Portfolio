export class BrandPage{
    constructor(){
    }
    renderHomeData(){
        const brandPage = `
        <div class="brand">
        <div class="brand-container">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-1.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-2.svg" /> 
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-3.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-3.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-5.svg" />
        </div>
        <div class="brand-grid">
        <div class="grid">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png"/>
        </div>
        <div class="grid">
        <h3>
        I'm a Freelancer Front-end Developer with over 3 years of experience.
        </h3>
        <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
        <div class="showClient">
        <div class="number">
        <h4>298+</h4>
        <p>Projet Completed</p>
        <button class="contact">CONTACT ME</button>
        </div>
        <div class="number">
        <h4>190+</h4>
        <p>Happy Clients</p>
        <button class="portfolio">CONTACT ME</button>
        </div>
        </div>
        </div>
        </div>
        </div>`
        const creteDiv = document.createElement("div")
        creteDiv.innerHTML = brandPage;
        const appid = document.getElementById('app')
        appid.append(creteDiv)
    }
    init(){
        this.renderHomeData()
    }
}
const brandinfo = new BrandPage()
brandinfo .init()