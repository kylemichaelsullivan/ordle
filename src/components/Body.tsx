import Letters from "@/components/Letters";
import Word from "@/components/Word";
import Results from "@/components/Results";

function Body() {
	return (
		<main className="Body flex w-full flex-auto flex-col gap-4 max-w-screen-xl px-4 pt-4 pb-2 mx-auto">
			<Letters />
			<Word />
			<Results />
		</main>
	);
}

export default Body;
