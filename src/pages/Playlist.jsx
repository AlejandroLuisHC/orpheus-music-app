import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner";
import { HrStyle } from "../components/style/generalStyle"
import { MainStyle } from "../components/style/homeStyle"
import Error from "./Error";
import { useEffect, useState } from "react";
import {
    BackgroundDiv,
    DivImgContain,
    DivimgPadding,
    DivTitles,
    DivTracks,
    H1Style,
    H2Style,
    ImgListPlaylist,
    PDataTrack1,
    PDataTrack2,
    PDataTrack3,
    PDataTrack4,
    Pstyle
} from "../components/style/playlistStyle"
import fetchOnePlaylist from "../api/fetchOnePlaylist";


const Playlist = () => {
    const { id: playlistID } = useParams();
    const { getAccessTokenSilently } = useAuth0()

    const { data: playlist, status } = useQuery([playlistID, playlistID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOnePlaylist(playlistID, token)
    });

    // Get all artists from tracks
    const [artistArr, setArtistArr] = useState([])
    useEffect(() => {
        playlist && playlist.tracks.map(track => {
            track.ownership.map = (user =>
                !artistArr.includes(user.username) && setArtistArr(prev => prev = [...artistArr, user.username])
            )
        })
    }, [playlist, artistArr])
    const artistList = artistArr.length > 0 ? artistArr.join(", ") : "This playlist is empty"

    // Get each track duration
    const [durationTracks, setdurationTracks] = useState([])
    useEffect(() => {
        playlist && playlist.tracks.map(track => {
            const audio = document.createElement('audio')
            audio.src = track.file.url
            console.log("DURATION", audio.duration)
            setdurationTracks(prev => prev = [...durationTracks, audio.duration])
        })
    }, [durationTracks])

    let mapCounter = -1;
    console.log(durationTracks)

    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error' || playlist.status === "FALSE"
                ? <Error />
                :
                <>
                    <BackgroundDiv img={playlist.img.url}>
                        <DivImgContain>
                            <DivimgPadding>
                                <img src={playlist.img.url} alt={playlist.name} />
                            </DivimgPadding>
                            <div>
                                <H1Style>{playlist.name}</H1Style>
                                <H2Style>Artists:</H2Style>
                                <Pstyle>{artistList}</Pstyle>
                                <br />
                                <H2Style>{`Created by: ${playlist.ownership.username}`}</H2Style>
                                <Pstyle>{playlist.tracks.length} track{playlist.tracks.length === 1 ? "" : "s"}</Pstyle>
                            </div>
                        </DivImgContain>
                    </BackgroundDiv>

                    <MainStyle>
                        <DivTitles>
                            <PDataTrack1>Title</PDataTrack1>
                            <PDataTrack2>Album</PDataTrack2>
                            <PDataTrack3>Released</PDataTrack3>
                            <PDataTrack4>Time</PDataTrack4>
                        </DivTitles>
                        <HrStyle />

                        {
                            playlist.tracks.map(track => {
                                mapCounter++
                                return (
                                    <>
                                        <DivTracks>
                                            <ImgListPlaylist src={track.img.url} alt={track.name} />
                                            <PDataTrack1>{track.name}</PDataTrack1>
                                            <PDataTrack2>{track.album ?? 'single'}</PDataTrack2>
                                            <PDataTrack3>{track.createdAt.slice(0, 10)}</PDataTrack3>
                                            <PDataTrack4>{durationTracks[mapCounter]}</PDataTrack4>
                                        </DivTracks>
                                        <HrStyle />
                                    </>
                                )
                            })
                        }
                    </MainStyle>
                </>
    )
}

export default Playlist