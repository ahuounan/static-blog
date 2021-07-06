import Link from 'next/link';
import { useRouter } from 'next/router';

const navbarItems = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/resume',
    label: 'Résumé'
  },
  {
    href: '/projects',
    label: 'Projects'
  }
];

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="inline-flex print:hidden">
      <ul className="inline-flex justify-between">
        {navbarItems.map(item => (
          <li
            key={item.href}
            className={`text-lg md:text-xl px-1 last:-mr-1 md:px-3 md:last:-mr-3 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 ${
              router.route === item.href ? 'underline' : ''
            }`}>
            <Link href={item.href}>
              <a className="ml-0 no-underline">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
