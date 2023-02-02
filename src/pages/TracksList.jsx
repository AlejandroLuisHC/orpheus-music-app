import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { fetchKey } from '../api';
import { DivDataList, DivHeroTitle, DivTitlesList, ImgDataList1, PDataList2, PDataList3, PDataList4, PTitleList0, PTitleList1, PTitleList2, PTitleList3 } from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Error from "./Error";




const TracksList = () => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery(['tracks'], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey('tracks', token)
    });
    const navigate = useNavigate();

    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error' || data.status === "FALSE"
                ? <Error />
                :
                <>
                    <DivHeroTitle>
                        <h1>LAST TRACKS</h1>
                    </DivHeroTitle>
                    <DivTitlesList>
                        <PTitleList0></PTitleList0>
                        <PTitleList1>Name</PTitleList1>
                        <PTitleList2>Ownership</PTitleList2>
                        <PTitleList3>Create</PTitleList3>
                    </DivTitlesList>
                    <HrDivStyle />
                    {data.data?.map((track) => {

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

export default memo(TracksList)