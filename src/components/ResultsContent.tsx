import { useOrdle } from '@/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function ResultsContent() {
	const { filteredWords, nonNullLettersCount } = useOrdle();

	return (
		<div className='Results grid list-none gap-1 gap-y-4 border p-4 shadow-xl'>
			{nonNullLettersCount < 2 ? (
				<p className='col-span-full text-gray-400 text-center'>
					Select 2 or More <FontAwesomeIcon icon={faThumbsUp} /> or{' '}
					<FontAwesomeIcon icon={faThumbsDown} />
				</p>
			) : filteredWords.length ? (
				filteredWords.map((word, index) => <li key={index}>{word}</li>)
			) : (
				<p className='col-span-full text-center'>No words found</p>
			)}
		</div>
	);
}

export default ResultsContent;
