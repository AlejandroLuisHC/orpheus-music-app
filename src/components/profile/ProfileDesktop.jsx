import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import {
    IoIosMore,
    IoMdCreate,
    IoMdReturnLeft
} from 'react-icons/io';
import { useSelector } from 'react-redux';
import FooterInfo from '../general_components/FooterInfo';
import {
    DivImgCircleL,
    Footer,
    ImgCircleXL
} from '../style/generalStyle';
import { DivSliders } from '../style/homeStyle';
import {
    DivProfile,
    DivProfileActionsStyle,
    DivProfileBanner,
    DivProfileUserInfoContainer,
    DivUserGeneralData,
    DivUsernameWorks,
    DropdownContainer,
    DropdownHeader,
    H1Username,
    H2UserWorks,
    ListItem,
    PProfileUserInfo,
    SectionEditUser,
    SectionProfileMain,
    SpanProfileUserNumbers
} from '../style/profileStyle';
import AddWork from './profile_main/add_work/AddWork';
import DisconnectIcon from './DisconnectIcon';
import ProfileSlider from './profile_main/ProfileSlider';
import UpdateProfile from './UpdateProfile';
import fetchOneUser from '../../api/fetchOneUser';
import Error from "../../pages/Error";
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
import UpdateProfileImg from './UpdateProfileImg';
import CreatePlaylist from './profile_main/create_playlist/CreatePlaylist';

const ProfileDesktop = ({ userID }) => {
    const { getAccessTokenSilently } = useAuth0()
    const { data, status } = useQuery([userID, userID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOneUser(userID, token)
    });
    const loggedUser = useSelector(state => state.userData.user);

    const [user, setUser] = useState()
    useEffect(() => {
        loggedUser._id === userID
            ? setUser(loggedUser)
            : setUser(data)
    }, [data, loggedUser])

    const [editView, setEditView] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const dataKey = [
        { id: 1, name: "Fav. playlists", type: "playlist", data: user?.favPlaylists || [] },
        { id: 2, name: "Fav. albums", type: "album", data: user?.favAlbums || [] },
        { id: 3, name: "Fav. tracks", type: "track", data: user?.favTracks || [] },
        { id: 4, name: "Followers", type: "user", data: user?.followers || [] },
        { id: 5, name: "Following", type: "user", data: user?.following || [] },
        { id: 6, name: `${user?.username}'s tracks`, type: "track", data: user?.tracks || [] },
        { id: 7, name: `${user?.username}'s albums`, type: "album", data: user?.albums || [] },
        { id: 8, name: `${user?.username}'s playlists`, type: "playlist", data: user?.playlists || [] }
    ]

    const [currentUser, setCurrentUser ] =useState(loggedUser)
    useEffect(() => {
        setCurrentUser(loggedUser)
    }, [currentUser])
    

    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error' || data.status === "FALSE"
                ? <Error />
                :
                <DivProfile>
                    <DivProfileBanner>
                        <DropdownContainer>
                            <DropdownHeader onClick={toggling}><IoIosMore /></DropdownHeader>
                            {isOpen && (
                                <ul>
                                    <ListItem >
                                        {!editView
                                            ?
                                            <span onClick={() => setEditView(prev => prev = true)}>Edit <IoMdCreate /> </span>
                                            :
                                            <span onClick={() => setEditView(prev => prev = false)}>Return <IoMdReturnLeft /></span>
                                        }
                                    </ListItem >
                                    <DisconnectIcon />
                                </ul>
                            )}
                        </DropdownContainer>

                        <DivImgCircleL>
                            {!editView
                                ?
                                <ImgCircleXL src={user?.img.url} alt={user?.username} />
                                :
                                <>
                                    <ImgCircleXL src={user?.img.url} alt={user?.username} />

                                    <UpdateProfileImg />
                                </>
                            }
                        </DivImgCircleL>

                        <DivUserGeneralData>
                            <DivUsernameWorks>
                                <H1Username>{user?.username}</H1Username>
                                <H2UserWorks>{user?.tracks.length} works</H2UserWorks>
                            </DivUsernameWorks>
                            <DivProfileUserInfoContainer>
                                <PProfileUserInfo>
                                    <SpanProfileUserNumbers>{user?.favPlaylists.length}</SpanProfileUserNumbers>
                                    Playlists
                                </PProfileUserInfo>
                                <PProfileUserInfo>
                                    <SpanProfileUserNumbers>{user?.followers.length}</SpanProfileUserNumbers>
                                    Followers
                                </PProfileUserInfo>
                                <PProfileUserInfo>
                                    <SpanProfileUserNumbers>{user?.following.length}</SpanProfileUserNumbers>
                                    Following
                                </PProfileUserInfo>
                            </DivProfileUserInfoContainer>
                        </DivUserGeneralData>

                    </DivProfileBanner>

                    {!editView
                        ?
                        <SectionProfileMain>
                            {
                                loggedUser._id === userID &&
                                <DivProfileActionsStyle>
                                    <AddWork />
                                    <CreatePlaylist />
                                </DivProfileActionsStyle>
                            }

                            <DivSliders>
                                {dataKey.map(key => {
                                    if (key.data.length > 0) {
                                        return <ProfileSlider key={key.id} dataKey={key} user={user} />
                                    }                          
                                })}
                            </DivSliders>

                        </SectionProfileMain>
                        :
                        <SectionEditUser>
                            <UpdateProfile />

                        </SectionEditUser>
                    }
                    <Footer><FooterInfo /></Footer>
                </DivProfile>
    )
}

export default ProfileDesktop