import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { ButtonSecondaryStyle } from '../style/generalStyle'
import { DivModalClose, DivModalWork } from '../style/profileStyle';

const ChangePassword = () => {
    const userDataStore = useSelector(state => state.userData.user);

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    return (
        <>
            <ButtonSecondaryStyle onClick={open}>CHANGE PASSWORD</ButtonSecondaryStyle>
            <Modal>
                <DivModalWork>
                    <button></button>
                    <h1>Check your email inbox</h1>
                    <p>email sended to `${userDataStore.email}`</p>
                </DivModalWork>
                <DivModalClose>
                    <IoIosCloseCircleOutline onClick={close} />
                </DivModalClose>
            </Modal>
        </>
    )
}

export default ChangePassword