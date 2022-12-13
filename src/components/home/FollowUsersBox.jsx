import { useQuery } from "@tanstack/react-query"
import { fetchKey } from '../../api'
import { H2Style, H2StyleWhite } from '../style/generalStyle'
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader'
import { memo } from "react"
import { DivCardUser, DivElementTitles, DivSliderUser, H3NameUser, H4NameUser, ImgAvatarUser, LinkHome } from "../style/homeStyle"


const FollowUsersBox = () => {
    const { data, status: followUsersStatus } = useQuery(['users', 'users'], () => fetchKey("users"))

    return (
        followUsersStatus === "loading"
            ? <HomeSlidersLoader />
            : followUsersStatus === "error"
                ? <p>Error</p>
                :
                <div>
                    <DivElementTitles>
                        <H2Style> Most Follow Users </H2Style>
                        <LinkHome>View more</LinkHome>
                    </DivElementTitles>

                    <DivSliderUser>
                        {
                            data?.map((user) =>
                                <DivCardUser key={user.id}>                                    
                                        <H3NameUser>{user.userData.username} </H3NameUser>
                                        <H4NameUser>{user.followers.length} followers</H4NameUser>
                                    <ImgAvatarUser src={user.userData.avatar} />
                                </DivCardUser>
                            )
                        }
                    </DivSliderUser>

                </div>

    )
}
export default memo(FollowUsersBox)