export default class Modal {
  constructor(container){
    this.container = container;
  }

  load(company){
    this.data = company

    this.setContent("name", this.data.name);  
    this.setContent("description", this.data.description);
    this.setContent("logo", this.data.logo, "src");
    this.setContent("url", this.data.url, "href");
    this.setContent("timetable", this.data.timetable);
    this.setContent("chat", this.data.chat, "href");
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