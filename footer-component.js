import { LitElement, html, css } from 'lit';

export class FooterComponent extends LitElement {
  static styles = css`
    /* Add your CSS here */
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
    }

    div.socialmedia a {
      display: inline-block;
      height: 35px;
    }

    div.copyright {
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="socialmedia">
          <a href="http://www.instagram.com/johnnyyungy" target="_blank"><img src="instagram.png" width="35" height="35" alt="Instagram"></a>
          <a href="https://twitter.com/johnnyyungy" target="_blank"><img src="x.png" width="35" height="35" alt="X"></a>
          <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank"><img src="youtube.png" width="35" height="35" alt="YouTube"></a>
          <a href="https://www.facebook.com/johnnyyungy" target="_blank"><img src="facebook.png" width="35" height="35" alt="Facebook"></a>
          <a href="https://linkedin.com/in/john-yung-53930945" target="_blank"><img src="linkedin.png" width="35" height="35" alt="LinkedIn"></a>
        </div>
        <div class="copyright">All work © John Yung 2019 - 2025 - All Rights Reserved</div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);