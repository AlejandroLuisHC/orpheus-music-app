import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { IoMdArrowDropright } from 'react-icons/io'
import { MainStyle } from "../components/style/homeStyle"
import Error from "./Error";
import { useEffect, useState, memo } from "react";
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
} from "../components/style/playlistStyle"
import fetchOnePlaylist from "../api/fetchOnePlaylist";


const Playlist = () => {

    const [setPlayer] = useOutletContext();

    const { id: playlistID } = useParams();
    const { getAccessTokenSilently } = useAuth0()

    const { data: playlist, status } = useQuery([playlistID, playlistID], async () => {
        const token = await getAccessTokenSilently()
        return await fetchOnePlaylist(playlistID, token)
    });

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
                                <Pstyle>List of artists</Pstyle>
                                <br />
                                <H2Style>{`Created by: ${playlist.ownership.username}`}</H2Style>
                                <Pstyle>{playlist.tracks.length} track{playlist.tracks.length === 1 ? "" : "s"}</Pstyle>
                            </div>
                            <DivPlayListen onClick={() => {

                                setPlayer(
                                    prev => prev = {
                                        playerOn: true,
                                        audio: playlist.file,
                                        name: playlist.name,
                                        user: playlist.description,
                                    }
                                )
                            }}>
                                <IoMdArrowDropright size={40} />
                            </DivPlayListen>
                        </DivImgContain>
                    </BackgroundDiv>

                    <MainStyle>
                        <DivTitles>
                            <PDataTrack1>Title</PDataTrack1>
                            <PDataTrack2>Album</PDataTrack2>
                            <PDataTrack3>Released</PDataTrack3>
                            <PDataTrack4>Time</PDataTrack4>
                        </DivTitles>
                        <HrDivStyle />

                        {
                            playlist.tracks.map(track => {
                                return (
                                    <>
                                        <DivTracks onClick={() => {

                                            setPlayer(
                                                prev => prev = {
                                                    playerOn: true,
                                                    audio: track.file.url,
                                                    name: track.name,
                                                    user: track.ownership,
                                                }
                                            )
                                        }}>
                                            <ImgListPlaylist src={track.img.url} alt={track.name} />
                                            <PDataTrack1>{track.name}</PDataTrack1>
                                            <PDataTrack2>{track.album ?? 'single'}</PDataTrack2>
                                            <PDataTrack3>{track.createdAt.slice(0, 10)}</PDataTrack3>
                                            {/* <PDataTrack4>{durationTracks[mapCounter]}</PDataTrack4> */}
                                        </DivTracks>
                                        <HrDivStyle />
                                    </>
                                )
                            })
                        }
                    </MainStyle>
                </>
    )
}

export default memo(Playlist)