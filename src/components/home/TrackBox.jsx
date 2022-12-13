import { useQuery } from "@tanstack/react-query"
import { fetchKey } from '../../api'
import { H6StyleHero, PStyleHero, ImgCards, DivSlider, DivCard, DivElementTitles, DivPicLists, DivInfoLists, LinkHome } from '../style/homeStyle'
import { H2Style } from '../style/generalStyle'
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader'
import { memo } from "react"

const TrackBox = () => {
    const { data, status: tracksStatus } = useQuery(['tracks', "tracks"], ()=>fetchKey("tracks"))

    return (
        tracksStatus === "loading"
            ? <HomeSlidersLoader />
            : tracksStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Tracks </H2Style>
                        <LinkHome>View more</LinkHome>
                    </DivElementTitles>

                    <DivSlider>
                        {
                            data?.map((track) => {
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
export default memo(TrackBox)