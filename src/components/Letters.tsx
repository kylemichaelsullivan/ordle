import Letter from "@/components/Letter";
import { letters } from "@/types";

function Letters() {
	return (
		<div className="Letters grid gap-1 gap-y-4">
			{letters.map((letter) => (
				<Letter letter={letter} key={letter} />
			))}
		</div>
	);
}

export default Letters;
