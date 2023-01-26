import { useState } from 'react';
import { IoIosMore, IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import { useSelector } from 'react-redux';
import FooterInfo from '../general_components/FooterInfo';
import { DivImgCircleL, Footer, ImgCircleXL } from '../style/generalStyle';
import { DivSliders } from '../style/homeStyle';
import { DivMobileUserAvatar, DivProfile, DivProfileActionsStyle, DivProfileBanner, DivProfileUserInfoContainer, DivUserGeneralData, DivUsernameWorks, DropdownContainer, DropdownHeader, H1Username, H2UserWorks, ListItem, PProfileUserInfo, SectionEditUser, SectionProfileMain, SpanProfileUserNumbers } from '../style/profileStyle'
import AddWork from './profile_main/add_work/AddWork';
import CreatePlaylist from './CreatePlaylist';
import DisconnectIcon from './DisconnectIcon';
import ProfileSlider from './profile_main/ProfileSlider';
import UpdateProfile from './UpdateProfile';


const ProfileMobile = () => {
    const [editView, setEditView] = useState(false);
    const userData = useSelector(state => state.userData.user)
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    console.log(userData)
    const dataKey = [
        {id: 1, name:"Fav. playlists", type: "playlist", data: userData.favPlaylists}, 
        {id: 2, name:"Fav. albums", type: "albums", data: userData.favAlbums}, 
        {id: 3, name:"Fav. tracks", type: "tracks", data: userData.favTracks}, 
        {id: 4, name:"Followers", type: "users", data: userData.followers}, 
        {id: 5, name:"Following", type: "users", data: userData.following}
    ]

    return (
        <DivProfile>
            <DivProfileBanner>
                <DropdownContainer>
                        <DropdownHeader onClick={toggling}><IoIosMore /></DropdownHeader>
                        {isOpen && (
                        <ul>
                            <ListItem >
                                {!editView
                                ?
                                <div onClick={() => setEditView(prev => prev = true)}> Edit <IoMdCreate/> </div> 
                                :
                                <div onClick={() => setEditView(prev => prev = false)}> Return <IoMdReturnLeft/> </div>}
                            </ListItem >
                            <DisconnectIcon />
                        </ul>
                        )}
                </DropdownContainer>
                <DivMobileUserAvatar>
                    <DivImgCircleL>
                        <ImgCircleXL src={userData.img.url} alt={userData.username} />
                    </DivImgCircleL>
                </DivMobileUserAvatar>

                <DivUserGeneralData>
                    <DivUsernameWorks>
                        <H1Username>{userData.username}</H1Username>
                        <H2UserWorks>23 works</H2UserWorks>
                    </DivUsernameWorks>
                    <DivProfileUserInfoContainer>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>{userData.favPlaylists.length}</SpanProfileUserNumbers>
                            Playlists
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>{userData.followers.length}</SpanProfileUserNumbers>
                            Followers
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>{userData.following.length}</SpanProfileUserNumbers>
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
                            if (key.data.length > 0){
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