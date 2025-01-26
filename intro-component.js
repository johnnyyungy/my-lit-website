import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class IntroComponent extends LitElement {
  static styles = [globalStyles, css`
    .intro {
      background-color: #fff;
      min-height: 400px;
      display: flex;
    }

    .wrapper {
      margin: 0 auto;
      max-width: 1200px;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .photo img {
      width: 100%;
    }

    .intro-social a {
      text-decoration: none;
      color: #000;
    }

    .intro-social a:hover {
      text-decoration: underline;
    }

    .photo {
  margin-top: 30px;
  max-width: 45%;
}

@media only screen and (min-width: 920px) {
  .photo {
    margin-left: 30px;
    margin-top: 0;
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