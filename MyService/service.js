    export class Service{
        constructor(){

        }
        renderserviceData(){
            const servicetpl =  `<div class="service" id ="serviceid">
            <h3>MY SERVICES</h3>
            <div class="service-grid">
            <div class="serive-provider">
                <div class="icons">
                <i class="fa fa-phone"></i>
                </div>
                <div>
                <h4> Web Design</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
            <div class="serive-provider-2">
            <div class="icons">
                <i class="fa fa-laptop"></i>
            </div>
            <div>
                <h4>Development</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="serive-provider-3">
            <div class="icons">
                <i class="fa fa-exclamation-triangle"></i>
            </div>
            <div>
                <h4>Development</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="serive-provider-4">
            <div class="icons">
             <i class="fa fa-columns"></i>
            </div>
            <div>
                <h4> SEO Marketing</h4>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="serive-provider-5">
            <div class="icons">
                <i class="fa fa-phone"></i>
            </div>
            <div>
                <h4>Web Design</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            </div>
            <div class="serive-provider-6">
            <div class="icons">
                <i class="fa fa-globe"></i>
            </div>
            <div>
                <h4>SEO Marketing</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            `
            const creteDiv = document.createElement("div")
            creteDiv.innerHTML = servicetpl;
            const appid = document.getElementById('app')
            appid.append(creteDiv)
        }
        init(){
            this.renderserviceData()
        }
    }
    const service = new Service()
    service.init()