import React from 'react'
import { H2Style, H3Style, LinkAside, LinkPrimaryStyle } from '../style/generalStyle'
import { DivEventCard, DivSilderHeader, DivSliderBody, DivUserCard, PDescription, PTitle } from '../style/homeStyle'
import { Pstyle } from '../style/playlistStyle'
import { DivEmptyProfile } from '../style/profileStyle'

const UserInfoEmpty = ({ dataKey }) => {
    const { type, name } = dataKey
    return (
        <>
            <DivSilderHeader>
                <H2Style onClick={() => navigate(`/profile/${type}`)}>{name}</H2Style>       
            </DivSilderHeader>

            <DivEmptyProfile>
                <PTitle>You don't save any {name} already</PTitle>
                <br></br>
                <LinkPrimaryStyle to='/'>Go and explore <H3Style>Orpheus!</H3Style></LinkPrimaryStyle>
            </DivEmptyProfile>
        </>
    )
}

export default UserInfoEmpty