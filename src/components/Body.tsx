import Letters from '@/components/Letters';
import Word from '@/components/Word';
import Results from '@/components/Results';

function Body() {
	return (
		<main className='Body mx-auto flex w-full max-w-screen-xl flex-auto flex-col gap-4 px-4 pb-2 pt-4'>
			<Letters />
			<Word />
			<Results />
		</main>
	);
}

export default Body;
