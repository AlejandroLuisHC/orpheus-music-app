import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import { ButtonPrimaryStyle } from '../../../style/generalStyle'
import { DivModalTrack } from '../../../style/profileStyle'

const AddTrackToAlbum = () => {

    const { data: genres } = useQuery(
        ['tracks', 'tracks'],
        () => fetchKey('genres')
    );

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    
    
  return (
    <>
        <ButtonPrimaryStyle onClick={open}>Add songs</ButtonPrimaryStyle>
            <Modal>
            <DivModalTrack>

                <ButtonPrimaryStyle type='submit'>Upload track!</ButtonPrimaryStyle>
            </DivModalTrack>
            </Modal>
    </>
  )
}

export default AddTrackToAlbum