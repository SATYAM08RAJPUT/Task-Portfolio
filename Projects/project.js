export class Project{
    constructor(){

    }
    renderProjectList(){
        const projectTpl = `<div id="projectid">
                                    <h3>LATEST PROJECTS</h3>
                                    </div>
                                    <div class="project-grid">
                                    <div class="projectinfo">
                                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg" />
                                    </div>
                                    <div class="projectinfo">
                                    <div class="design">WEB DESIGN</div>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                                    </p>   
                                    <button>VIEW PROJECT</button>
                                    </div>
                                    <div class="projectinfo">
                                    <div class="second-Grid">
                                    <div class="design">WEB DESIGN</div>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                                    </p>   
                                    <button>VIEW PROJECT</button>
                                    </div>
                                    </div>
                                    <div class="projectinfo">
                                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg" />
                                    </div>
                                    <div class="projectinfo">
                                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-3.jpg" />
                                    </div>
                                    <div class="projectinfo">
                                    <div class="third-grid">
                                    <div class="design">WEB DESIGN</div>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                                    </p>   
                                    <button>VIEW PROJECT</button>
                                    </div>
                                    </div>
                                    <div class="projectinfo">
                                    <div class="second-Grid">
                                    <div class="design">WEB DESIGN</div>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                                    </p>   
                                    <button>VIEW PROJECT</button>
                                    </div>
                                    </div>
                                    <div class="projectinfo">
                                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-4.jpg" />
                                    </div>
    </div>`
        const createDiv = document.createElement("div")
        createDiv.innerHTML= projectTpl;
        const appId = document.getElementById('app')
        appId.append(createDiv)
    }
    init(){
        this.renderProjectList()
    }
}
const projectList = new Project()
projectList.init()