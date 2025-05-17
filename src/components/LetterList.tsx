type LetterListProps = {
  letters: string[];
};

function LetterList({ letters }: LetterListProps) {
  return (
    <datalist className="LetterList" id="letters">
      {letters.map((letter) => (
        <option key={letter} value={letter} />
      ))}
    </datalist>
  );
}

export default LetterList;
