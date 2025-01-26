import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class FooterComponent extends LitElement {
  static styles = css`
    :host {
      display: block; /* Ensures the custom element behaves as a block-level element */
    }

    footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      background-color: white;
      box-sizing: border-box;
      border-top: 2px solid black;
    }

    div.socialmedia {
      padding: 14px 0px 10px;
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    div.socialmedia a {
      display: inline-block;
      height: 35px;
      transition: opacity 0.3s ease;
    }

    div.socialmedia a:hover {
      opacity: 0.7;
    }

    div.copyright {
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
      font-size: 14px;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="socialmedia">
          <a href="http://www.instagram.com/johnnyyungy" target="_blank" aria-label="Instagram">
            <img src="instagram.png" width="35" height="35" alt="Instagram">
          </a>
          <a href="https://twitter.com/johnnyyungy" target="_blank" aria-label="X">
            <img src="x.png" width="35" height="35" alt="X">
          </a>
          <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank" aria-label="YouTube">
            <img src="youtube.png" width="35" height="35" alt="YouTube">
          </a>
          <a href="https://www.facebook.com/johnnyyungy" target="_blank" aria-label="Facebook">
            <img src="facebook.png" width="35" height="35" alt="Facebook">
          </a>
          <a href="https://linkedin.com/in/john-yung-53930945" target="_blank" aria-label="LinkedIn">
            <img src="linkedin.png" width="35" height="35" alt="LinkedIn">
          </a>
        </div>
        <div class="copyright">All work © John Yung 2019 - 2025 - All Rights Reserved</div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);