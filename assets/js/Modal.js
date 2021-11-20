export default class Modal {
  constructor(){
    this.container = document.querySelector(".modal-overlay");

    this.container.addEventListener('click', e => {
      if(this.isVisible() && e.target == this.container)
        this.hide();
    })
  }

  load(company){
    this.data = company

    this.setContent("name", this.data.name);  
    this.setContent("description", this.data.description);
    this.setContent("logo", this.data.logo, "src");
    this.setContent("url", this.data.url, "href");
    this.setContent("pdf", this.data.pdf, "href");
    this.setContent("video", this.data.video);
    
    this.container.style.setProperty('--color-primary', this.data.color);
  }

  show(){
    this.container.classList.add('active')
  }

  hide(){
    this.container.classList.remove('active')
  }

  isVisible(){
    return this.container.classList.contains('active');
  }

  setContent(dataName, content, property = null){
    const element = document.querySelector(`[data-company="${dataName}"]`);

    if(!property)
      element.innerHTML = content;
    else
      element.setAttribute(property, content);
  }
}