import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class AboutMeComponent extends LitElement {
  render() {
    return html`
      <!-- Link the external CSS file -->
      <link rel="stylesheet" href="./aboutme-styles.css">

      <section class="aboutme" id="aboutme">
        <div class="wrapper">
          <div class="me">
            <h2>My Background</h2>
            <p>I have worked in the industry for almost nine years, starting in Customer Services and progressing to Design & UX.</p>
            <p>As a UI/UX Analyst, I am responsible for documenting design specifications and visually testing enhancements to ensure the delivery of intuitive, user-focused solutions.</p>
            <p>Working closely with a talented team of designers, developers, and analysts, I conduct detailed design analyses, create HTML/CSS and iOS prototypes, and produce optimized assets using tools like Adobe Photoshop, Illustrator, and Sketch. I ensure design quality by performing thorough QA testing, logging issues, and collaborating with developers to resolve them. Additionally, I participate in cross-device and browser testing, document visual guidelines, and present specifications to stakeholders to maintain high standards for user interface and experience.</p>
          </div>
          <aside>
            <h2>Skills</h2>
            <ul>
              <li>Communication</li>
              <li>Critical thinking</li>
              <li>Attention to detail</li>
              <li>Adaptable</li>
              <li>Hard working</li>
              <li>Quick learner</li>
              <li>Teamwork</li>
              <li>Positive attitude</li>
            </ul>
          </aside>
        </div>
      </section>
    `;
  }
}

customElements.define('aboutme-component', AboutMeComponent);