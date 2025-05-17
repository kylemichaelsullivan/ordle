import { useOrdle } from '@/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function Reset() {
  const { reset } = useOrdle();

  return (
    <button
      type="button"
      className="Reset text-gray-400 hover:text-gray-700"
      title="Reset"
      onClick={reset}
    >
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
}

export default Reset;
