import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { DivDataList, DivHeroTitle, DivTitlesList, ImgDataList1, PDataList2, PDataList3, PDataList4, PTitleList0, PTitleList1, PTitleList2, PTitleList3 } from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { useSelector } from "react-redux";

const FavTracksList = () => {
    const { favTracks } = useSelector(state => state.userData.user)
    const navigate = useNavigate();

    return (
        <>
            <DivHeroTitle>
                <h1>FAV TRACKS</h1>
            </DivHeroTitle>
            <DivTitlesList>
                <PTitleList0></PTitleList0>
                <PTitleList1>Name</PTitleList1>
                <PTitleList2>Created by</PTitleList2>
                <PTitleList3>Release</PTitleList3>
            </DivTitlesList>
            <HrDivStyle />
            {favTracks?.map((track) => {

                return (
                    <div key={track._id}>
                        <DivDataList key={track._id} onClick={() => navigate(`/track/${track._id}`)}>
                            <ImgDataList1 src={track.img.url} alt={track.name} />
                            <PDataList2>{track.name}</PDataList2>
                            <PDataList3>{track.ownership.username}</PDataList3>
                            <PDataList4>{moment(track.createdAt).format("DD MMM YYYY")}</PDataList4>
                        </DivDataList>
                        <HrDivStyle />
                    </div>
                )
            })}
        </>
    )
}

export default memo(FavTracksList)