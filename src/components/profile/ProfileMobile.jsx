import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import {
    IoIosMore,
    IoMdCreate,
    IoMdReturnLeft
} from 'react-icons/io';
import { useSelector } from 'react-redux';
import fetchOneUser from '../../api/fetchOneUser';
import FooterInfo from '../general_components/FooterInfo';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
import {
    DivImgCircleL,
    Footer,
    ImgCircleXL
} from '../style/generalStyle';
import { DivSliders } from '../style/homeStyle';
import {
    DivMobileUserAvatar,
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
} from '../style/profileStyle'
import AddWork from './profile_main/add_work/AddWork';
import CreatePlaylist from './CreatePlaylist';
import DisconnectIcon from './DisconnectIcon';
import ProfileSlider from './profile_main/ProfileSlider';
import UpdateProfile from './UpdateProfile';
import Error from "../../pages/Error";


const ProfileMobile = ({ userID }) => {
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

    const [isOpen, setIsOpen] = useState(false);
    const [editView, setEditView] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const dataKey = [
        { id: 1, name: "Fav. playlists", type: "playlist", data: user?.favPlaylists || [] },
        { id: 2, name: "Fav. albums", type: "albums", data: user?.favAlbums || [] },
        { id: 3, name: "Fav. tracks", type: "tracks", data: user?.favTracks || [] },
        { id: 4, name: "Followers", type: "users", data: user?.followers || [] },
        { id: 5, name: "Following", type: "users", data: user?.following || [] }
    ]

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
                                            <div onClick={() => setEditView(prev => prev = true)}> Edit <IoMdCreate /> </div>
                                            :
                                            <div onClick={() => setEditView(prev => prev = false)}> Return <IoMdReturnLeft /> </div>}
                                    </ListItem >
                                    <DisconnectIcon />
                                </ul>
                            )}
                        </DropdownContainer>
                        <DivMobileUserAvatar>
                            <DivImgCircleL>
                                <ImgCircleXL src={user?.img.url} alt={user?.username} />
                            </DivImgCircleL>
                        </DivMobileUserAvatar>

                        <DivUserGeneralData>
                            <DivUsernameWorks>
                                <H1Username>{user?.username}</H1Username>
                                <H2UserWorks>23 works</H2UserWorks>
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
                            <DivProfileActionsStyle>
                                <AddWork />
                                <CreatePlaylist />
                            </DivProfileActionsStyle>

                            <DivSliders>
                                {dataKey.map(key => {
                                    if (key.data.length > 0) {
                                        return <ProfileSlider key={key.id} dataKey={key} />
                                    }
                                })}
                            </DivSliders>

                        </SectionProfileMain>
                        :
                        <SectionEditUser>
                            <UpdateProfile />
                        </SectionEditUser>}
                    <Footer><FooterInfo /></Footer>
                </DivProfile>
    )
}

export default ProfileMobile