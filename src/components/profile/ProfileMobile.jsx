import React from 'react'
import { useState } from 'react';
import { IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import { useSelector } from 'react-redux';
import AvatarImg from '../general_components/AvatarImg'
import { ButtonEditUser, DivMobileUserAvatar, DivProfile, DivProfileActionsStyle, DivProfileBanner, DivProfileUserInfoContainer, DivUserGeneralData, DivUsernameWorks, H1Username, H2UserWorks, PProfileUserInfo, SectionEditUser, SectionProfileMain, SpanProfileUserNumbers } from '../style/profileStyle'
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';
import UpdateProfile from './UpdateProfile';


const ProfileMobile = () => {
  const [editView, setEditView] = useState(false);

  const userData = useSelector(state => state.userData.user.userData);
  return (
    <DivProfile>
      
      <DivProfileBanner>
          {!editView
                ?
                <ButtonEditUser onClick={() =>setEditView(prev => prev = true)}>
                    <IoMdCreate />
                </ButtonEditUser>
                :
                <ButtonEditUser onClick={() =>setEditView(prev => prev = false)}>
                    <IoMdReturnLeft />
                </ButtonEditUser>}
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