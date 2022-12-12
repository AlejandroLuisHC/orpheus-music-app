import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { fetchTracks } from '../../api'
import LogoSpinner from "../loaders/spinner/LogoSpinner"
import { LiListStyle,  H6StyleHero, PStyleHero, DivRow, ImgCards } from '../style/homeStyle'


const TrackBox = () => {

    const { data, status: tracksStatus } = useQuery(['tracks'], fetchTracks)

    return (
        tracksStatus === "loading"
            ? <LogoSpinner />
            : tracksStatus === "error"
                ? <p>Error</p>
                :
                <DivRow>
                    {
                        data.map((track, id) => {
                            return (
                                <LiListStyle key={id}>
                                    <div>
                                    <ImgCards src={track.img}/>
                                       {/*  <img  alt={track.name} style={{
                                        width:"120px",
                                        height:"120px",
                                        }}/> */}
                                    </div>
                                    <H6StyleHero>{track.name}</H6StyleHero>
                                    <PStyleHero>{track.description}</PStyleHero>
                                </LiListStyle>
                            )
                        })
                    }
                </DivRow>
                
    )
}

export default TrackBox

