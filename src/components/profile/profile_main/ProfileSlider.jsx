import { memo } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import BtnAddToFavTracks from '../../general_components/tracks/BtnAddToFavTracks';
import BtnModalTrackOptions from '../../general_components/tracks/BtnModalTrackOptions';
import { DivImgRectangleL, DivInfoMusicBottom, H2Style } from '../../style/generalStyle';
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

const ProfileSlider = ({ dataKey, user }) => {
    const navigate = useNavigate()
    const [setPlayer] = useOutletContext()
    const { type, name, data } = dataKey
    console.log(dataKey)
    return (
        <>
            <DivSilderHeader>
                <H2Style onClick={() => navigate(`/favouritetracks`)}>{name}</H2Style>
                <LinkViewMore to={`/favouritetracks`} >View more</LinkViewMore>
            </DivSilderHeader>

            <DivSliderBody>
                {data?.slice(0).reverse().map(d =>
                    type === 'event' ? (
                        <DivEventCard 
                            key={d._id}
                            onClick={() => navigate(`/${type}/${d._id}`)}
                        >
                            <DivImgRectangleL src={d.img.url} />
                            <DivEventInfo>
                                <div>
                                    <PTitle>{d.name}</PTitle>
                                    <PDescription>{d.location} - {d.date}</PDescription>
                                </div>
                                <PEventPrice>{d.price}€</PEventPrice>
                            </DivEventInfo>
                        </DivEventCard>

                    ) : type === 'user' ? (
                        <DivUserCard 
                            key={d._id}
                            onClick={() => navigate(`/${type}/${d._id}`)}
                        >
                            <ImgAvatarUser src={d.img.url} />
                            <PNameUser>{d.username}</PNameUser>
                            <PFollowersUser>{d.followers.length} followers</PFollowersUser>
                        </DivUserCard>

                    ) : (
                        <DivMusicCard
                            resultType={type}
                            key={d._id}
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
                                <ImgCardMusic 
                                    src={d.img.url} 
                                    onClick={() => navigate(`/${type}/${d._id}`)}
                                />
                            </DivImageMusic>

                            <DivInfoMusic>
                                <PTitle>{d.name}</PTitle>
                                <DivInfoMusicBottom>
                                    <PDescription>{user.username}</PDescription>
                                    {type === "track" && <BtnAddToFavTracks trackId={d._id} />}
                                    {type === "track" && <BtnModalTrackOptions trackId={d._id} />}
                                </DivInfoMusicBottom>
                            </DivInfoMusic>

                        </DivMusicCard>
                    )
                )}
            </DivSliderBody>
        </>
    )
}

export default memo(ProfileSlider)
