import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';
import { globalStyles } from './global-styles.js';

export class WorkExperienceComponent extends LitElement {
  static properties = {
    showJobs: { type: Boolean },
  };

  constructor() {
    super();
    this.showJobs = false;
  }

  toggleJobs() {
    this.showJobs = !this.showJobs;
  }

  render() {
    return html`
      <!-- Link the external CSS file -->
      <link rel="stylesheet" href="./workexperience-styles.css">

      <section class="workexperience" id="work">
        <div class="wrapper">
          <h2>Work Experience</h2>
          <aside>
            <h3>UI/UX Analyst</h3>
            <h4>2022 to present</h4>
            <p>Collaborating closely with designers, developers, and analysts to enhance user experience and implement new product features while maintaining brand consistency. Conducting detailed design analyses, creating prototypes, and documenting visual guidelines to ensure alignment with business and user needs. Performing cross-device and browser testing, logging design issues in JIRA, and following up on resolutions to maintain high-quality standards. Delivering optimized assets and supporting front-end developers by providing clear visual requirements and conducting design QA's throughout the development process.</p>
          </aside>
          <aside>
            <h3>Operations Support Compliance Assistant</h3>
            <h4>2017 to 2022</h4>
            <p>Reviewing account activity, customer correspondence, and translations to complete detailed audit checklists of operational processes. Investigating anomalies on reports that may indicate potential compliance breaches. Conducting website checks across all domains. Identifying and escalating any instances of non-compliance with regulatory and licensing conditions, as well as any internal process errors.</p>
          </aside>
          <aside>
            <h3>Customer Accounts Advisor</h3>
            <h4>2016 to 2017</h4>
            <p>Customer accounts advisor dealing with a wide range of customer account queries. Daily duties include correctly advising customers on settlements of bets, balance histories, and login problems. Main duties include accurately guiding and educating customers with their queries while strictly complying with company policy and procedures.</p>
          </aside>
          <button
            class="more_button"
            @click="${this.toggleJobs}"
            aria-expanded="${this.showJobs}"
            aria-controls="more_jobs"
          >
            ${this.showJobs ? 'Less ^' : 'More >'}
          </button>
          <div
            id="more_jobs"
            class="more_jobs ${classMap({ visible: this.showJobs })}"
          >
            <aside>
              <h3>CSI/RECON Production Supervisor - Vaultex UK LTD</h3>
              <h4>2013 – 2016</h4>
              <p>Part of the management team responsible for motivating, leading, and developing a team of 31 individuals. Supporting operational control initiatives in place and in development. Enforcing operational changes to comply with Bank of England requirements. Ensuring that company and Bank of England security policies are maintained and maximum levels of customer service are met or exceeded. Daily duties include people management, multi-skilling staff, managing annual leave, conducting return-to-work interviews, and managing behavior, attendance, and sickness. Main duties include shift planning, smooth running of high-speed note sorting machines for the production of ATM-fit money to fill ATM machines all over the country while complying with Bank of England procedures. Also responsible for complex reconciliation procedures requiring the use of problem-solving skills to make big decisions regarding customer money to ensure customer satisfaction and that customers are being credited on time. Other duties include being responsible for managing team performance, managing and monitoring KPIs, encouraging teamwork, and driving the team to work to its full potential, recognizing and rewarding excellent performance through quarterly reviews, and managing the annual performance bonus budget.</p>
            </aside>
            <aside>
              <h3>DTP Production Supervisor - Vaultex UK LTD</h3>
              <h4>2012 - 2013</h4>
              <p>Part of the management team responsible for motivating, leading, and developing a team of 26 individuals. Duties include people management, including shift planning, managing annual leave, conducting return-to-work interviews, and managing behavior, attendance, and sickness. Mainly responsible for millions of pounds of physical cash from a multitude of retailers and bank branches and ensuring the cash center operates maximally to meet bank deadlines and comply with complex banking procedures. Other duties include managing and monitoring KPIs, thus being responsible for driving team performance and managing the team to work to its full potential. Recognizing and rewarding excellent performance through quarterly reviews and managing the annual performance bonus budget, implementing and enforcing changes to processing procedures.</p>
            </aside>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('workexperience-component', WorkExperienceComponent);