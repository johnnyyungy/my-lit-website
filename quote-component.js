import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class QuoteComponent extends LitElement {
  render() {
    return html`
      <!-- Link the external CSS file -->
      <link rel="stylesheet" href="./quote-styles.css">

      <section class="quote">
        <div class="wrapper">
          <p>"I am always open and eager to learn new things, which I believe is vital given the ever-changing nature of the technology industry.</p>
          <p>I have been learning HTML5, CSS3, JavaScript, and iOS development in my free time."</p>
        </div>
      </section>
    `;
  }
}

customElements.define('quote-component', QuoteComponent);