import Link from 'next/link';

import { Item } from './Item';

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
}

export function ProjectItem(props: Props) {
  const { title, subtitle, description, link } = props;

  return (
    <Item
      title={
        <>
          {title}
          {subtitle && <i> - {subtitle}</i>}
        </>
      }>
      <p className="text-gray-700 dark:text-gray-400">
        <span className="mr-1">{description}</span>
        <span>{` `}</span>
        <span>
          <Link href={link}>
            <a>Read more...</a>
          </Link>
        </span>
      </p>
    </Item>
  );
}
