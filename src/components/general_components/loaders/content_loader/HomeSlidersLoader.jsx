import { memo } from "react"
import {DivSilderHeader, DivSlider } from "../../../style/homeStyle"
import TitleLoader from "./loader_components/TitleLoader"
import TrackLoader from "./loader_components/TrackLoader"

const HomeSlidersLoader = () => {
    return (
        <div>
            <DivSilderHeader><TitleLoader /></DivSilderHeader>
            <DivSlider><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /><TrackLoader /></DivSlider>
        </div>
    )
}

export default memo(HomeSlidersLoader)