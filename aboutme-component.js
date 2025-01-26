import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

// Import the master stylesheet
import masterStyles from './styles.css' assert { type: 'css' };

export class AboutMeComponent extends LitElement {
  static styles = [globalStyles, masterStyles, css`
    /* Component-specific styles */
    .aboutme {
      scroll-margin-top: 100px; /* Add this line */
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

    .me {
      margin-right: 50px;
    }

    aside ul {
      margin: 0px 0px 0px 20px;
      padding: 0px;
      line-height: 22px;
    }

    aside ul li {
      margin: 0px 0px 10px 0px;
    }

    @media only screen and (min-width: 920px) {
      .wrapper {
        flex-direction: row;
      }

      .aboutme aside {
        min-width: 30%;
        padding-top: 0px;
      }
    }
  `];

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