import Link from 'next/link';

import { Item } from './Item';

interface Props {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  link: string;
}

export function ProjectItem(props: Props) {
  const { title, subtitle, description, link } = props;

  return (
    <Item
      title={
        <Link href={link}>
          <a className="link">
            {title}
            {subtitle && <i> - {subtitle}</i>}
          </a>
        </Link>
      }>
      <p className="text-gray-700 dark:text-gray-400">
        <span className="mr-1">{description}</span>
        <span>{` `}</span>
        <span>
          <Link href={link}>
            <a className="pl-1 link">Read more...</a>
          </Link>
        </span>
      </p>
    </Item>
  );
}
