import { useOrdle } from '@/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { Letter, Status } from '@/types';

type LetterButtonUpProps = {
	letter: Letter;
	status: Status;
};

function LetterButtonUp({ letter, status }: LetterButtonUpProps) {
	const { handleLettersStatusChange } = useOrdle();
	const handleClick = () => handleLettersStatusChange(letter, 1);

	const statusClass =
		status === 0 || status === 1
			? status === 0
				? 'text-gray-100'
				: 'text-green-400'
			: 'text-gray-400 hover:text-gray-700';

	const title = status === 1 ? 'Do Not Require' : 'Require';

	return (
		<button
			type='button'
			className={`LetterButtonUp ${statusClass}`}
			onClick={handleClick}
			title={`${title} ${letter.toUpperCase()}`}
		>
			<FontAwesomeIcon icon={faThumbsUp} />
		</button>
	);
}

export default LetterButtonUp;
