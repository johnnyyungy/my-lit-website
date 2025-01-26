import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

class MyWebsite extends LitElement {
  static properties = {
    navVisible: { type: Boolean },
    jobsVisible: { type: Boolean },
    slideIndex: { type: Number },
  };

  constructor() {
    super();
    this.navVisible = false;
    this.jobsVisible = false;
    this.slideIndex = 1;
  }

  render() {
    return html`
      <!-- Header -->
      <header>
        <h1>John Yung's CV</h1>
      </header>

      <!-- Toggle and Nav -->
      <div class="toggle">
        <button @click=${this.toggleNav}>
          <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>burger</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="burger">
                <g id="Layer_2" transform="translate(3.000000, 8.000000)" fill="#FFFFFF" fill-rule="nonzero">
                  <path d="M25,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.44771525 0.44771525,0 1,0 L25,0 C25.5522847,0 26,0.44771525 26,1 C26,1.55228475 25.5522847,2 25,2 Z" id="Path"></path>
                  <path d="M25,9 L1,9 C0.44771525,9 0,8.55228475 0,8 C0,7.44771525 0.44771525,7 1,7 L25,7 C25.5522847,7 26,7.44771525 26,8 C26,8.55228475 25.5522847,9 25,9 Z" id="Path"></path>
                  <path d="M25,16 L1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L25,14 C25.5522847,14 26,14.4477153 26,15 C26,15.5522847 25.5522847,16 25,16 Z" id="Path"></path>
                </g>
                <g id="frame">
                  <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>

      <nav id="myToggle" class="${this.navVisible ? 'showNav' : ''}">
        <a href="#home">Home</a>
        <a href="#aboutme">My Background</a>
        <a href="#work">Work Experience</a>
        <a href="#education">Education</a>
        <a href="#interests">Outside Interests</a>
      </nav>

      <!-- Intro Section -->
      <section class="intro" id="home">
        <div class="wrapper">
          <aside>
            <h1>Hi, I'm John, <br>a UI/UX Analyst.</h1>
            <div class="intro-social">
              <a href="http://www.instagram.com/johnnyyungy" target="_blank">Instagram</a> /
              <a href="https://twitter.com/johnnyyungy" target="_blank">X</a> /
              <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank">Youtube</a> /
              <a href="https://www.facebook.com/johnnyyungy" target="_blank">Facebook</a> /
              <a href="https://linkedin.com/in/john-yung-53930945" target="_blank">LinkedIn</a>
            </div>
          </aside>
          <div class="photo"><img src="me.jpg" alt="John Yung"></div>
        </div>
      </section>

      <!-- About Me Section -->
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

      <!-- Quote Section -->
      <section class="quote">
        <div class="wrapper">
          <p>"I am always open and eager to learn new things, which I believe is vital given the ever-changing nature of the technology industry.</p>
          <p>I have been learning HTML5, CSS3, JavaScript and iOS development in my free time."</p>
        </div>
      </section>

      <!-- Work Experience Section -->
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
          <div class="more_button" id="jobToggle" @click=${this.toggleJobs}>More &gt;</div>
          <div class="more_jobs ${this.jobsVisible ? 'showJobs' : ''}">
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
            <div class="more_button" @click=${this.toggleJobs}>Less ^</div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
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

      <!-- Interests Section -->
      <section class="interests" id="interests">
        <div class="wrapper">
          <div>
            <h2>Outside Interests</h2>
            <p>Outside of work, my hobbies include traveling, cooking, fitness, and learning different languages.</p>
            <p>For fitness, I train Olympic weightlifting and CrossFit. I practice Mixed Martial Arts, in particular Muay Thai and Brazilian Jiu-Jitsu.</p>
            <p>I like to collect limited edition action figures, such as Transformers and Power Rangers.</p>
            <p>I am also interested in photography and videography. I combine my interests by taking photos on my travels and making videos for my YouTube cooking channel, <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank">Hello! Taste</a>.</p>
            <p>I also have a fitness blog that is built in WordPress: <a href="http://www.trainsmartnothard.com/" target="_blank">www.trainsmartnothard.com</a></p>
          </div>
          <!-- Carousel Section -->
          <div class="photo">
            <div class="slideshow-container">
              <!-- Full-width images with number and caption text -->
              <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="muay_thai.jpg" style="width:100%" alt="Muay Thai">
                <div class="text">Muay Thai</div>
              </div>

              <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="toys.jpg" style="width:100%" alt="Power Rangers Collection">
                <div class="text">Power Rangers Collection</div>
              </div>

              <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="japan.jpg" style="width:100%" alt="Kyoto, Japan">
                <div class="text">Kyoto, Japan</div>
              </div>

              <!-- Next and previous buttons -->
              <a class="prev" @click=${() => this.plusSlides(-1)}>&#10094;</a>
              <a class="next" @click=${() => this.plusSlides(1)}>&#10095;</a>
            </div>
            <br>

            <!-- The dots/circles -->
            <div style="text-align:center">
              <span class="dot" @click=${() => this.currentSlide(1)}></span>
              <span class="dot" @click=${() => this.currentSlide(2)}></span>
              <span class="dot" @click=${() => this.currentSlide(3)}></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer>
        <div class="socialmedia">
          <a href="http://www.instagram.com/johnnyyungy" target="_blank"><img src="instagram.png" width="35" height="35" alt="Instagram"></a>
          <a href="https://twitter.com/johnnyyungy" target="_blank"><img src="x.png" width="35" height="35" alt="X"></a>
          <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank"><img src="youtube.png" width="35" height="35" alt="YouTube"></a>
          <a href="https://www.facebook.com/johnnyyungy" target="_blank"><img src="facebook.png" width="35" height="35" alt="Facebook"></a>
          <a href="https://linkedin.com/in/john-yung-53930945" target="_blank"><img src="linkedin.png" width="35" height="35" alt="LinkedIn"></a>
        </div>
        <div class="copyright">All work © John Yung 2019 - 2025 - All Rights Reserved</div>
      </footer>
    `;
  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  toggleJobs() {
    this.jobsVisible = !this.jobsVisible;
  }

  plusSlides(n) {
    this.slideIndex += n;
    this.showSlides();
  }

  currentSlide(n) {
    this.slideIndex = n;
    this.showSlides();
  }

  showSlides() {
    const slides = this.shadowRoot.querySelectorAll('.mySlides');
    const dots = this.shadowRoot.querySelectorAll('.dot');

    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].classList.add('active');
  }
}

customElements.define('my-website', MyWebsite);