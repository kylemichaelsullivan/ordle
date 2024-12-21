import { useOrdle } from "@/context";

function ResultsContent() {
	const { filteredWords, nonNullLettersCount } = useOrdle();

	return (
		<div className="Results grid list-none gap-1 gap-y-4 border p-4 shadow-xl">
			{nonNullLettersCount < 3 ? (
				<p className="col-span-full text-center">
					Select 3+ letters to require or exclude
				</p>
			) : filteredWords.length ? (
				filteredWords.map((word, index) => <li key={index}>{word}</li>)
			) : (
				<p className="col-span-full text-center">No words found</p>
			)}
		</div>
	);
}

export default ResultsContent;
