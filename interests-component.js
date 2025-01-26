import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export class InterestsComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 800px;
      padding: 20px;
    }
  
    .interests .wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  
    .interests .photo {
      margin-top: 20px;
    }
  
    .interests img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  
    .interests a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  
    .interests a:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 768px) {
      .interests .wrapper {
        flex-direction: column;
      }
    }
  `;

  static properties = {
    slideIndex: { type: Number },
    slides: { type: Array },
  };

  constructor() {
    super();
    this.slideIndex = 1;
    this.slides = [
      { src: 'muay_thai.jpg', alt: 'Muay Thai', caption: 'Muay Thai', number: '1 / 3' },
      { src: 'toys.jpg', alt: 'Power Rangers Collection', caption: 'Power Rangers Collection', number: '2 / 3' },
      { src: 'japan.jpg', alt: 'Kyoto, Japan', caption: 'Kyoto, Japan', number: '3 / 3' },
    ];
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
          <!-- Carousel Section -->
          <div class="photo">
            <div class="slideshow-container">
              ${this.slides.map(
                (slide, index) => html`
                  <div class="mySlides fade">
                    <div class="numbertext">${slide.number}</div>
                    <img src="${slide.src}" alt="${slide.alt}" style="width:100%">
                    <div class="text">${slide.caption}</div>
                  </div>
                `
              )}
              <!-- Navigation buttons -->
              <a class="prev" @click=${() => this.plusSlides(-1)} aria-label="Previous slide">&#10094;</a>
              <a class="next" @click=${() => this.plusSlides(1)} aria-label="Next slide">&#10095;</a>
            </div>
            <!-- Dots -->
            <div class="dots">
              ${this.slides.map(
                (_, index) => html`
                  <span class="dot" @click=${() => this.currentSlide(index + 1)} aria-label="Slide ${index + 1}"></span>
                `
              )}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('interests-component', InterestsComponent);