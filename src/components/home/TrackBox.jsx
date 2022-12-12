import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { fetchTracks } from '../../api'
import LogoSpinner from "../loaders/spinner/LogoSpinner"
import { H6StyleHero, PStyleHero, ImgCards, DivSlider, DivCard, DivElementTitles, DivPicLists, DivInfoLists } from '../style/homeStyle'
import { H2Style } from '../style/generalStyle'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const TrackBox = () => {
    const { data, status: tracksStatus } = useQuery(['tracks'], fetchTracks)

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        tracksStatus === "loading"
            ? <LogoSpinner />
            : tracksStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Tracks </H2Style>
                        <div>
                            <IoIosArrowDropleftCircle onClick={slideLeft} id="slider" />
                            <IoIosArrowDroprightCircle onClick={slideRight} id="slider" />
                        </div>
                    </DivElementTitles>

                    <DivSlider>
                        {
                            data.map((track) => {
                                return (
                                    <DivCard key={track.id}>
                                        <DivPicLists>
                                            <ImgCards src={track.img} />
                                        </DivPicLists>
                                        <DivInfoLists>
                                            <H6StyleHero>{track.name}</H6StyleHero>
                                            <PStyleHero>{track.description}</PStyleHero>
                                        </DivInfoLists>
                                    </DivCard>
                                )
                            })
                        }
                    </DivSlider>  
                </div>
    )
}
export default TrackBox