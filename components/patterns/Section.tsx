import Link from 'next/link';
import Image from 'next/image';

import linkIcon from 'public/icons/link.png';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function Section(props: Props) {
  const { title, children } = props;
  return (
    <section id={title ? encodeURI(title) : undefined} className="mt-4">
      {title && (
        <h3 className="text-2xl">
          <Link href={`#${title}`} scroll>
            <a className="no-underline">
              {title}
              <span className="ml-2">
                <Image
                  unoptimized
                  src={linkIcon}
                  alt="Link"
                  width={16}
                  height={16}
                  className="dark-img"
                />
              </span>
            </a>
          </Link>
        </h3>
      )}
      {children}
    </section>
  );
}
