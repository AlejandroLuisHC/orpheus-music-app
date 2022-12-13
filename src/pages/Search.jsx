import { useSearchParams } from 'react-router-dom';
import ResultCarrousel from '../components/search/ResultCarrousel';
import { FormStyle, InputStyle } from '../components/style/generalStyle';
import {
  DivSearchResults,
  MainFlexContainer,
} from '../components/style/searchStyle';

const Search = () => {

  const [searchParmams, setSearchParams] = useSearchParams();
  const search = searchParmams.get('q') || '';

  return (
    <MainFlexContainer>
      <FormStyle>
        <InputStyle
          type="search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
          value={search}
          placeholder="Users, songs, playlists, events, genres or moods"
        ></InputStyle>
      </FormStyle>

      <DivSearchResults>
        <ResultCarrousel apiKey={'tracks'} search={search} />
        <ResultCarrousel apiKey={'playlists'} search={search} />
        <ResultCarrousel apiKey={'albums'} search={search} />
        <ResultCarrousel apiKey={'events'} search={search} />
        <ResultCarrousel apiKey={'users'} search={search} />
      </DivSearchResults>
    </MainFlexContainer>
  );
};

export default Search;
