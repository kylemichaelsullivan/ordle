import Letters from "@/components/Letters";
import Word from "@/components/Word";
import Results from "@/components/Results";

function Body() {
	return (
		<main className="Body flex w-full flex-auto flex-col gap-4 px-4 py-2">
			<Letters />
			<Word />
			<Results />
		</main>
	);
}

export default Body;
