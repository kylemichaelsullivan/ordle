import { useRef } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { Letter } from '@/types';
import WordInput from './WordInput';

type WordInputsProps = {
	requiredLetterPositions: string[];
	handleRequiredLetterPositionChange: (
		index: number,
		letter: Letter | '',
	) => void;
};

function WordInputs({
	requiredLetterPositions,
	handleRequiredLetterPositionChange,
}: WordInputsProps) {
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

	return (
		<div className='WordInputs flex max-w-full justify-center gap-1'>
			{Array.from({ length: 5 }, (_, index) => (
				<WordInput
					index={index}
					value={requiredLetterPositions[index] || ''}
					isRequired={!!requiredLetterPositions[index]}
					inputRef={(el) => {
						inputRefs.current[index] = el;
					}}
					onInput={handleInput}
					onKeyDown={handleKeyDown}
					key={index}
				/>
			))}
		</div>
	);
}

export default WordInputs;
