import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class EducationComponent extends LitElement {
  static styles = [globalStyles, css`
    :host {
      display: block;
      background-color: #fff;
      padding: 40px 20px;
    }

    .education {
    scroll-margin-top: 100px;
    }

    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }

    aside {
      margin: 0 0 30px;
      padding: 0 0 20px;
    }

    aside + aside {
      border-top: 1px solid #000;
      padding-top: 30px;
    }

    h3 {
      font-size: 24px;
      margin: 0 0 10px;
    }

    h4 {
      font-size: 18px;
      color: #555;
      margin: 0 0 15px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
    }
  `];

  render() {
    return html`
      <section class="education" id="education">
        <div class="wrapper">
          <h2>Education</h2>
          <aside>
            <h3>Staffordshire University, Stoke-On-Trent</h3>
            <h4>2008 - 2011</h4>
            <p>Bachelors of Science in Sports and Exercise Nutrition: <b>First Class Honours</b></p>
          </aside>
          <aside>
            <h3>Newcastle under Lyme College, Newcastle, Staffordshire</h3>
            <h4>2006 - 2008</h4>
            <p>BTEC ND Sport and Exercise Science: <b>Triple Distinction</b></p>
          </aside>
          <aside>
            <h3>Wolstanton High School, Wolstanton, Newcastle, Staffordshire</h3>
            <h4>1996 - 2001</h4>
            <p>9 GCSEs; English, English Lit, Maths, Science Double Award, German, History, IT, and Electronics.</p>
          </aside>
        </div>
      </section>
    `;
  }
}

customElements.define('education-component', EducationComponent);