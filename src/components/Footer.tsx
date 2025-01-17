import Reset from '@/components/Reset';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className='Footer flex w-full justify-between border-t-2 px-4'>
			<span>Ordle © {year}</span>
			<Reset />
		</footer>
	);
}

export default Footer;
