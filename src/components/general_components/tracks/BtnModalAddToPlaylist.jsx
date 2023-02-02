import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKey, fetchOneUser } from '../../../api'
import { UPDATE } from '../../../redux/features/user_data/userSlice'
import { BtnSelectOption, ButtonPrimaryStyle, DivModalOptions, DivOptionsIcon } from '../../style/generalStyle'
import { DivModalClose, DivModalCloseTracks } from '../../style/profileStyle'

const BtnModalAddToPlaylist = ({ trackId }) => {
    const dispatch = useDispatch()

    const { getAccessTokenSilently } = useAuth0()

    const userId = useSelector((state) => state.userData.user._id)
    const userPlaylists = useSelector((state) => state.userData.user.playlists)

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    const { data: playlists, status: playlistsStatus } = useQuery(["playlists", "playlists"], async () => {
        const token = await getAccessTokenSilently()
        fetchKey("playlists", token)
    });

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

            const token = await getAccessTokenSilently()
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

    const addTrackToPlaylist = async (playlistId) => {
        await fetchAddTrackToPlaylist(playlistId)
        const token = await getAccessTokenSilently()
        const updatedUser = await fetchOneUser(userId, token)
        dispatch(UPDATE(updatedUser))
        close()
    }

    return (
        <>
            <BtnSelectOption onClick={open}>Add to playlist</BtnSelectOption>

            <Modal>
                <div>
                <DivModalCloseTracks>
                    <IoIosCloseCircleOutline onClick={close} />
                </DivModalCloseTracks>
                <DivModalOptions>
                    <ButtonPrimaryStyle>Create playlist</ButtonPrimaryStyle>
                    {userPlaylists.map(playlist => (
                        <BtnSelectOption key={playlist._id} onClick={() => addTrackToPlaylist(playlist._id)}>{playlist.name}</BtnSelectOption>
                    ))}
                </DivModalOptions>
                </div>
            </Modal>
        </>
    )
}

export default BtnModalAddToPlaylist