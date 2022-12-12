import { useQuery } from "@tanstack/react-query"
import { fetchPlaylist } from '../../api'
import { H6StyleHero, PStyleHero, ImgCards, DivSlider, DivCard, DivElementTitles, DivPicLists, DivInfoLists, LinkHome } from '../style/homeStyle'
import { H2Style } from '../style/generalStyle'
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader'
import { memo } from "react"

const PlaylistBox = () => {
    const { data, status: playlistStatus } = useQuery(['playlists'], fetchPlaylist)

    return (
        playlistStatus === "loading"
            ? <HomeSlidersLoader />
            : playlistStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Playlist </H2Style>
                        <LinkHome>View more</LinkHome>
                    </DivElementTitles>

                    <DivSlider>
                        {
                            data?.map((playlist) => {
                                return (
                                    <DivCard key={playlist.id}>
                                        <DivPicLists>
                                            <ImgCards src={playlist.img} />
                                        </DivPicLists>
                                        <DivInfoLists>
                                            <H6StyleHero>{playlist.name}</H6StyleHero>
                                        </DivInfoLists>
                                    </DivCard>
                                )
                            })
                        }
                    </DivSlider>  
                </div>
    )
}
export default memo(PlaylistBox)