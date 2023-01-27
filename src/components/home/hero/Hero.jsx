import HeroSlider, { Overlay, Slide, ButtonsNav } from "hero-slider";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { DivHeroTitles, H2StyleHero, H4StyleHero } from "../../style/homeStyle";

const Hero = () => {
    const navigate = useNavigate()

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
                <DivHeroTitles onClick={() => navigate('/home/events')}>
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
                    backgroundImageSrc: "https://res.cloudinary.com/drghk9p6q/image/upload/v1671240506/Final-Project-MERN/BannersHero/slide1_rd5sg8.webp",
                }}
            />

            <Slide
                label="Måneskin - 11/04/2023"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/drghk9p6q/image/upload/v1671240506/Final-Project-MERN/BannersHero/slide4_xtpb2w.webp",
                }}
            />

            <Slide
                label="Resurrection - 28/6/2023"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/drghk9p6q/image/upload/v1671240506/Final-Project-MERN/BannersHero/slide3_vnlkna.webp"
                }}
            />

            <Slide
                label="Duki - 24/02/2023"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/drghk9p6q/image/upload/v1671240506/Final-Project-MERN/BannersHero/slide2_jgbzcb.webp"
                }}
            />

            <ButtonsNav backgroundColor="black" color="#EFB810" />

        </HeroSlider>
    );
}

export default memo(Hero)