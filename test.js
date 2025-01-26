import { LitElement, html } from 'lit';

class TestComponent extends LitElement {
  render() {
    return html`<p>Hello, World!</p>`;
  }
}

customElements.define('test-component', TestComponent);