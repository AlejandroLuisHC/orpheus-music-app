import React, { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { ButtonPrimaryStyle, ButtonSecondaryStyle, PErrorStyle, PMenuStyle } from '../style/generalStyle'
import { DivModalClose, DivModalWork } from '../style/profileStyle';
import fetchChangePassword from '../../api/fetchChangePassword';
import {Pstyle} from '../style/playlistStyle'
const ChangePassword = () => {
    const userDataStore = useSelector(state => state.userData.user);
    const [sended, setSended] = useState(false)
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    const sendEmail = () => {
        fetchChangePassword(userDataStore.email)
        setSended(true)

    }
    return (
        <>
            <ButtonSecondaryStyle onClick={open}>CHANGE PASSWORD</ButtonSecondaryStyle>
            <Modal>
                <DivModalWork>

                    <h1>we have to verify that it is you</h1>
                    <ButtonPrimaryStyle onClick={() => sendEmail()}>Send Email</ButtonPrimaryStyle>
                    {sended ? <Pstyle>Email sended to {userDataStore.email}</Pstyle> : ''}
                </DivModalWork>
                <DivModalClose>
                    <IoIosCloseCircleOutline onClick={close} />
                </DivModalClose>
            </Modal>
        </>
    )
}

export default ChangePassword