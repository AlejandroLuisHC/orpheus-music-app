import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { fetchKey } from '../api';
import { DivDataList, DivHeroTitle, DivTitlesList, ImgDataList1, PDataList2, PDataList3, PDataList4, PTitleList0, PTitleList1, PTitleList2, PTitleList3} from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import moment from "moment";
import { useNavigate } from "react-router-dom";




const PlaylistList = () => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery(['playlists'], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey('playlists', token)
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
                        <h1>PLAYLISTS</h1>
                    </DivHeroTitle>
                    <DivTitlesList>
                        <PTitleList0></PTitleList0>
                        <PTitleList1>Name</PTitleList1>
                        <PTitleList2>Tracks</PTitleList2>
                        <PTitleList3>Create</PTitleList3>
                    </DivTitlesList>
                    <HrDivStyle />
                    {data.map((playlist) =>{
                        return(
                            <>
                                 <DivDataList key={playlist._id} onClick={() => navigate(`/playlist/${playlist._id}`)}>
                                    <ImgDataList1 src={playlist.img.url} alt={playlist.name}/>
                                    <PDataList2>{playlist.name}<br/><span>{playlist.ownership.username}</span></PDataList2>
                                    <PDataList3>{playlist.tracks.length}</PDataList3>
                                    <PDataList4>{moment(playlist.createdAt).format("DD MMM YYYY")}</PDataList4>
                                </DivDataList> 
                                <HrDivStyle/> 
                            </>
                            
                        )
                    })}

                </>
    )
}

export default memo(PlaylistList)