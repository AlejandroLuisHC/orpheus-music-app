import { useSearchParams } from 'react-router-dom';
import SearchSlider from '../components/search/SearchSlider';
import {
  DivSliders,
  FormSearchStyle,
  InputSearchStyle,
  MainFlexContainer,
} from '../components/style/searchStyle';

const Search = () => {
  const [searchParmams, setSearchParams] = useSearchParams();
  const search = searchParmams.get('q') || '';

  return (
    <MainFlexContainer>
      <FormSearchStyle>
        <InputSearchStyle
          type="search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
          value={search}
          placeholder="Users, songs, playlists, events, genres or moods"
        ></InputSearchStyle>
      </FormSearchStyle>

      {search.length > 2 && (
        <DivSliders>
          <SearchSlider apiKey={'events'} search={search} />
          <SearchSlider apiKey={'playlists'} search={search} />
          <SearchSlider apiKey={'albums'} search={search} />
          <SearchSlider apiKey={'tracks'} search={search} />
          <SearchSlider apiKey={'users'} search={search} />
        </DivSliders>
      )}
    </MainFlexContainer>
  );
};

export default Search;
