import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { memo, useEffect, useState } from "react";
import { IoMdArrowDropright } from 'react-icons/io';
import { useOutletContext, useParams } from "react-router-dom";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner";

import {
    AllBackground,
    DivImgContain,
    DivimgPadding,
    DivPlayListen,
    H1Style,
    H2Style,
    HrDivStyle,
    ImgListPlaylist,
    PDataTrack1,
    PDataTrack2,
    PDataTrack3,
    PDataTrack4,
    PStyleOwnership,
    DivInfoTrack,
    DivTitlesTracks
} from "../components/style/playlistStyle"
import { fetchOneTrack } from "../api";
import moment from "moment";
import BtnModalTrackOptions from "../components/general_components/tracks/BtnModalTrackOptions";

const Track = () => {

    const [setPlayer] = useOutletContext();
    const { id: trackID } = useParams();
    const { getAccessTokenSilently } = useAuth0()

    const { data: track, status } = useQuery([trackID, trackID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOneTrack(trackID, token)
    });

    const [durations, setDurations] = useState("");

    useEffect(() => {
        const fetchDurations = async () => {
            const promises = await duration(track?.data?.file.url);
            const resolvedDurations = await Promise.all(promises);
            setDurations(prev => prev = resolvedDurations);
        };
        fetchDurations();
    }, [track]);

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
            : status === 'error' || track.data.status === "FALSE"
                ? <Error />
                :
                <AllBackground img={track.data.img.url}>
                    <DivImgContain>
                        <DivimgPadding>

                            <img src={track.data.img.url} alt={track.data.img.url} />
                        </DivimgPadding>
                        <div>
                            <H1Style>{track.data.name}</H1Style>
                            <PStyleOwnership>{track.data.ownership.username}</PStyleOwnership>
                            <H2Style><span>Released: </span>{moment(track.data.createdAt).format("DD MMM YYYY")}</H2Style>
                            <br />

                        </div>
                        <DivPlayListen onClick={() => {
                            setPlayer(
                                prev => prev = {
                                    playerOn: true,
                                    audio: track.data.file.url,
                                    name: track.data.name.slice(0, 20) + "...",
                                    user: track.data.ownership.username,
                                }
                            )
                        }}>
                            <IoMdArrowDropright size={40} />
                        </DivPlayListen>
                    </DivImgContain>
                    <DivTitlesTracks>
                        <PDataTrack1>Title</PDataTrack1>
                        <PDataTrack2>Album</PDataTrack2>
                        <PDataTrack3>Released</PDataTrack3>
                        <PDataTrack4>Duration</PDataTrack4>
                    </DivTitlesTracks>
                    <DivInfoTrack>
                        <ImgListPlaylist src={track.data.img.url} alt={track.data.name} />
                        <PDataTrack1>{track.data.name}</PDataTrack1>
                        <PDataTrack2>{track.data.album ?? 'single'}</PDataTrack2>
                        <PDataTrack3>{moment(track.data.createdAt).format("DD MMM YYYY")}</PDataTrack3>
                        <PDataTrack4>{durations}</PDataTrack4>
                        <BtnModalTrackOptions trackId={track.data._id} />
                    </DivInfoTrack>
                </AllBackground>
    )
}

export default memo(Track)