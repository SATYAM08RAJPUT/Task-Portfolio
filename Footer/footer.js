export class Footer{
    constructor(){

    }
    renderFoterData(){
        const footerTpl = `<div id ="contactid">
                              <div class="footer-grid">
                                <div class="footerinfo">
                                    <form>
                                        <h3>Get in touch</h3>
                                        <p>Our friendly team would love to hear from you.</p>
                                        <lable>First Name</label>
                                        <div><input placeholder="Name"/></div>
                                        <lable>Last Name</label>
                                        <div><input placeholder="Last Name"/></div>
                                        <lable>Email</label>
                                        <div><input placeholder="Last Name"/></div>
                                        <lable>Your Mesages</label>
                                        <div><textarea placeholder="Messages"/></textarea></div>
                                        <button class="messages">SEND MESSAGES</button>
                                    </form>
                                </div>
                                <div class="footerinfo">
                                    <div><Img src ="https://pxdraft.com/themeforest/krinky/assets/img/contact-bg.png"/></div>
                                    <div class="contactinfo">
                                    <div class ="phoneinfo"><icon class="fa fa-envelope"/></div>
                                    <div class="phone">
                                    <h5>PHONE</h5>
                                    <p>+01 123 654 8096</p>
                                    </div>
                                    </div>
                                    <div class ="emailinfo"><icon class="fa fa-phone"/></div>
                                    <div class="phone">
                                    <h5>MAIL</h5>
                                    <p>info@domainname.com</p>
                                    </div>
                                    <div class ="addresssinfo">
                                    <icon class="fa fa-map-marker"/></div>
                                    <div class="phone">
                                    <h5>VISIT MY STUDIO</h5>
                                    <p>Warnwe Park Streetperrine,
                                    FL 33157 New York City</p>
                                    </div>
                                    </div>
                                </div>  
                                <div class="socila-media">
                                <div class="left-media">
                                <li><icon class="fa fa-facebook"/><li>
                                <li><icon class="fa fa-twitter"/><li>
                                <li><icon class="fa fa-instagram"/><li>
                                <li><icon class="fa fa-linkedin"/><li>
                                </div>
                                <div class="right-media">
                                © 2022 copyright all right reserved
                                </div>
                                </div>
                              </div>
                            
                            </div>`
        const creteDiv = document.createElement("div")
        creteDiv.innerHTML = footerTpl;
        const appid = document.getElementById('app')
        appid.append(creteDiv)
    }
    init(){
        this.renderFoterData()
    }
}
const footer = new Footer()
footer.init()