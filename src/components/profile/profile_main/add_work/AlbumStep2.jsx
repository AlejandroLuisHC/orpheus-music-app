import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ButtonPrimaryStyle } from '../../../style/generalStyle'
import { 
    DivEachTrackAlbumSelectedStyle, 
    DivEachTrackAlbumStyle, 
    DivModalTrack, 
    DivMyTracksAlbumStyle 
} from '../../../style/profileStyle'

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
            <p>Select at least 2 tracks!</p>
            <br />
            <DivMyTracksAlbumStyle>   
                {loggedUser.tracks?.map((track) => {
                    return !isTrackSelected(track._id)
                        ?
                        <DivEachTrackAlbumStyle
                            key={track._id}
                            size={`${getRandomSize()}px`}
                            onClick={() => addToSelectedTracks(track._id)}
                        >
                            <p>{track.name}</p>
                        </DivEachTrackAlbumStyle>
                        :
                        <DivEachTrackAlbumSelectedStyle
                            key={track._id}
                            size={`${getRandomSizeSelected()}px`}
                            onClick={() => removeFromSelectedTracks(track._id)}
                        >
                            <p>{track.name}</p>
                        </DivEachTrackAlbumSelectedStyle>
                })}
            </DivMyTracksAlbumStyle>
            <ButtonPrimaryStyle disabled={userTracksData.length < 2} type='submit'>Upload track!</ButtonPrimaryStyle>
        </DivModalTrack>
    )
}

export default memo(AlbumStep2)