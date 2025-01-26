import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class HeaderComponent extends LitElement {
  static styles = [globalStyles, css`
    .toggle {
      text-align: left;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: black;
      height: 38px;
      box-sizing: border-box;
      z-index: 1000; /* Ensure it's above other content */
    }

    .toggle button {
      padding: 9px 10px;
      background-color: transparent;
      border: none;
    }

    .toggle button:hover {
      cursor: pointer;
    }

    .toggle svg path {
      fill: white;
    }

    .toggle button:hover svg path {
      fill: #FFD817;
    }

    nav {
      text-align: left;
      position: fixed;
      top: 38px;
      width: 100%;
      background-color: #000;
      display: none;
      padding: 0px 0px 10px 0px;
      border-top: 1px solid #333;
      z-index: 1000; /* Ensure it's above other content */
    }

    nav a {
      padding: 0px 10px;
      display: inline-block;
      width: 100%;
      color: white;
      font-size: 14px;
      text-decoration: none;
      line-height: 38px;
    }

    nav a:hover {
      color: #FFD817;
      background-color: #222;
    }

    nav.showNav {
      display: block;
    }

    @media only screen and (min-width: 920px) {
      .toggle {
        display: none;
      }

      nav {
        display: block;
        top: 0px;
        padding: 0px;
        border: none;
        text-align: center;
      }

      nav a {
        width: auto;
        padding: 0px 20px; /* Adjust spacing for desktop */
      }
    }
  `];

  constructor() {
    super();
    this.showNav = false;
  }

  toggleNav() {
    this.showNav = !this.showNav;
    this.requestUpdate(); // Trigger a re-render
  }

  handleNavigation(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute('href').substring(1); // Get the target section ID

    // Close the mobile nav menu after clicking a link
    this.showNav = false;
    this.requestUpdate();

    // Find the main app component (my-app)
    const appElement = document.querySelector('my-app');

    if (appElement) {
      // Query the shadow root of the app element to find the target section
      const targetElement = appElement.shadowRoot.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
      }
    }
  }

  render() {
    return html`
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