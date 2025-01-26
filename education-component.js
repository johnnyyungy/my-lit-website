import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class EducationComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .education {
      background-color: #fff;
      padding: 20px; /* Add padding for better spacing */
    }

    .education .wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px; /* Add spacing between children */
    }

    .education aside {
      margin: 0px 0px 0px;
      padding: 0px 0px 10px;
    }

    .education aside + aside {
      border-top: 1px solid #000;
      padding-top: 30px;
    }

    .education aside:last-child {
      padding-bottom: 0px;
    }

    .education aside:last-child,
    .education aside:last-child p {
      margin-bottom: 0px;
    }
  `;

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