import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class InterestsComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 1200px;
      padding: 20px;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .photo {
      margin-top: 20px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .wrapper {
        flex-direction: column;
      }
    }

    .slideshow-container {
      position: relative;
    }

    .mySlides {
      display: none;
    }

    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
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
    }

    .dots {
      text-align: center;
      margin-top: 10px;
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

    if (n > slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = slides.length;

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
          <div class="photo">
            <div class="slideshow-container">
              <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="assets/muay_thai.jpg" alt="Muay Thai">
                <div class="text">Muay Thai</div>
              </div>
              <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="assets/toys.jpg" alt="Power Rangers Collection">
                <div class="text">Power Rangers Collection</div>
              </div>
              <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="assets/japan.jpg" alt="Kyoto, Japan">
                <div class="text">Kyoto, Japan</div>
              </div>
              <a class="prev" @click=${() => this.plusSlides(-1)}>&#10094;</a>
              <a class="next" @click=${() => this.plusSlides(1)}>&#10095;</a>
            </div>
            <div class="dots">
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