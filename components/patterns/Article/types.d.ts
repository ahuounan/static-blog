export type ArticleParagraph = ArticleImageContent | ArticleTextContent;

export interface ArticleImageContent {
  img: StaticImport;
  caption?: string;
  alt: string;
}

export interface ArticleTextContent {
  content: React.ReactNode;
}
