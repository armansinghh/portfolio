import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
      <footer className="text-sm text-muted-foreground flex justify-between items-center w-full mono mt-12 border-t py-6">
        <div>© 2026 Arman Singh</div>
        <Link
          href="https://github.com/armansinghh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <FaGithub className="text-xl" /> GitHub
        </Link>
      </footer>
  );
}
