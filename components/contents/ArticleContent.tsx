import { Article } from 'components/patterns/Article';
import { ArticleParagraph } from 'components/patterns/Article/types';

interface Props {
  paragraphs: ArticleParagraph[];
}

export function ArticleContent(props: Props) {
  const { paragraphs } = props;

  return <Article paragraphs={paragraphs} />;
}
