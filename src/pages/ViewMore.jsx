import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchKey } from "../api"
import FilterButtons from "../components/view_more/FilterButtons"
import FilterElements from "../components/view_more/FilterElements"
import { DivFilterContainer, H2StyleViewMore, DivElementsViewMore, DivViewMore } from "../components/style/viewMoreStyle"
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import { useCallback } from "react"

const ViewMore = () => {
    const { viewMore } = useParams()
    const [filter, setFilter] = useState(false)
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    const { data: originalData, status } = useQuery([viewMore, viewMore], () => fetchKey(viewMore, token))
    const [data, setData] = useState()
    useCallback(() => {
        setData(prev => prev = { ...originalData })
    }, [originalData])
    
    return (
        status === "loading"
            ? <LogoSpinner />
            : status === "error"
                ? <Error />
                :
                <DivViewMore>
                    <H2StyleViewMore>All {viewMore}</H2StyleViewMore>
                    <DivFilterContainer>
                        <FilterButtons
                            param={viewMore}
                            setFilter={setFilter}
                            filter={filter}
                        />
                    </DivFilterContainer>

                    <DivElementsViewMore>
                        <FilterElements
                            filter={filter}
                            data={data}
                            viewMore={viewMore}
                        />
                    </DivElementsViewMore>
                </DivViewMore>

    )
}

export default ViewMore



