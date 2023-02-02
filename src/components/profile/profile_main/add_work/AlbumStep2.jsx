import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonPrimaryStyle } from '../../../style/generalStyle'
import { Pstyle } from '../../../style/playlistStyle'
import { DivModalTrack } from '../../../style/profileStyle'
import { 
    DivGenreCircle, 
    DivSelectedGenreCircle 
} from '../../../style/registerStyle'

const AlbumStep2 = ({ userTracksData, setUserTracksData }) => {

    const loggedUser = useSelector(state => state.userData.user);

    const isTrackSelected = (id) => (
        userTracksData?.find((trackId) => trackId === id)
    );
    const addToSelectedTracks = (id) => {
        !isTrackSelected(id) && setUserTracksData([...userTracksData, id]);
    };

    const removeFromSelectedTracks = (id) => {
        setUserTracksData([...userTracksData].filter(track => track !== id))
    };

    function getRandomSize() {
        return Math.random() * (100 - 85) + 85;
    }
    
    function getRandomSizeSelected() {
        return Math.random() * (125 - 110) + 110;
    }

    return (
        <DivModalTrack>
            <Pstyle>Select at least 2 tracks!</Pstyle>
            {loggedUser.tracks?.map((track) => {
                return !isTrackSelected(track._id)
                    ?
                    <DivGenreCircle
                        key={track._id}
                        size={`${getRandomSize()}px`}
                        onClick={() => addToSelectedTracks(track._id)}
                    >
                        <p>{track.name}</p>
                    </DivGenreCircle>
                    :
                    <DivSelectedGenreCircle
                        key={track._id}
                        size={`${getRandomSizeSelected()}px`}
                        onClick={() => removeFromSelectedTracks(track._id)}
                    >
                        <p>{track.name}</p>
                    </DivSelectedGenreCircle>
            })}
            <ButtonPrimaryStyle disabled={userTracksData.length < 2} type='submit'>Upload track!</ButtonPrimaryStyle>
        </DivModalTrack>
    )
}

export default AlbumStep2