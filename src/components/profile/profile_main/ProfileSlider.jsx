import { memo } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { DivImgRectangleL, H2Style } from '../../style/generalStyle';
import {
    DivEventInfo,
    DivInfoMusic,
    DivImageMusic,
    PNameUser,
    PFollowersUser,
    PTitle,
    ImgAvatarUser,
    ImgCardMusic,
    PDescription,
    DivEventCard,
    DivMusicCard,
    DivSilderHeader,
    DivSliderBody,
    DivUserCard,
    PEventPrice,
    LinkViewMore,

} from '../../style/homeStyle';

const ProfileSlider = ({ dataKey }) => {
    const navigate = useNavigate();
    const [setPlayer] = useOutletContext();
    const { type, name, data } = dataKey;
    return (
        <>
            <DivSilderHeader>
                <H2Style onClick={() => navigate(`/profile/${type}`)}>{name}</H2Style>
                <LinkViewMore to={`/profile/${type}`} >View more</LinkViewMore>
            </DivSilderHeader>

            <DivSliderBody>
                {data?.map(d =>
                    type === 'events' ? (
                        <DivEventCard key={d.id}>
                            <DivImgRectangleL src={d.img} />
                            <DivEventInfo>
                                <div>
                                    <PTitle>{d.name}</PTitle>
                                    <PDescription>{d.location} - {d.date}</PDescription>
                                </div>
                                <PEventPrice>{d.price}€</PEventPrice>
                            </DivEventInfo>
                        </DivEventCard>

                    ) : type === 'users' ? (
                        <DivUserCard key={d.id}>
                            <ImgAvatarUser src={d.img} />
                            <PNameUser>{d.name}</PNameUser>
                            <PFollowersUser>{d.followers} followers</PFollowersUser>
                        </DivUserCard>

                    ) : (
                        <DivMusicCard
                            resultType={type}
                            key={d._id}
                        /* as={Link} to={`/${type}/${result.name}`} */
                        >
                            <DivImageMusic onClick={() => {
                                setPlayer(
                                    prev => prev = {
                                        playerOn: true,
                                        audio: d.file,
                                        name: d.name,
                                        user: d.description,
                                    }
                                )
                            }}>
                                <ImgCardMusic src={d.img.url} />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{d.name}</PTitle>
                                <PDescription>{d.description}</PDescription>
                            </DivInfoMusic>
                        </DivMusicCard>
                    )
                )}
            </DivSliderBody>
        </>
    )
};

export default memo(ProfileSlider);
