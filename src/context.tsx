import {
	useState,
	useEffect,
	createContext,
	useContext,
	type ReactNode,
} from 'react';

import type { Letter, Status } from '@/types';
import { allWords } from '@/types';

type LettersStatus = {
	[key in Letter]: Status;
};

type OrdleContextType = {
	lettersStatus: LettersStatus;
	nonNullLettersCount: number;
	requiredLetters: Letter[];
	requiredLetterPositions: (Letter | '')[];
	filteredWords: string[];
	handleLettersStatusChange: (letter: Letter, status: Status) => void;
	handleRequiredLetterPositionChange: (
		index: number,
		letter: Letter | '',
	) => void;
	reset: () => void;
};

const OrdleContext = createContext<OrdleContextType | undefined>(undefined);

type OrdleContextProviderProps = {
	children: ReactNode;
};

const initialLettersStatus: LettersStatus = {
	a: null,
	b: null,
	c: null,
	d: null,
	e: null,
	f: null,
	g: null,
	h: null,
	i: null,
	j: null,
	k: null,
	l: null,
	m: null,
	n: null,
	o: null,
	p: null,
	q: null,
	r: null,
	s: null,
	t: null,
	u: null,
	v: null,
	w: null,
	x: null,
	y: null,
	z: null,
};

const initialNonNullLettersCount = 0;

const initialRequiredLetters: Letter[] = [];

const initialRequiredLetterPositions: (Letter | '')[] = ['', '', '', '', ''];

const initialFilteredWords: string[] = [];

export function OrdleContextProvider({ children }: OrdleContextProviderProps) {
	const [lettersStatus, setLettersStatus] =
		useState<LettersStatus>(initialLettersStatus);

	const [nonNullLettersCount, setNonNullLettersCount] = useState(
		initialNonNullLettersCount,
	);

	const [requiredLetters, setRequiredLetters] = useState<Letter[]>(
		initialRequiredLetters,
	);

	const [requiredLetterPositions, setRequiredLetterPositions] = useState<
		(Letter | '')[]
	>(initialRequiredLetterPositions);

	const [filteredWords, setFilteredWords] =
		useState<string[]>(initialFilteredWords);

	function filterWordsByLetters(word: string) {
		return Object.entries(lettersStatus).every(([letter, status]) => {
			if (status === 1) {
				return word.includes(letter);
			} else if (status === 0) {
				return !word.includes(letter);
			}
			return true;
		});
	}

	function handleLettersStatusChange(letter: Letter, status: Status) {
		setLettersStatus((prevStatus) => ({
			...prevStatus,
			[letter]: lettersStatus[letter] === status ? null : status,
		}));
	}

	function handleRequiredLetterPositionChange(
		index: number,
		letter: Letter | '',
	) {
		setRequiredLetterPositions((prevPositions) => {
			const newPositions = [...prevPositions];
			newPositions[index] = letter;
			return newPositions;
		});
	}

	useEffect(() => {
		const count = Object.values(lettersStatus).filter(
			(status) => status !== null,
		).length;
		setNonNullLettersCount(count);

		if (count >= 2) {
			const newFilteredWords = allWords
				.filter(filterWordsByLetters)
				.filter((word) =>
					requiredLetterPositions.every(
						(letter, index) => !letter || word[index] === letter,
					),
				);
			setFilteredWords(newFilteredWords);
		} else {
			setFilteredWords([]);
		}

		const newRequiredLetters = Object.entries(lettersStatus)
			.filter(([_, status]) => status === 1)
			.map(([letter, _]) => letter as Letter);
		setRequiredLetters(newRequiredLetters);
	}, [lettersStatus, requiredLetterPositions]);

	function reset() {
		setLettersStatus(initialLettersStatus);
		setNonNullLettersCount(initialNonNullLettersCount);
		setRequiredLetters(initialRequiredLetters);
		setRequiredLetterPositions(initialRequiredLetterPositions);
		setFilteredWords(initialFilteredWords);
	}

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const value = {
		lettersStatus,
		nonNullLettersCount,
		requiredLetters,
		requiredLetterPositions,
		filteredWords,
		handleLettersStatusChange,
		handleRequiredLetterPositionChange,
		reset,
	};

	return (
		<OrdleContext.Provider value={value}>{children}</OrdleContext.Provider>
	);
}

export function useOrdle() {
	const context = useContext(OrdleContext);
	if (context === undefined) {
		throw new Error('useOrdle must be used within an OrdleContextProvider');
	}
	return context;
}
