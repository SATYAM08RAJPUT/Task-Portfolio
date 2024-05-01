export class Header{
    constructor(){
    }
    renderHeaderData(){
        const head = `<div class ="headerinfo-Container">
        <div class="nav-headerContainer">
        <div class ="left">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/logo.svg" />
        </div>
        <a href="#id" id="menu-icon"><i style="font-size:35px" class="fa">&#xf0c9;</i></a>
        <div class ="middle"> 
        <li><a href = "#homeid"> HOME </a></li>
        <li><a href = "#serviceid"> SERVICES</a></li>
        <li><a href = "#skillid"> SKILLS</a></li>
        <li><a href = "#projectid"> PORTFOLIO</a></li>
        <li><a href = "#contactid"> CONTACT</a></li>
        </div>
    
        <div class ="right">
        <button class="right-btn">CONTACT NOW</button>
        </div>
        
        </div>
        
        </div>`
        document.getElementById('app').innerHTML = head
        
    }
    init(){
        this.renderHeaderData()
    }
}
const renderAll = new Header();
renderAll.init()