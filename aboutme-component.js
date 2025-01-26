import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class AboutMeComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .aboutme {
      min-height: 400px;
      display: flex;
      flex-direction: column; /* Ensure flex works as expected */
      padding: 20px; /* Add padding for better spacing */
    }

    .aboutme .wrapper {
      display: flex;
      flex-direction: column; /* Stack children vertically */
      gap: 20px; /* Add spacing between children */
    }

    .aboutme aside {
      padding-top: 30px;
    }

    .aboutme aside ul {
      margin: 0px 0px 0px 20px;
      padding: 0px;
      line-height: 22px;
    }

    .aboutme aside ul li {
      margin: 0px 0px 10px 0px;
    }

    /* Add styles for the "me" section */
    .aboutme .me {
      flex: 1; /* Allow this section to grow */
    }

    /* Add styles for the "aside" section */
    .aboutme aside {
      flex: 1; /* Allow this section to grow */
    }
  `;

  render() {
    return html`
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