import HeroSlider, { Overlay, Slide, MenuNav, ButtonsNav } from "hero-slider";
import { memo } from "react";
import { slide1, slide2, slide3, slide4 } from "../../../assets/img/gallery_slides";
import { DivHeroTitles, H2StyleHero, H4StyleHero } from "../../style/homeStyle";

const Hero = () => {
    return (
        <HeroSlider
            height={"40vh"}
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
                <DivHeroTitles>
                    <H2StyleHero>
                        Your favourite event <br />just a click away
                    </H2StyleHero>
                    <H4StyleHero>
                        Buy your tickets at Orpheus
                    </H4StyleHero>
                </DivHeroTitles>
            </Overlay>

            <Slide
        label="Viña Rock - 28/04/2023"
        background={{
            backgroundImageSrc: slide1,
        }}
      />

      <Slide
        label="Måneskin - 11/04/2023"
        background={{
            backgroundImageSrc: slide2,
        }}
      />

      <Slide
        label="Resurrection - 28/6/2023"
        background={{
          backgroundImageSrc: slide3
        }}
      />

      <Slide
        label="Duki - 24/02/2023"
        background={{
            backgroundImageSrc: slide4
        }}
      />

      <ButtonsNav backgroundColor="black" color="#EFB810" />
      
        </HeroSlider>
    );
}

export default memo(Hero)