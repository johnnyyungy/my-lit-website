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
  `;

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
              <a class="prev" @click="${this.plusSlides(-1)}">&#10094;</a>
              <a class="next" @click="${this.plusSlides(1)}">&#10095;</a>
            </div>
            <div class="dots">
              <span class="dot" @click="${this.currentSlide(1)}"></span>
              <span class="dot" @click="${this.currentSlide(2)}"></span>
              <span class="dot" @click="${this.currentSlide(3)}"></span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('interests-component', InterestsComponent);