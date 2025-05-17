import Reset from '@/components/Reset';
import Copyright from '@/components/Copyright';

function Footer() {
  return (
    <footer className="Footer flex w-full justify-between border-t-2 px-4">
      <Copyright />
      <Reset />
    </footer>
  );
}

export default Footer;
