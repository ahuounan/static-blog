import { Item } from './Item';

export interface ResumeItem {
  title: string;
  date?: string;
  subtitle?: string;
  bullets?: string[];
  link?: string;
}

interface Props extends ResumeItem {}

export function ResumeItem(props: Props) {
  const { title, link, date, subtitle, bullets } = props;

  return (
    <Item title={title} link={link} date={date}>
      {subtitle && <h5 className="text-base italic">{subtitle}</h5>}
      <ul className="ml-0.5">
        {bullets &&
          bullets.map(bullet => (
            <li
              key={bullet}
              className="text-base text-gray-700 dark:text-gray-400 list-disc list-inside">
              {bullet}
            </li>
          ))}
      </ul>
    </Item>
  );
}
