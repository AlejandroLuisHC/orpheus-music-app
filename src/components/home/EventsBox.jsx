import { useQuery } from "@tanstack/react-query"
import { fetchKey } from '../../api'
import { DivImgRectangleL, H2Style} from '../style/generalStyle'
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader'
import { memo } from "react"
import { DivCardEvent, DivDisplayDesktop, DivElementTitles, DivFlex, DivSliderEvents, H6StyleHero, LinkHome, PStyleHero } from "../style/homeStyle"

const EventsBox = () => {
    const { data, status: eventsStatus } = useQuery(['events', 'events'], () => fetchKey("events"))

    return (
        eventsStatus === "loading"
            ? <HomeSlidersLoader />
            : eventsStatus === "error"
                ? <p>Error</p>
                :
                <DivDisplayDesktop>
                    <DivElementTitles>
                        <H2Style> Related Events </H2Style>
                        <LinkHome>View more</LinkHome>
                    </DivElementTitles>

                    <DivSliderEvents>
                        {data?.map((event) =>
                            <DivCardEvent key={event.id}> 
                                <DivImgRectangleL src={event.uri}/>
                                <DivFlex>
                                    <div>
                                        <H6StyleHero>{event.name}</H6StyleHero>
                                        <PStyleHero>{event.location} - {event.date}</PStyleHero>
                                    </div>
                                    <H2Style>{event.price}€</H2Style>
                                </DivFlex>
                            </DivCardEvent>
                        )}
                    </DivSliderEvents>
                </DivDisplayDesktop>
    )
}
export default memo(EventsBox)