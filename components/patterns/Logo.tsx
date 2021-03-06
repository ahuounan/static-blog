import Link from 'next/link';
import { Hu } from 'components/icons/Hu';

export function Logo() {
  return (
    <div role="banner" className="button logo print:border-none">
      <Link href="/">
        <a className="flex items-center no-underline pl-0">
          <Hu />
          <h2 className="text-2xl md:text-3xl whitespace-nowrap ml-1 md:ml-3 pr-3">
            Alan Hu
          </h2>
        </a>
      </Link>
    </div>
  );
}
