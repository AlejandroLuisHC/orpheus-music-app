import { useSearchParams } from 'react-router-dom';
import HomeSlider from '../components/home/HomeSlider';
import SearchSlider from '../components/search/SearchSlider';
import {
    FormSearchStyle,
    InputSearchStyle,
    MainFlexContainer,
} from '../components/style/searchStyle';

import { DivHomeStyle, DivSliders } from '../components/style/homeStyle';

const Search = () => {
    const [searchParmams, setSearchParams] = useSearchParams();
    const search = searchParmams.get('q') || '';

    return (
        <DivHomeStyle>
            <MainFlexContainer>
                <FormSearchStyle>
                    <InputSearchStyle
                        type="search"
                        onChange={(e) => setSearchParams({ q: e.target.value })}
                        value={search}
                        placeholder="Users, songs, playlists, events, genres or moods"
                    ></InputSearchStyle>
                </FormSearchStyle>

                {search.length <= 1
                    ? 
                    <DivSliders>
                        <HomeSlider apiKey={'events'} />
                        <HomeSlider apiKey={'playlists'} />
                        <HomeSlider apiKey={'albums'} />
                        <HomeSlider apiKey={'tracks'} />
                        <HomeSlider apiKey={'users'} />
                    </DivSliders> 
                    :
                    <DivSliders>
                        <SearchSlider apiKey={'events'} search={search} />
                        <SearchSlider apiKey={'playlists'} search={search} />
                        <SearchSlider apiKey={'albums'} search={search} />
                        <SearchSlider apiKey={'tracks'} search={search} />
                        <SearchSlider apiKey={'users'} search={search} />
                    </DivSliders>
                }
            </MainFlexContainer>
        </DivHomeStyle>
    );
};

export default Search;
