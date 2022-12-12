import { useQuery } from "@tanstack/react-query"
import { fetchAlbums } from '../../api'
import { H6StyleHero, PStyleHero, ImgCards, DivSlider, DivCard, DivElementTitles, DivPicLists, DivInfoLists, LinkHome } from '../style/homeStyle'
import { H2Style } from '../style/generalStyle'
import HomeSlidersLoader from '../loaders/content_loader/HomeSlidersLoader'

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
            ? <HomeSlidersLoader />
            : albumsStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Albums </H2Style>
                        <LinkHome>View more</LinkHome>
                    </DivElementTitles>

                    <DivSlider>
                        {
                            data?.map((album) => {
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