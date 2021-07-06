import Image from 'next/image';

import emailIcon from 'public/icons/email.png';
import linkedInIcon from 'public/icons/linkedIn.png';
import githubIcon from 'public/icons/github.png';
import huIcon from 'public/manifest/android-icon-192x192.png';

export function Footer() {
  return (
    <div className="my-5">
      <ul className="flex justify-center">
        <li className="inline-block">
          <a
            className="hover:bg-gray-100 p-0 m-0 h-8 w-8 flex items-center justify-center"
            href="mailto:on.alanhu@gmail.com"
            target="_blank"
            rel="noreferrer">
            <Image
              unoptimized
              role="link"
              src={emailIcon}
              height={25}
              width={25}
              layout="intrinsic"
              objectFit="contain"
              objectPosition="center"
              alt="Email"
              className="dark-img"
            />
          </a>
        </li>
        <li className="inline-block ml-3">
          <a
            className="hover:bg-gray-100 p-1 m-0 h-8 w-8 flex items-center justify-center"
            href="https://github.com/ahuounan"
            target="_blank"
            rel="noreferrer">
            <Image
              unoptimized
              role="link"
              src={githubIcon}
              height={25}
              width={25}
              layout="intrinsic"
              objectFit="contain"
              objectPosition="center"
              alt="Github"
              className="dark-img"
            />
          </a>
        </li>
        <li className="inline-block ml-3">
          <a
            className="hover:bg-gray-100 p-0 m-0 h-8 w-8 flex items-center justify-center"
            href="https://www.linkedin.com/in/ahuounan/"
            target="_blank"
            rel="noreferrer">
            <Image
              unoptimized
              role="link"
              src={linkedInIcon}
              height={25}
              width={25}
              layout="intrinsic"
              objectFit="contain"
              objectPosition="center"
              alt="LinkedIn"
              className="dark-img"
            />
          </a>
        </li>
      </ul>
      <p className="text-center flex items-center justify-center my-1">
        <span className="ml-1 cursor-default z10 relative">Alan Hu 2021</span>
      </p>
      <div className="relative my-2 flex items-center justify-center">
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
