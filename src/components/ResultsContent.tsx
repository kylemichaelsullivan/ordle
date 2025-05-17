import { useOrdle } from '@/context';

import SelectMore from './SelectMore';
import ResultsList from './ResultsList';
import NoResults from './NoResults';

function ResultsContent() {
  const { filteredWords, nonNullLettersCount } = useOrdle();

  return (
    <div className="Results grid list-none gap-1 gap-y-4 border p-4 shadow-xl">
      {nonNullLettersCount < 2 ? (
        <SelectMore />
      ) : filteredWords.length ? (
        <ResultsList words={filteredWords} />
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default ResultsContent;
