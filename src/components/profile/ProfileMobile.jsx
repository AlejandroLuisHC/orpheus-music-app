import { useState } from 'react';
import { IoIosMore, IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import { useSelector } from 'react-redux';
import AvatarImg from '../general_components/AvatarImg'
import { ButtonEditUser, DivMobileUserAvatar, DivProfile, DivProfileActionsStyle, DivProfileBanner, DivProfileUserInfoContainer, DivUserGeneralData, DivUsernameWorks, DropdownContainer, DropdownHeader, DropdownListContainer, H1Username, H2UserWorks, ListItem, PProfileUserInfo, SectionEditUser, SectionProfileMain, SpanProfileUserNumbers } from '../style/profileStyle'
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';
import DisconnectIcon from './DisconnectIcon';
import UpdateProfile from './UpdateProfile';


const ProfileMobile = () => {
    const [editView, setEditView] = useState(false);
    const userData = useSelector(state => state.userData.user.userData)
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (
        <DivProfile>
            <DivProfileBanner>
                <DropdownContainer>
                        <DropdownHeader onClick={toggling}><IoIosMore /></DropdownHeader>
                        {isOpen && (
                        <DropdownListContainer>
                            <ListItem >
                                {!editView
                                ?
                                <div onClick={() => setEditView(prev => prev = true)}> Edit <IoMdCreate/> </div> 
                                :
                                <div onClick={() => setEditView(prev => prev = false)}> Return <IoMdReturnLeft/> </div>}
                            </ListItem >
                            <ListItem >
                                <DisconnectIcon />
                            </ListItem >
                        </DropdownListContainer>
                        )}
                </DropdownContainer>
                <DivMobileUserAvatar>
                    <AvatarImg
                        size={160}
                        avatarId={userData.avatar}
                    />
                </DivMobileUserAvatar>

                <DivUserGeneralData>
                    <DivUsernameWorks>
                        <H1Username>{userData.username}</H1Username>
                        <H2UserWorks>23 works</H2UserWorks>
                    </DivUsernameWorks>
                    <DivProfileUserInfoContainer>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
                            Playlists
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
                            Followers
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
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
                    Some extra info
                </SectionProfileMain>
                :
                <SectionEditUser>
                    <UpdateProfile />
                </SectionEditUser>}
        </DivProfile>
    )
}

export default ProfileMobile