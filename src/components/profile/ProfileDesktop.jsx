import { useSelector } from 'react-redux';
import AvatarImg from '../general_components/AvatarImg';
import { DivProfileActionsStyle, DivProfileBanner, SectionProfileMain, PProfileUserInfo, DivProfileUserInfoConteiner, SpanProfileUserNumbers, DivUserAvatar, DivUserGeneralData, H1Username, H2UserWorks } from '../style/profileStyle'
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';


const ProfileDesktop = () => {
const userData = useSelector(state => state.userData.user.userData);

console.log(userData)
  return (
    <>
        <DivProfileBanner>

            <DivUserAvatar>
                <AvatarImg
                    size={200}
                    avatarId={userData.avatar}
                />
            </DivUserAvatar>

            <DivUserGeneralData>

                <H1Username>{userData.username}</H1Username>
                <H2UserWorks>23 works</H2UserWorks>
                <DivProfileUserInfoConteiner>
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
                </DivProfileUserInfoConteiner>

            </DivUserGeneralData>
            
            <DivProfileActionsStyle>
                <AddWork />
                <CreatePlaylist />
            </DivProfileActionsStyle>

        </DivProfileBanner>
            
        <SectionProfileMain>
                
        </SectionProfileMain>
    </>
  )
}

export default ProfileDesktop