import Image from 'next/image';

import emailIcon from 'public/icons/email.png';
import linkedInIcon from 'public/icons/linkedIn.png';
import githubIcon from 'public/icons/github.png';
import huIcon from 'public/manifest/android-icon-192x192.png';
import { isExternal } from 'libs/url';
import { useRouter } from 'next/router';
import { BackgroundCanvas } from './BackgroundCanvas';
import { useRef } from 'react';

export function Footer() {
  const router = useRouter();
  const showButtons = router.pathname !== '/';
  const animateRef = useRef<{ animate?: (animate: boolean) => void }>({});
  const onHuClick = () => {
    animateRef.current?.animate?.(true);
  };

  return (
    <div className="z-10 self-stretch">
      {showButtons && (
        <ul className="flex justify-center">
          {footerLinks.map(link => (
            <li
              key={link.href}
              className="inline-block button border-none bg-opacity-90">
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
                  height={20}
                  width={20}
                  alt={link.alt}
                  className="dark-img"
                />
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className="relative flex items-center self-stretch justify-center">
        <BackgroundCanvas animateRef={animateRef} />
        <button
          onClick={onHuClick}
          className="logo absolute"
          style={{ height: 20, width: 20 }}>
          <Image
            unoptimized
            className="bg-white dark:bg-gray-700 bg-opacity-75"
            role="link"
            src={huIcon}
            height={20}
            width={20}
            alt="Hu"
          />
        </button>
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
