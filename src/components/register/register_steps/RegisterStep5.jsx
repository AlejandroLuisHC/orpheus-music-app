import { useQuery } from '@tanstack/react-query';
import { ButtonPrimaryStyle, ButtonSecondaryStyle } from '../../style/generalStyle';
import { DivFlexGenres, DivGenreCircle, DivSelectedGenreCircle } from '../../style/registerStyle';

const RegisterStep5 = ({ setFormSteps, selectedGenres, setSelectedGenres }) => {
    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    const isGenreSelected = (id) => (
        selectedGenres?.find((genreId) => genreId === id)
    );

    const addToSelectedGenres = (id) => {
        !isGenreSelected(id) && setSelectedGenres([...selectedGenres, id]);
    };

    const removeFromSelectedGenres = (id) => {
        console.log('remove', id)
        //TODO: fix this function
        // setSelectedGenres([...selectedGenres].filter((genre) => genre === id))
    };

    return (
        <>
            <legend>Almost there...</legend>

            <p>Select at least one genre</p>
            <DivFlexGenres>
                {genres?.map((genre) => {
                    return !isGenreSelected(genre.id) ? (
                        <DivGenreCircle
                            key={genre.id}
                            onClick={() => addToSelectedGenres(genre.id)}
                        >
                            <p>{genre.name}</p>
                        </DivGenreCircle>
                    ) : (
                        <DivSelectedGenreCircle
                            key={genre.id}
                            onClick={() => removeFromSelectedGenres(genre.id)}
                        >
                            <p>{genre.name}</p>
                        </DivSelectedGenreCircle>
                    );
                })}
            </DivFlexGenres>

            <ButtonPrimaryStyle type="submit" disabled={selectedGenres.length < 1}>I'm ready!</ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => setFormSteps(prev => prev = { fourthStep: true })}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep5