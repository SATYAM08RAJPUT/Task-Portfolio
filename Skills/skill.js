export class Skills{
    constructor(){
    }
    renderSkillsData(){
        const skillstpl =  `<div id="skillid">
                        <h3>MY SKILLS</h3>
                            <div class="skill-grid">
                                 <div class="skillinfo">
                                        <div class="skill-conatiner">
                                            <div class="conatiner-1"> 
                                                <i class="fa fa-html5"> </i>
                                                HTML
                                                </div>
                                            <div class="conatiner-2">
                                                <i class="fa fa-css3"> </i>
                                                CSS
                                            </div>
                                        <div class="conatiner-3">
                                        <i class='fa fa-css3'></i>
                                            REACT JS
                                        </div>
                                        <div class="conatiner-4">
                                        <i class="fa fa-css3"></i>
                                        ANGULAR
                                        </div>
                                    <div class="conatiner-5">
                                    <i class="fa fa-apple"> </i>
                                    IOS APP
                                    </div>
                                    <div class="conatiner-6">
                                    <i class="fa fa-android"> </i>
                                    APP DEV
                                    </div>
                                    </div>
                                </div>
        <div class="skillinfo">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/skills.png" />
        </div>
        </div>
        </div>
        <div class="working">
        Intrested working with me?
        <a hre="#conatct">CONTACT NOW</a>
        </div>`
        const creteDiv = document.createElement("div")
        creteDiv.innerHTML = skillstpl;
        const appid = document.getElementById('app')
        appid.append(creteDiv)
    }
    init(){
        this.renderSkillsData()
    }
}
const service = new Skills()
service.init()