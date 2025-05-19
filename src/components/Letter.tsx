import { useOrdle } from '@/context';

import LetterButtonDown from '@/components/LetterButtonDown';
import LetterButtonUp from '@/components/LetterButtonUp';

import type { Letter } from '@/types';

type LetterProps = {
  letter: Letter;
};

function Letter({ letter }: LetterProps) {
  const { lettersStatus } = useOrdle();
  const status = lettersStatus[letter];
  const statusColor =
    status === 0 || status === 1 ? (status === 1 ? 'green' : 'red') : 'gray';

  return (
    <div className="Letter flex items-center justify-center gap-1 uppercase">
      <LetterButtonDown letter={letter} status={status} />
      <span
        className={`text-${statusColor}-400${status === 1 ? ' font-bold' : ''}`}
      >
        {letter}
      </span>
      <LetterButtonUp letter={letter} status={status} />
    </div>
  );
}

export default Letter;
