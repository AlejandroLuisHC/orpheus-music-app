import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchDeleteUser } from '../../api'
import { LOG_OUT } from '../../redux/features/user_data/userSlice'
import { ButtonSecondaryStyle } from '../style/generalStyle'
import { DivModalClose, DivModalWork } from '../style/profileStyle'

const DeleteUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { getAccessTokenSilently, logout } = useAuth0()
    const token = getAccessTokenSilently()
    const userDataStore = useSelector(state => state.userData.user);

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    const deleteUser = () => {
        fetchDeleteUser(userDataStore._id, token)
        logout()
        dispatch(LOG_OUT())
        navigate('/')

    }
    return (
        <>
            <ButtonSecondaryStyle onClick={open}>DELETE USER</ButtonSecondaryStyle>
            <Modal>
                <DivModalWork>
                    <h1>Are you sure you want to delete your user from database?</h1>
                    <ButtonSecondaryStyle onClick={() => deleteUser()}>Yes, I'm sure</ButtonSecondaryStyle>
                </DivModalWork>
                <DivModalClose>
                    <IoIosCloseCircleOutline onClick={close} />
                </DivModalClose>
            </Modal>
        </>
    )
}

export default DeleteUser