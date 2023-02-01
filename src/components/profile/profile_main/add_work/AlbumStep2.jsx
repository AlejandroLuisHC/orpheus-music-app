import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonPrimaryStyle } from '../../../style/generalStyle'
import { DivModalTrack } from '../../../style/profileStyle'
import { DivGenreCircle, DivSelectedGenreCircle } from '../../../style/registerStyle'

const AlbumStep2 = ({ tracks, setTracks }) => {

    const loggedUser = useSelector(state => state.userData.user);

    const isTrackSelected = (id) => (
        tracks?.find((trackId) => trackId === id)
    );
    const addToSelectedTracks = (id) => {
        !isTrackSelected(id) && setTracks([...tracks, id]);
    };
    const removeFromSelectedTracks = (id) => {
        setTracks([...tracks].filter((track) => track !== id))
    };

    function getRandomSize() {
        return Math.random() * (100 - 85) + 85;
    }
    function getRandomSizeSelected() {
        return Math.random() * (125 - 110) + 110;
    }

    return (
        <DivModalTrack>
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
            <ButtonPrimaryStyle type='submit'>Upload track!</ButtonPrimaryStyle>
        </DivModalTrack>
    )
}

export default AlbumStep2