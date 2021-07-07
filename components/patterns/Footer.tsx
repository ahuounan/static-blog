import Image from 'next/image';

import emailIcon from 'public/icons/email.png';
import linkedInIcon from 'public/icons/linkedIn.png';
import githubIcon from 'public/icons/github.png';
import huIcon from 'public/manifest/android-icon-192x192.png';
import { isExternal } from 'libs/url';
import { useRouter } from 'next/router';

export function Footer() {
  const router = useRouter();

  return (
    <div className="my-5">
      <ul className="flex justify-center">
        {router.pathname !== '/' &&
          footerLinks.map(link => (
            <li key={link.href} className="inline-block button border-none">
              <a
                className="p-0 m-0 h-8 w-8 flex items-center justify-center"
                href={link.href}
                {...(isExternal(link.href)
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}>
                <Image
                  unoptimized
                  role="link"
                  src={link.icon}
                  height={25}
                  width={25}
                  layout="intrinsic"
                  objectFit="contain"
                  objectPosition="center"
                  alt={link.alt}
                  className="dark-img"
                />
              </a>
            </li>
          ))}
      </ul>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center">
        <span className="ml-1 cursor-default z10 relative">Alan Hu 2021</span>
      </p>
      <div className="relative mt-5 mb-6 flex items-center justify-center">
        <Image
          unoptimized
          role="link"
          src={huIcon}
          height={20}
          width={20}
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
          alt="Hu"
        />
      </div>
    </div>
  );
}

const footerLinks = [
  {
    icon: emailIcon,
    alt: 'Email',
    href: 'mailto:on.alanhu@gmail.com'
  },
  {
    icon: githubIcon,
    alt: 'GitHub',
    href: 'https://github.com/ahuounan'
  },
  {
    icon: linkedInIcon,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahuounan/'
  }
];
