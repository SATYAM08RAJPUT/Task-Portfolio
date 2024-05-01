// export class TestiMonal{
//     constructor(){

//     }
//     renderTestiMonal(){
//         const testimonalTpl = `<div class="testimonal">
//                                     <h2>TESTIMONIAL</h2>
//                                     <div class="test-grid">
//                                         <div class="fist-infoGrid">
//                                         <div class="img-frame">
//                                         <img src ="https://pxdraft.com/themeforest/krinky/assets/img/avatar-3.jpg" class="grid-img"/>
//                                         </div>
//                                         <div class="info-conatiner">
//                                         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
//                                         <h4>Jennifer Lutheran</h4>
//                                         <span>CEO at pxdraft </span>
//                                         </div>
//                                     </div>
//                                     <div class="fist-infoGrid">
//                                     <div class="img-frame">
//                                         <img src ="https://pxdraft.com/themeforest/krinky/assets/img/avatar-4.jpg" class="grid-img"/>
//                                         </div>
//                                         <div class="info-conatiner">
//                                         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
//                                         <h4>Jennifer Lutheran</h4>
//                                         <span>CEO at pxdraft </span>
//                                         </div>
//                                         </div>        
//                                     </div>
//                                 <div>`
//         const testimonialBtn = `<div class="testimonialBtn-Container">
//         <button class="btn1" id="prev">1</button>
//         <button class="btn2" id="next">2</button>
//         </div>`

//         document.addEventListener('DOMContentLoaded', () => {
//             const prev = document.querySelector('#prev');
//             const next = document.querySelector('#next');

//             next.addEventListener('click', () => {
//                 const sliderDiv = document.querySelector('.btn1');
//                 sliderDiv.style.scrollBehavior = "smooth";
//                 sliderDiv.scrollLeft += 400;
//             });

            
//             prev.addEventListener('click', () => {
//                 const sliderDiv = document.querySelector('.btn2');
//                 sliderDiv.style.scrollBehavior = "smooth";
//                 sliderDiv.scrollLeft -= 400;
//             });
//         });
//         const creteDiv = document.createElement("div")
//         creteDiv.innerHTML = testimonalTpl + testimonialBtn
//         const appid = document.getElementById('app')
//         appid.append(creteDiv)
//     }
//     init(){
//         this.renderTestiMonal()
//     }
// }

// const test = new TestiMonal()
// test.init()

export class Testimonial{
    constructor(){}

    render(){
        const testimonialTpl = `<div class="testimonial-Main-Container">
        <div  class="testimonial-Main-Container1"><h1>TESTIMONIAL</h1></div>
            <div class="slider">
                <div class="slider-inner">
                    <div class="slider-innerImgs">
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-2.jpg" />
                    </div>
                    <div class="slide-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
                <div class="slider-inner">
                    <div  class="slider-innerImgs">
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-3.jpg" />
                    </div>
                    <div class="slide-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
                <div class="slider-inner">
                    <div  class="slider-innerImgs">
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-4.jpg" />
                    </div>
                    <div class="slide-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
        
            <div class="slider-inner">
                <div class="slider-innerImgs">
                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-2.jpg" />
                </div>
                <div class="slide-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                    <h6>Jennifer Lutheran</h6>
                    <span>CEO at pxdraft</span>
                </div>
            </div>
            </div>
        <div>
        </div>
        </div>`

        const testimonialBtn = `<div class="testimonialBtn-Container">
        <button class="btn1" id="prev"></button>
        <button class="btn2" id="next"></button>
        </div>`

        //scroll functionally:

        document.addEventListener('DOMContentLoaded', () => {
            const prev = document.querySelector('#prev');
            const next = document.querySelector('#next');

            next.addEventListener('click', () => {
                const sliderDiv = document.querySelector('.slider');
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft += 400;
            });

            
            prev.addEventListener('click', () => {
                const sliderDiv = document.querySelector('.slider');
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft -= 400;
            });
        });


        const create = document.createElement('div');
        create.innerHTML = testimonialTpl + testimonialBtn;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const testimonial = new Testimonial();
testimonial.render();