import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';
import './header-component.js';
import './intro-component.js';
import './aboutme-component.js';
import './quote-component.js';
import './workexperience-component.js';
import './education-component.js';
import './interests-component.js';
import './footer-component.js';

export class MyApp extends LitElement {
  static styles = [globalStyles]; // Apply global styles

  render() {
    return html`
      <header-component></header-component>
      <intro-component></intro-component>
      <aboutme-component></aboutme-component>
      <quote-component></quote-component>
      <workexperience-component></workexperience-component>
      <education-component></education-component>
      <interests-component></interests-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('my-app', MyApp);