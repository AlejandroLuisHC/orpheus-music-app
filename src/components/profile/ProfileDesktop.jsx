import { useState } from 'react';
import { IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import { useSelector } from 'react-redux';
import useWidth from '../../helper/hooks/useWidth';
import AvatarImg from '../general_components/AvatarImg';
import FooterInfo from '../general_components/FooterInfo';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import { Footer } from '../style/generalStyle';
import { ButtonEditUser, DivProfile, DivProfileActionsStyle, DivProfileBanner, DivProfileMainContent, DivProfileUserInfoContainer, DivUserGeneralData, DivUsernameWorks, H1Username, H2UserWorks, PProfileUserInfo, SectionEditUser, SectionProfileMain, SpanProfileUserNumbers } from '../style/profileStyle';
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';
import UpdateProfile from './UpdateProfile';

const ProfileDesktop = () => {
    const {userData} = useSelector(state => state.userData.user);
    const width = useWidth();
    const [editView, setEditView] = useState(false);

    return (
        <DivProfile>
            <DivProfileBanner>
                {!editView
                    ?
                    <ButtonEditUser onClick={() => setEditView(prev => prev = true)}>
                        <IoMdCreate />
                    </ButtonEditUser>
                    :
                    <ButtonEditUser onClick={() => setEditView(prev => prev = false)}>
                        <IoMdReturnLeft />
                    </ButtonEditUser>
                }
                <AvatarImg
                    size={width > 1050 ? 200 : 140}
                    avatarId={userData.avatar}
                />

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

            {/* Erase when edit     */}

            {!editView
                ?
                <SectionProfileMain>
                    <DivProfileActionsStyle>
                        <AddWork />
                        <CreatePlaylist />
                    </DivProfileActionsStyle>

                    {/* Future user's playlists */}
                    <DivProfileMainContent>
                        <HomeSlidersLoader />
                        <HomeSlidersLoader />
                        <HomeSlidersLoader />
                    </DivProfileMainContent>
                </SectionProfileMain>
                :
                <SectionEditUser>
                    <UpdateProfile />
                    
                </SectionEditUser>
            }
            
        </DivProfile>
    )
}

export default ProfileDesktop