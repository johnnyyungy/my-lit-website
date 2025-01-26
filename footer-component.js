import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class FooterComponent extends LitElement {
  static styles = [globalStyles, css`
    :host {
      display: block;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      background-color: white;
      border-top: 2px solid black;
    }

    .socialmedia {
      padding: 14px 0 10px;
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .socialmedia a {
      display: inline-block;
      height: 35px;
      margin: 0 5px;
    }

    .copyright {
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
    }
  `];

  render() {
    return html`
      <footer>
        <div class="socialmedia">
          <a href="http://www.instagram.com/johnnyyungy" target="_blank"><img src="assets/instagram.png" width="35" height="35" alt="Instagram"></a>
          <a href="https://twitter.com/johnnyyungy" target="_blank"><img src="assets/x.png" width="35" height="35" alt="X"></a>
          <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank"><img src="assets/youtube.png" width="35" height="35" alt="YouTube"></a>
          <a href="https://www.facebook.com/johnnyyungy" target="_blank"><img src="assets/facebook.png" width="35" height="35" alt="Facebook"></a>
          <a href="https://linkedin.com/in/john-yung-53930945" target="_blank"><img src="assets/linkedin.png" width="35" height="35" alt="LinkedIn"></a>
        </div>
        <div class="copyright">All work © John Yung 2019 - 2025 - All Rights Reserved</div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);