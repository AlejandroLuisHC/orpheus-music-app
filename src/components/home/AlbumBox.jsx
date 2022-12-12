import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { fetchAlbums } from '../../api'
import LogoSpinner from "../loaders/spinner/LogoSpinner"
import { H6StyleHero, PStyleHero, ImgCards, DivSlider, DivCard, DivElementTitles, DivPicLists, DivInfoLists } from '../style/homeStyle'
import { H2Style } from '../style/generalStyle'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const AlbumBox = () => {
    const { data, status: albumsStatus } = useQuery(['albums'], fetchAlbums)

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        albumsStatus === "loading"
            ? <LogoSpinner />
            : albumsStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Album </H2Style>
                        <div>
                            <IoIosArrowDropleftCircle onClick={slideLeft} id="slider" />
                            <IoIosArrowDroprightCircle onClick={slideRight} id="slider" />
                        </div>
                    </DivElementTitles>

                    <DivSlider>
                        {
                            data.map((album) => {
                                return (
                                    <DivCard key={album.id}>
                                        <DivPicLists>
                                            <ImgCards src={album.img} />
                                        </DivPicLists>
                                        <DivInfoLists>
                                            <H6StyleHero>{album.name}</H6StyleHero>
                                            <PStyleHero>{album.description}</PStyleHero>
                                        </DivInfoLists>
                                    </DivCard>
                                )
                            })
                        }
                    </DivSlider>  
                </div>
    )
}
export default AlbumBox