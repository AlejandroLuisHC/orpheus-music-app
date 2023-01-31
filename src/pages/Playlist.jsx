import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { memo, useEffect, useState } from "react";
import { IoMdArrowDropright } from 'react-icons/io';
import { useOutletContext, useParams } from "react-router-dom";
import fetchOnePlaylist from "../api/fetchOnePlaylist";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner";
import { MainStyle } from "../components/style/homeStyle";
import {
    BackgroundDiv,
    DivImgContain,
    DivimgPadding,
    DivPlayListen,
    DivTitles,
    DivTracks,
    H1Style,
    H2Style,
    HrDivStyle,
    ImgListPlaylist,
    PDataTrack1,
    PDataTrack2,
    PDataTrack3,
    PDataTrack4,
    Pstyle
} from "../components/style/playlistStyle";
import Error from "./Error";


const Playlist = () => {
    const [setPlayer] = useOutletContext();

    const { id: playlistID } = useParams();
    const { getAccessTokenSilently } = useAuth0()

    const { data: playlist, status } = useQuery([playlistID, playlistID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOnePlaylist(playlistID, token)
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let tempUsers = [];
        playlist?.tracks.map(track => {
            !tempUsers.includes(track.ownership.username)
                && tempUsers.push(track.ownership.username)
        })
        if (tempUsers.length > 5) {
            tempUsers.slice(0, 5)
            tempUsers.push("and more...")
        }
        setUsers(prev => prev = [...tempUsers]);
    }, [playlist])

    const [durations, setDurations] = useState([]);

    useEffect(() => {
        const fetchDurations = async () => {
            const promises = playlist?.tracks?.map(track => duration(track.file.url));
            const resolvedDurations = await Promise.all(promises);
            setDurations(prev => prev = resolvedDurations);
        };

        fetchDurations();
    }, [playlist]);

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
                                <H2Style>Users featured:</H2Style>
                                <Pstyle>{users.join(", ")}</Pstyle>
                                <br />
                                <H2Style>{`Created by: ${playlist.ownership.username}`}</H2Style>
                                <Pstyle>{playlist.tracks.length} track{playlist.tracks.length === 1 ? "" : "s"}</Pstyle>
                            </div>
                            <DivPlayListen>
                                <IoMdArrowDropright size={40} />
                            </DivPlayListen>
                        </DivImgContain>
                    </BackgroundDiv>

                    <MainStyle>
                        <DivTitles>
                            <PDataTrack1>Title</PDataTrack1>
                            <PDataTrack2>Album</PDataTrack2>
                            <PDataTrack3>Released</PDataTrack3>
                            <PDataTrack4>Duration</PDataTrack4>
                        </DivTitles>
                        <HrDivStyle />
                        {playlist.tracks.map((track, index) => {
                            return (
                                <div key={track._id}>
                                    <DivTracks onClick={() => {
                                        console.log("TRACK: ", track);
                                        setPlayer(
                                            prev => prev = {
                                                playerOn: true,
                                                audio: track.file.url,
                                                name: track.name,
                                                user: track.ownership.name,
                                            }
                                        )
                                    }}>
                                        <ImgListPlaylist src={track.img.url} alt={track.name} />
                                        <PDataTrack1>{track.name}</PDataTrack1>
                                        <PDataTrack2>{track.album ?? 'single'}</PDataTrack2>
                                        <PDataTrack3>{moment(track.createdAt).format("DD MMM YYYY")}</PDataTrack3>
                                        <PDataTrack4>{durations[index]}</PDataTrack4>
                                    </DivTracks>
                                    <HrDivStyle />
                                </div>
                            )
                        })}
                    </MainStyle>
                </>
    )
}

export default memo(Playlist)