import { useOrdle } from '@/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { Letter, Status } from '@/types';

type LetterButtonDownProps = {
	letter: Letter;
	status: Status;
};

function LetterButtonDown({ letter, status }: LetterButtonDownProps) {
	const { handleLettersStatusChange } = useOrdle();
	const handleClick = () => handleLettersStatusChange(letter, 0);

	const statusClass =
		status === 0 || status === 1
			? status === 1
				? 'text-gray-100'
				: 'text-red-700'
			: 'text-gray-400 hover:text-gray-700';

	const title = status === 0 ? 'Do Not Omit' : 'Omit';

	return (
		<button
			type='button'
			className={statusClass}
			onClick={handleClick}
			title={`${title} ${letter.toUpperCase()}`}
		>
			<FontAwesomeIcon icon={faThumbsDown} />
		</button>
	);
}

export default LetterButtonDown;
