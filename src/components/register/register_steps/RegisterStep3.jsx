import { useNavigate } from 'react-router-dom';
import {
    ButtonPrimaryStyle,
    ButtonSecondaryStyle
} from '../../style/generalStyle';
import {
    DivFlexGenres,
    DivGenreCircle,
    DivSelectedGenreCircle
} from '../../style/registerStyle';

const RegisterStep3 = ({ setFormSteps, selectedGenres, setSelectedGenres, setAvatar, genres }) => {
    const isGenreSelected = (id) => (
        selectedGenres?.find((genreId) => genreId === id)
    );

    const addToSelectedGenres = (id) => {
        !isGenreSelected(id) && setSelectedGenres([...selectedGenres, id]);
    };

    const removeFromSelectedGenres = (id) => {
        setSelectedGenres([...selectedGenres].filter((genre) => genre !== id))
    };

    function getRandomSize() {
        return Math.random() * (100 - 85) + 85;
    }
    function getRandomSizeSelected() {
        return Math.random() * (125 - 110) + 110;
    }
    const navigate = useNavigate()

    return (
        <>
            <legend>Almost there...</legend>

            <p>Select at least one genre</p>
            <DivFlexGenres>
                {genres?.map((genre) => {
                    return !isGenreSelected(genre._id)
                        ?
                        <DivGenreCircle
                            key={genre._id}
                            size={`${getRandomSize()}px`}
                            onClick={() => addToSelectedGenres(genre._id)}
                        >
                            <p>{genre.name}</p>
                        </DivGenreCircle>
                        :
                        <DivSelectedGenreCircle
                            key={genre._id}
                            size={`${getRandomSizeSelected()}px`}
                            onClick={() => removeFromSelectedGenres(genre._id)}
                        >
                            <p>{genre.name}</p>
                        </DivSelectedGenreCircle>
                })}
            </DivFlexGenres>

            <ButtonPrimaryStyle type="submit" disabled={selectedGenres.length < 1}>I'm ready!</ButtonPrimaryStyle>
            <ButtonSecondaryStyle type="button" onClick={() => { setFormSteps(prev => prev = { step: '2', secondStep: true }); setAvatar(prev => prev = '') }}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep3