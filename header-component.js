import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class HeaderComponent extends LitElement {
  static styles = [globalStyles];

  constructor() {
    super();
    this.showNav = false;
  }

  toggleNav() {
    this.showNav = !this.showNav;
    this.requestUpdate();
  }

  handleNavigation(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);

    this.showNav = false;
    this.requestUpdate();

    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { targetId },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <link rel="stylesheet" href="./header-styles.css">
      <div class="toggle">
        <button @click="${this.toggleNav}">
          <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.44771525 0.44771525,0 1,0 L25,0 C25.5522847,0 26,0.44771525 26,1 C26,1.55228475 25.5522847,2 25,2 Z"></path>
            <path d="M25,9 L1,9 C0.44771525,9 0,8.55228475 0,8 C0,7.44771525 0.44771525,7 1,7 L25,7 C25.5522847,7 26,7.44771525 26,8 C26,8.55228475 25.5522847,9 25,9 Z"></path>
            <path d="M25,16 L1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L25,14 C25.5522847,14 26,14.4477153 26,15 C26,15.5522847 25.5522847,16 25,16 Z"></path>
          </svg>
        </button>
      </div>
      <nav class="${this.showNav ? 'showNav' : ''}">
        <a href="#home" @click="${this.handleNavigation}">Home</a>
        <a href="#aboutme" @click="${this.handleNavigation}">My Background</a>
        <a href="#work" @click="${this.handleNavigation}">Work Experience</a>
        <a href="#education" @click="${this.handleNavigation}">Education</a>
        <a href="#interests" @click="${this.handleNavigation}">Outside Interests</a>
      </nav>
    `;
  }
}

customElements.define('header-component', HeaderComponent);