import { useOrdle } from '@/context';
import WordInputs from './WordInputs';
import LetterList from './LetterList';

function Word() {
	const {
		requiredLetters,
		requiredLetterPositions,
		handleRequiredLetterPositionChange,
	} = useOrdle();

	return (
		<div className='Word flex max-w-full justify-center gap-1'>
			<WordInputs
				requiredLetterPositions={requiredLetterPositions}
				handleRequiredLetterPositionChange={handleRequiredLetterPositionChange}
			/>
			<LetterList letters={requiredLetters} />
		</div>
	);
}

export default Word;
