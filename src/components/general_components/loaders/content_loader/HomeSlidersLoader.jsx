import { memo } from "react"
import { DivElementTitles, DivSlider } from "../../../style/homeStyle"
import TitleLoader from "./loader_components/TitleLoader"
import TrackLoader from "./loader_components/TrackLoader"

const HomeSlidersLoader = () => {
    return (
        <div>
            <DivElementTitles><TitleLoader /></DivElementTitles>
            <DivSlider><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /></DivSlider>
        </div> 
    )
}

export default memo(HomeSlidersLoader)