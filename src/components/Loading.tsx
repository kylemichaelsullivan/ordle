import '../loading.css';

function Loading() {
	const spinnerDivs = Array.from({ length: 12 }, (_, i) => <div key={i}></div>);

	return <div className='Loading mx-auto'>{spinnerDivs}</div>;
}

export default Loading;
