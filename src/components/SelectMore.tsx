import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function SelectMore() {
	return (
		<p className='SelectMore col-span-full text-center text-gray-400'>
			Select 2 or More <FontAwesomeIcon icon={faThumbsUp} /> or{' '}
			<FontAwesomeIcon icon={faThumbsDown} />
		</p>
	);
}

export default SelectMore;
