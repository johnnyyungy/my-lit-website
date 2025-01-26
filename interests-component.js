import { LitElement, html, css } from 'lit';

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

              <a class="prev" @click="${this.plusSlides(-1)}">&#10094;</a>
              <a class="next" @click="${this.plusSlides(1)}">&#10095;</a>
            </div>
            <br>

            <div style="text-align:center">
              <span class="dot" @click="${this.currentSlide(1)}"></span>
              <span class="dot" @click="${this.currentSlide(2)}"></span>
              <span class="dot" @click="${this.currentSlide(3)}"></span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    const slides = this.shadowRoot.querySelectorAll(".mySlides");
    const dots = this.shadowRoot.querySelectorAll(".dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}

customElements.define('interests-component', InterestsComponent);