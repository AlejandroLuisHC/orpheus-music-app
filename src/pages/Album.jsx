import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { IoMdArrowDropright } from 'react-icons/io'
import { MainStyle } from "../components/style/homeStyle"
import Error from "./Error";
import { useState, useEffect, memo } from "react";
import {
    BackgroundDiv,
    DivImgContain,
    DivimgPadding,
    DivPlayListen,
    DivTitlesAlbum,
    DivTracksAlbum,
    H1Style,
    H2Style,
    HrDivStyle,
    ImgListPlaylist,
    PDataTrack1,
    PDataTrack2,
    Pstyle
} from "../components/style/playlistStyle"
import { fetchOneAlbum } from "../api/";
import moment from "moment";
import BtnModalTrackOptions from "../components/general_components/tracks/BtnModalTrackOptions";
import BtnAddToFavTracks from "../components/general_components/tracks/BtnAddToFavTracks";


const Album = () => {

    const [setPlayer] = useOutletContext();
    const [randomTrack, setRandomTrack] = useState(0);

    const { id: albumID } = useParams();
    const { getAccessTokenSilently } = useAuth0()

    const { data: album, status } = useQuery([albumID, albumID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOneAlbum(albumID, token)
    });
    function getRandomTrack(length) {
        const random = Math.floor(Math.random() * length);
        setRandomTrack(prev => prev = random);
    }
    useEffect(() => {
        getRandomTrack(album?.tracks?.length);
    }, [album])
    
    const [durations, setDurations] = useState([]);

    useEffect(() => {
        const fetchDurations = async () => {
            const promises = album?.tracks?.map(track => duration(track?.file.url));
            const resolvedDurations = await Promise.all(promises);
            setDurations(prev => prev = resolvedDurations);
        };

        fetchDurations();
    }, [album]);

    const getDuration = (url) => {
        return new Promise((resolve) => {
            const audioFile = document.createElement("audio");
            audioFile.src = url;
            audioFile.addEventListener("loadedmetadata", () => {
                const durationSec = audioFile.duration

                // Transform duration in minutes and seconds
                const minutes = Math.floor(durationSec / 60);
                const seconds = Math.floor(durationSec % 60);
                resolve(`${minutes}:${seconds}`);
            }, false);
        });
    }
    const duration = async (url) => {
        const duration = await getDuration(url);
        return duration;
    }


    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error' || album.status === "FALSE"
                ? <Error />
                :
                <>
                    <BackgroundDiv img={album.img.url}>
                        <DivImgContain>
                            <DivimgPadding>
                                <img src={album.img.url} alt={album.name} />
                            </DivimgPadding>
                            <div>
                                <H1Style>{album.name}</H1Style>
                                <Pstyle>{album.tracks.length} track{album.tracks.length === 1 ? "" : "s"}</Pstyle>
                                <br />
                                <H2Style><span>Ownership: </span>{album.ownership.username}</H2Style>
                                <H2Style><span>Released: </span>{moment(album.createdAt).format("DD MMM YYYY")}</H2Style>
                            </div>
                            <DivPlayListen
                                onClick={() => {
                                    setPlayer(
                                        prev => prev = {
                                            playerOn: true,
                                            audio: album.tracks[randomTrack].file.url,
                                            name: album.tracks[randomTrack].name.slice(0, 20) + "...",
                                            user: album.tracks[randomTrack].ownership.username,
                                        }
                                    )
                                    getRandomTrack(album.tracks.length);
                                }}
                            >
                                <IoMdArrowDropright size={40} />
                            </DivPlayListen>
                        </DivImgContain>
                        <MainStyle>
                            <DivTitlesAlbum>
                                <PDataTrack1>Title</PDataTrack1>
                                <PDataTrack2>Duration</PDataTrack2>
                            </DivTitlesAlbum>
                            <HrDivStyle />

                            {
                                album.tracks.map((track, index) => {
                                    return (
                                        <div key={track._id}>
                                            <DivTracksAlbum onClick={() => {
                                                setPlayer(
                                                    prev => prev = {
                                                        playerOn: true,
                                                        audio: track.file.url,
                                                        name: track.name.slice(0, 20) + "...",
                                                        user: track.ownership.username,
                                                    }
                                                )
                                            }}>
                                                <ImgListPlaylist src={track.img.url} alt={track.name} />
                                                <PDataTrack1>{track.name}</PDataTrack1>
                                                <PDataTrack2>{durations[index]}</PDataTrack2>
                                                <BtnAddToFavTracks trackId={track._id} />
                                                <BtnModalTrackOptions trackId={track._id} />
                                            </DivTracksAlbum>
                                            <HrDivStyle />
                                        </div>
                                    )
                                })
                            }
                        </MainStyle>
                    </BackgroundDiv>


                </>
    )
}

export default memo(Album)