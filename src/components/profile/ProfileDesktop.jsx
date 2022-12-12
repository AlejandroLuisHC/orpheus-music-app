import { useSelector } from 'react-redux';
import AvatarImg from '../general_components/AvatarImg';
import FooterInfo from '../general_components/FooterInfo';
import { Footer } from '../style/generalStyle';
import { DivProfileActionsStyle, DivProfileBanner, SectionProfileMain, PProfileUserInfo, DivProfileUserInfoContainer, SpanProfileUserNumbers, DivUserAvatar, DivUserGeneralData, H1Username, H2UserWorks, DivProfile, DivUsernameWorks } from '../style/profileStyle'
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';


const ProfileDesktop = () => {
const userData = useSelector(state => state.userData.user.userData);

console.log(userData)
    return (
        <DivProfile>
            <DivProfileBanner>
                <DivUserAvatar>
                    <AvatarImg
                        size={200}
                        avatarId={userData.avatar}
                    />
                </DivUserAvatar>

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
                
                {/* Erase when edit */}
                <DivProfileActionsStyle>
                    <AddWork />
                    <CreatePlaylist />
                </DivProfileActionsStyle>

            </DivProfileBanner>

            {/* Erase when edit     */}
            <SectionProfileMain>
                Some extra info
            </SectionProfileMain>

            {/* <SectionEdit>

            </SectionEdit> */}

            <Footer><FooterInfo /></Footer>
        </DivProfile>
    )
}

export default ProfileDesktop