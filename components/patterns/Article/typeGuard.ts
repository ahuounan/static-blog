import {
  ArticleParagraph,
  ArticleImageContent,
  ArticleTextContent
} from './types';

export function isArticleImageContent(
  content: ArticleParagraph
): content is ArticleImageContent {
  return !!(content as ArticleImageContent).img;
}

export function isArticleTextContent(
  content: ArticleParagraph
): content is ArticleTextContent {
  return !!(content as ArticleTextContent).content;
}
