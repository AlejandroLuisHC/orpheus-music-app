import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { memo } from "react";
import { fetchKey } from '../api';
import { DivDataList, DivHeroTitle, DivTitlesList, ImgDataList1, PDataList2, PDataList3, PDataList4, PTitleList0, PTitleList1, PTitleList2, PTitleList3 } from "../components/style/pagesStyle";
import { HrDivStyle } from "../components/style/playlistStyle";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const EventsList = () => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery(['events'], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey('events', token)
    });
    const navigate = useNavigate();

    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error' || data.status === "FALSE"
                ? <Error />
                :
                <>
                    <DivHeroTitle>
                        <h1>EVENTS</h1>
                    </DivHeroTitle>
                    <DivTitlesList>
                        <PTitleList0></PTitleList0>
                        <PTitleList1>Name</PTitleList1>
                        <PTitleList2>Location</PTitleList2>
                        <PTitleList3>Price</PTitleList3>
                    </DivTitlesList>
                    <HrDivStyle />
                    {data.map((event) => {
                        return (
                            <div key={event._id}>
                                <DivDataList
                                    onClick={() => navigate(`/event/${event._id}`)}
                                >
                                    <ImgDataList1 src={event.img.url} alt={event.name} />
                                    <PDataList2>{event.name}</PDataList2>
                                    <PDataList3>{event.location}<br />{event.date.slice(0, 10)}</PDataList3>
                                    <PDataList4>{event.price} €</PDataList4>
                                </DivDataList>
                                <HrDivStyle />
                            </div>

                        )
                    })}
                </>
    )
}

export default memo(EventsList)