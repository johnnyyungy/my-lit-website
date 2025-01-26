import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class IntroComponent extends LitElement {
  static styles = [globalStyles, css`
    .intro {
      background-color: #fff;
      min-height: 400px;
      display: flex;
    }

    .intro .wrapper {
      flex-direction: column;
    }

    .intro .wrapper aside {
      flex-grow: 1;
    }

    .intro .wrapper .photo {
      background-size: cover;
      margin-top: 30px;
    }

    .intro .wrapper .photo img {
      width: 100%;
    }

    .intro-social {
      font-size: 18px;
    }

    .intro-social a {
      text-decoration: none;
      color: #000;
    }

    .intro-social a:hover {
      text-decoration: underline;
    }

    @media only screen and (min-width: 920px) {
      .intro .wrapper {
        flex-direction: row;
      }

      .intro .wrapper .photo {
        margin-left: 30px;
        max-width: 45%;
        margin-top: 0px;
      }
    }
  `];

  render() {
    return html`
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
