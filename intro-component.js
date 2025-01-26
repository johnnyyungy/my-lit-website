import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class IntroComponent extends LitElement {
  render() {
    return html`
      <!-- Link the external CSS file -->
      <link rel="stylesheet" href="./intro-styles.css">

      <section class="intro" id="home">
        <div class="wrapper">
          <aside>
            <h1>Hi, I'm John, <br>a UI/UX Analyst.</h1>
            <div class="intro-social">
              <a href="http://www.instagram.com/johnnyyungy" target="_blank">Instagram</a> /
              <a href="https://twitter.com/johnnyyungy" target="_blank">X</a> /
              <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank">Youtube</a> /
              <a href="https://www.facebook.com/johnnyyungy" target="_blank">Facebook</a> /
              <a href="https://linkedin.com/in/john-yung-53930945" target="_blank">LinkedIn</a>
            </div>
          </aside>
          <div class="photo"><img src="assets/me.jpg" alt="John Yung"></div>
        </div>
      </section>
    `;
  }
}

customElements.define('intro-component', IntroComponent);