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
        {navbarItems.map((item, i) => (
          <li
            key={item.href}
            className={`text-base md:text-base last:-mr-1 md:last:-mr-4 inline-flex items-center justify-center cursor-pointer ${
              router.route === item.href ? 'button-selected' : 'button'
            }`}>
            <Link href={item.href} as={item.href}>
              <a className="px-1 md:px-2 h-full flex items-center">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
