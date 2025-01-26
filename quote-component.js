import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class QuoteComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section.quote {
      background-color: #333;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    .quote .wrapper {
      max-width: 800px;
      margin: 0 auto;
    }

    .quote p {
      font-size: 25px;
      line-height: 1.5;
      font-weight: bold;
      font-style: italic;
      margin: 0 0 20px 0;
    }

    .quote p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .quote p {
        font-size: 20px;
      }
    }

    @media (max-width: 480px) {
      .quote p {
        font-size: 18px;
      }
    }
  `;

  render() {
    return html`
      <section class="quote" aria-label="Quote section">
        <div class="wrapper">
          <p>"I am always open and eager to learn new things, which I believe is vital given the ever-changing nature of the technology industry.</p>
          <p>I have been learning HTML5, CSS3, JavaScript, and iOS development in my free time."</p>
        </div>
      </section>
    `;
  }
}

customElements.define('quote-component', QuoteComponent);