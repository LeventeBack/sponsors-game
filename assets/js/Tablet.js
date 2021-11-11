export default class Tablet {
  constructor(){
    this.device = document.querySelector(".tablet");
  }

  load(company){
    this.company = company
    this.data = this.company.tablet;

    this.setContent("name", this.data.name);  
    this.setContent("description", this.data.description);
    this.setContent("logo", this.data.logo, "src");
    this.setContent("url", this.data.url, "href");
    this.setContent("pdf", this.data.pdf, "href");
    this.setContent("video", this.data.video);

    this.setStyle();
  }

  show(){
    this.device.classList.add('active')
  }

  hide(){
    this.device.classList.remove('active')
  }

  isVisible(){
    return this.device.classList.contains('active');
  }

  setContent(dataName, content, property = null){
    const element = document.querySelector(`[data-company="${dataName}"]`);

    if(!property)
      element.innerHTML = content;
    else
      element.setAttribute(property, content);
  }

  setStyle(){
    this.device.style.setProperty('--color-primary', this.data.colors.primary);
    this.device.style.setProperty('--color-secondary', this.data.colors.secondary);
  }
}