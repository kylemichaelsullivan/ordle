import type { ChangeEvent } from 'react';

import { useOrdle } from '@/context';

import type { Letter } from '@/types';

function Word() {
	const {
		requiredLetters,
		requiredLetterPositions,
		handleRequiredLetterPositionChange,
	} = useOrdle();

	const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		const input = e.target;
		const value = input.value.toLowerCase();

		if (/^[a-z]$/.test(value)) {
			input.value = value;
			handleRequiredLetterPositionChange(index, value as Letter);
		} else {
			input.value = '';
			handleRequiredLetterPositionChange(index, '');
		}
	};

	const inputs = Array.from({ length: 5 }, (_, index) => (
		<input
			className={`flex-1 appearance-none border-b border-black text-center capitalize max-w-12 ${requiredLetterPositions[index] ? 'bg-green-400' : ''}`}
			maxLength={1}
			list='letters'
			onChange={(e) => handleInput(e, index)}
			value={requiredLetterPositions[index] || ''}
			key={index}
		/>
	));

	const datalist = (
		<datalist id='letters'>
			{requiredLetters.map((letter) => (
				<option key={letter} value={letter} />
			))}
		</datalist>
	);

	return (
		<div className='Word flex justify-center gap-1 max-w-full'>
			{inputs}
			{datalist}
		</div>
	);
}

export default Word;
