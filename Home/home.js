export class HomePage{
    constructor(){
    }
    renderHomeData(){
        const homePage = `<div id="homeid">
        <div class="home-container">
        <div class="homegrid">
        <div class ="name-info">
        <h3>👋, MY NAME IS KRINKY</h3>
        <h1>I'm a Developer</h1>
        <p>Based in Los Angeles, California.</p>
        <button class="left-btn">LET'S START</button>
        </div>
        </div>
        <div class="homegrid">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/home-banner.png" />
        </div>
        </div>
        </div>`
        const creteDiv = document.createElement("div")
        creteDiv.innerHTML = homePage;
        const appid = document.getElementById('app')
        appid.append(creteDiv)
    }
    init(){
        this.renderHomeData()
    }
}
const home = new HomePage()
home.init()