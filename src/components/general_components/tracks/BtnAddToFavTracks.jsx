import { useAuth0 } from '@auth0/auth0-react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneUser } from '../../../api'
import { UPDATE } from '../../../redux/features/user_data/userSlice'
import { DivOptionsIcon } from '../../style/generalStyle'

const BtnAddToFavTracks = ({ trackId }) => {
    const dispatch = useDispatch()

    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    
    const userFavTracks = useSelector((state) => state.userData.user.favTracks)
    console.log("userFavTracks", userFavTracks)
    const userId = useSelector((state) => state.userData.user._id)

    const isInFavTracks = (id) => (
        userFavTracks?.find(track => track._id === id)
    )

    const fetchAddTrackToFav = async () => {
        try {
            const isAlreadyInPlaylist = userFavTracks.find(track => track._id === trackId)

            if (isAlreadyInPlaylist) {
                console.log(`Track ${trackId} is already in fav tracks`)
                return
            }

            const formData = new FormData()
            formData.append("favTracks", trackId)
            userFavTracks.map(track => (
                formData.append("favTracks", track._id)
            ))

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/${userId}`, {
                method: 'PATCH',
                body: formData,
                headers: { Authorization: `Bearer ${token}` },
            })
            return await res.json()

        } catch (error) {
            console.log(error.message)
            console.warn(`An error occurred when updating fav tracks`);
        }
    }

    const fetchRemoveTrackFromFav = async (trackId) => {
        try {
            const isAlreadyInPlaylist = userFavTracks.find(track => track._id === trackId)

            if (!isAlreadyInPlaylist) {
                console.log(`Track ${trackId} is not in fav tracks`)
                return
            }

            const updatedFavTracks = userFavTracks.filter((track) => track._id !== trackId)
            console.log("updatedFavTracks", updatedFavTracks)

            const formData = new FormData()
            updatedFavTracks.map(track => (
                formData.append("favTracks", track._id)
            ))

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/${userId}`, {
                method: 'PATCH',
                body: formData,
                headers: { Authorization: `Bearer ${token}` },
            })
            return await res.json()

        } catch (error) {
            console.log(error.message)
            console.warn(`An error occurred when updating fav tracks`);
        }
    }

    const addTrackToFav = async () => {
        await fetchAddTrackToFav()
        const updatedUser = await fetchOneUser(userId, token)
        dispatch(UPDATE(updatedUser))
    }

    const removeTrackFromFav = async (trackId) => {
        await fetchRemoveTrackFromFav(trackId)
        const updatedUser = await fetchOneUser(userId, token)
        dispatch(UPDATE(updatedUser))
    }

    return (
        !isInFavTracks(trackId)
            ? <DivOptionsIcon onClick={() => addTrackToFav()}><IoIosHeartEmpty size={20} /></DivOptionsIcon> 
            : <DivOptionsIcon onClick={() => removeTrackFromFav(trackId)}><IoIosHeart size={20} /></DivOptionsIcon>
    )
}

export default BtnAddToFavTracks