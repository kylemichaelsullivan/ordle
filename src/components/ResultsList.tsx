import Result from './Result';

interface ResultsListProps {
	words: string[];
}

function ResultsList({ words }: ResultsListProps) {
	return (
		<>
			{words.map((word, index) => (
				<Result key={index} word={word} index={index} />
			))}
		</>
	);
}

export default ResultsList;
