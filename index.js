import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';
import './header-component.js';
import './intro-component.js';
import './aboutme-component.js';
import './quote-component.js';
import './workexperience-component.js';
import './education-component.js';
import './interests-component.js';
import './footer-component.js';

export class MyApp extends LitElement {
  static styles = [globalStyles]; 

  constructor() {
    super();
    
    this.addEventListener('navigate', this.handleNavigate);
  }

  
  handleNavigate(event) {
    const targetId = event.detail.targetId; 
    const targetElement = this.shadowRoot.getElementById(targetId);

    if (targetElement) {
      
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${targetId}" not found in shadow DOM.`);
    }
  }

  render() {
    return html`
      <header-component></header-component>
      <intro-component id="home"></intro-component>
      <aboutme-component id="aboutme"></aboutme-component>
      <quote-component></quote-component>
      <workexperience-component id="work"></workexperience-component>
      <education-component id="education"></education-component>
      <interests-component id="interests"></interests-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('my-app', MyApp);