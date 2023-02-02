import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { fetchKey } from '../api';
import {
    DivDataList,
    DivHeroTitle,
    DivTitlesList,
    ImgDataList1,
    PDataList2,
    PDataList3,
    PDataList4,
    PTitleList0,
    PTitleList1,
    PTitleList2,
    PTitleList3,
    SpanList
} from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const UsersList = () => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery(['users'], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey('users', token)
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
                        <h1>Users</h1>
                    </DivHeroTitle>
                    <DivTitlesList>
                        <PTitleList0></PTitleList0>
                        <PTitleList1>Name<br /><SpanList>countries</SpanList></PTitleList1>
                        <PTitleList2>Works<br /><SpanList>tracks / albums</SpanList></PTitleList2>
                        <PTitleList3>Social<br /><SpanList>followers / following</SpanList></PTitleList3>
                    </DivTitlesList>
                    <HrDivStyle />
                    {data.map((user) => {
                        return (
                            <div key={user._id}>
                                <DivDataList key={user._id} onClick={() => navigate(`/user/${user._id}`)}>
                                    <ImgDataList1 src={user.img.url} alt={user.username} />
                                    <PDataList2>{user.username}<br /><SpanList>{user.country}</SpanList></PDataList2>
                                    <PDataList3>{user.tracks.length} / {user.albums.length}</PDataList3>
                                    <PDataList4>{user.followers.length} / {user.following.length}</PDataList4>
                                </DivDataList>
                                <HrDivStyle />
                            </div>
                        )
                    })}

                </>
    )
}

export default memo(UsersList)