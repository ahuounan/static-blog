import Link from 'next/link';

interface Props {
  title: React.ReactNode;
  link?: string;
  date?: string;
  children?: React.ReactNode;
}

export function Item(props: Props) {
  const { title, link, date, children } = props;
  return (
    <div className="container pl-3 md:pl-6">
      <div className="flex justify-between items-baseline">
        {link ? (
          <Link href={link}>
            <a>
              <h4 className="text-base md:text-lg">{title}</h4>
            </a>
          </Link>
        ) : (
          <h4 className="text-base md:text-lg">{title}</h4>
        )}
        {date && (
          <span className="ml-3 text-right">
            <p>{date}</p>
          </span>
        )}
      </div>
      <div className="pl-3 md:pl-6">{children}</div>
    </div>
  );
}
