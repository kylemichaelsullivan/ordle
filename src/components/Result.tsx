interface ResultProps {
	word: string;
	index: number;
}

function Result({ word, index }: ResultProps) {
	return (
		<li className='Result' key={index}>
			{word}
		</li>
	);
}

export default Result;
