import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { fetchKey } from '../../api'
import { DivModalClose, DivModalOptions, DivModalWork } from '../style/profileStyle'

const BtnAddToPlaylist = ({ userPlaylists, trackId }) => {
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    const { data: playlists, status: playlistsStatus } = useQuery(["playlists", "playlists"], () => fetchKey("playlists", token));

    const fetchAddTrackToPlaylist = async (playlistId) => {
        try {
            const playlistTracks = playlists.find(playlist => playlist._id === playlistId).tracks            
            const isAlreadyInPlaylist = playlistTracks.find(track => track._id === trackId)

            if (isAlreadyInPlaylist) {
                console.log(`Track ${trackId} is already in this playlist`)
                return
            }

            const formData = new FormData()
            formData.append("tracks", trackId)
            playlistTracks.map(track => (
                formData.append("tracks", track._id)
            ))
            
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/playlists/${playlistId}`, {
                method: 'PATCH',
                body: formData,
                headers: { Authorization: `Bearer ${token}` },
            })
            return await res.json()

        } catch (error) {
            console.log(error.message)
            console.warn(`An error occurred when updating the playlist ${playlistId}`);
        }
    }

    return (
        <>
            <button onClick={open}>Add to playlist</button>

            <Modal>
                <DivModalWork>
                    <DivModalOptions>
                        <button>Create playlist</button>

                        <select onChange={e => fetchAddTrackToPlaylist(e.target.value)}>
                            {userPlaylists.map(playlist => (
                                <option value={playlist._id} key={playlist._id}>{playlist.name}</option>                              
                            ))}
                        </select>
                    </DivModalOptions>
                        
                    <DivModalClose>
                        <IoIosCloseCircleOutline onClick={close} />
                    </DivModalClose>
                </DivModalWork>
            </Modal>
        </>
    )
}

export default BtnAddToPlaylist