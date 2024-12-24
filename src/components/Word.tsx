import { useRef, ChangeEvent } from 'react';
import type { KeyboardEvent } from 'react';

import { useOrdle } from '@/context';

import type { Letter } from '@/types';

function Word() {
	const {
		requiredLetters,
		requiredLetterPositions,
		handleRequiredLetterPositionChange,
	} = useOrdle();

	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		const input = e.target;
		const value = input.value.toLowerCase();

		if (/^[a-z]$/.test(value)) {
			input.value = value;
			handleRequiredLetterPositionChange(index, value as Letter);
			if (index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		} else {
			input.value = '';
			handleRequiredLetterPositionChange(index, '');
			if (index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === 'Backspace' || e.key === 'Delete') {
			e.preventDefault();
			handleRequiredLetterPositionChange(index, '');
			if (index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		}
	};

	const inputs = Array.from({ length: 5 }, (_, index) => (
		<input
			ref={(el) => {
				inputRefs.current[index] = el;
			}}
			className={`appearance-none border border-black text-center capitalize w-12 h-12 ${requiredLetterPositions[index] ? 'bg-green-400' : ''}`}
			maxLength={1}
			list='letters'
			onChange={(e) => handleInput(e, index)}
			onKeyDown={(e) => handleKeyDown(e, index)}
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
