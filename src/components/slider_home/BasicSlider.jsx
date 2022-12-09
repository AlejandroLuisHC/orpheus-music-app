import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { slide0, slide1, slide2 } from "../../assets/img/gallery_slides";
import { DivHeroTitles, H2StyleHero, H4StyleHero } from "../style/homeStyle";

export default function BasicSlider() {
    return (
        <HeroSlider
            height={"33vh"}
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
                        Your favourite event <br/>just a click away
                    </H2StyleHero>
                    <H4StyleHero>
                        Buy your tickets at Orpheus
                    </H4StyleHero>
                </DivHeroTitles>
            </Overlay>

            <Slide
                shouldRenderMask
                label="Azkena Rock Festival 2023 - from April"
                background={{
                    backgroundImageSrc: slide1,
                    backgroundAnimation: "zoom"
                }}
            />

            <Slide
                shouldRenderMask
                label="Primavera Sound Barcelona 2023 - 1 June"
                background={{
                    backgroundImageSrc: slide2,
                    backgroundAnimation: "zoom"
                }}
            />

            <Slide
                shouldRenderMask
                label="Bruce Springsteen & The E Street Band - 30 August"
                background={{
                    backgroundImageSrc: slide0,
                    backgroundAnimation: "zoom"
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
}
