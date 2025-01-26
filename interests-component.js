import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class InterestsComponent extends LitElement {
  static styles = css`
    /* Add your CSS here */
    .interests .wrapper {
      display: flex;
      flex-direction: column;
      margin: 0px auto;
    }

    .interests .wrapper .photo {
      min-width: 45%;
      min-height: 300px;
      margin-top: 30px;
    }

    .interests .wrapper .photo img {
      width: 100%;
    }

    .interests a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }

    .interests a:hover {
      text-decoration: underline;
    }

    /* Slideshow styles */
    .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
    }

    .mySlides {
      display: none;
    }

    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white !important;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    .prev:hover, .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
      text-decoration: none !important;
    }

    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
    }

    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active, .dot:hover {
      background-color: #717171;
    }

    .fade {
      animation-name: fade;
      animation-duration: 1.5s;
    }

    @keyframes fade {
      from { opacity: .4; }
      to { opacity: 1; }
    }
  `;

  static properties = {
    slideIndex: { type: Number },
  };

  constructor() {
    super();
    this.slideIndex = 1;
  }

  firstUpdated() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    const slides = this.shadowRoot.querySelectorAll('.mySlides');
    const dots = this.shadowRoot.querySelectorAll('.dot');

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].classList.add('active');
  }

  render() {
    return html`
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
    `;
  }
}

customElements.define('interests-component', InterestsComponent);