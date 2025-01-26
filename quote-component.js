import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class QuoteComponent extends LitElement {
  static styles = css`
    /* Add your CSS here */
    section.quote {
      background-color: #333;
      font-size: 25px;
      line-height: 1.5;
      font-weight: bold;
      font-style: italic;
      color: white;
    }

    .quote .wrapper {
      flex-direction: column;
      padding: 0px 30px;
    }
  `;

  render() {
    return html`
      <section class="quote">
        <div class="wrapper">
          <p>"I am always open and eager to learn new things, which I believe is vital given the ever-changing nature of the technology industry.</p>
          <p>I have been learning HTML5, CSS3, JavaScript and iOS development in my free time."</p>
        </div>
      </section>
    `;
  }
}

customElements.define('quote-component', QuoteComponent);