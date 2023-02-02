import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { fetchKey } from '../api';
import { DivDataList, DivHeroTitle, DivTitlesList, ImgDataList1, PDataList2, PDataList3, PDataList4, PTitleList0, PTitleList1, PTitleList2, PTitleList3} from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import moment from "moment";
import { useNavigate } from "react-router-dom";




const AlbumsList = () => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery(['albums'], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey('albums', token)
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
                        <h1>ALBUMS</h1>
                    </DivHeroTitle>
                    <DivTitlesList>
                        <PTitleList0></PTitleList0>
                        <PTitleList1>Name</PTitleList1>
                        <PTitleList2>Created by</PTitleList2>
                        <PTitleList3>Tracks</PTitleList3>
                    </DivTitlesList>
                    <HrDivStyle />
                    {data.map((album) =>{
                        return(
                            <>
                                 <DivDataList key={album._id} onClick={() => navigate(`/album/${album._id}`)}>
                                    <ImgDataList1 src={album.img.url} alt={album.name}/>
                                    <PDataList2>{album.name}</PDataList2>
                                    <PDataList3>{album.ownership.username}<br/>{moment(album.createdAt).format("DD MMM YYYY")}</PDataList3>
                                    <PDataList4>{album.tracks.length}</PDataList4>
                                </DivDataList> 
                                <HrDivStyle/> 
                            </>
                            
                        )
                    })}

                </>
    )
}

export default memo(AlbumsList)