import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { H2StyleHero, H4StyleHero } from "../style/homeStyle";


const slide1 = "src/assets/img/gallery_slides/slide0.jpg";
const slide2 = "src/assets/img/gallery_slides/slide1.jpg";
const slide3 = "src/assets/img/gallery_slides/slide2.jpg";


export default function BasicSlider() {
    return (
      <HeroSlider
        height={"80vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide)

        }}
      >
        <Overlay>
          <div>
            <H2StyleHero>your favourite event just a click away</H2StyleHero>
            <H4StyleHero>
              Check out the documentation for more advanced examples.
            </H4StyleHero>
          </div>
        </Overlay>
  
        <Slide
          shouldRenderMask
          label="Azkena Rock Festival 2023 - from April"
          background={{
            backgroundImageSrc: slide1
          }}
        />
  
        <Slide
          shouldRenderMask
          label="Primavera Sound Barcelona 2023 - 1 June"
          background={{
            backgroundImageSrc: slide2
          }}
        />
  
        <Slide
          shouldRenderMask
          label="Bruce Springsteen & The E Street Band - 30 August
          "
          background={{
            backgroundImageSrc: slide3
          }}
        />
  

  
        <MenuNav />
      </HeroSlider>
    );
  }
  