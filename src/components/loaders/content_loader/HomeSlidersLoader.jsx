import { DivElementTitles, DivSlider } from "../../style/homeStyle"
import TitleLoader from "./loader_components/TitleLoader"
import TrackLoader from "./loader_components/TrackLoader"

const HomeSlidersLoader = () => {
    return (
        <>
            <DivElementTitles><TitleLoader /></DivElementTitles>
            <DivSlider><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /></DivSlider>
        </> 
    )
}

export default HomeSlidersLoader