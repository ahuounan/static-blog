import { useContext, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import linkIcon from 'public/icons/link.png';
import { ModalContext } from 'components/contexts/ModalContext';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function Section(props: Props) {
  const { title, children } = props;
  const { setModal } = useContext(ModalContext);
  const onClick = useCallback(
    e => {
      const path = e.target.getAttribute('href');
      const url = `https://on-alanhu.com${path}`;
      if (navigator.clipboard) {
        navigator.clipboard?.writeText(url).then(
          () => {
            setModal({
              duration: 2000,
              message: 'Link copied.',
              type: 'success'
            });
          },
          () => {
            setModal({
              duration: 2000,
              message: 'Could not copy link.',
              type: 'error'
            });
          }
        );
      } else {
        setModal({
          duration: 2000,
          message: 'Could not copy link.',
          type: 'error'
        });
      }
    },
    [setModal]
  );

  return (
    <section id={title ? encodeURI(title) : undefined} className="mt-4">
      {title && (
        <h3 className="text-2xl">
          <Link href={`#${title}`} scroll>
            <a onClick={onClick}>
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
