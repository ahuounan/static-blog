import Image from 'next/image';
import { ArticleParagraph } from './types';
import { isArticleImageContent } from './typeGuard';

interface Props {
  paragraphs: ArticleParagraph[];
}

export function Article(props: Props) {
  const { paragraphs } = props;
  return (
    <>
      {paragraphs.map((content, i) =>
        isArticleImageContent(content) ? (
          <figure key={i} className="flex flex-col container relative">
            <Image
              unoptimized
              className="relative"
              src={content.img}
              alt={content.alt}
              layout="intrinsic"
              objectFit="scale-down"
            />
            {content.caption && (
              <figcaption className="relative text-center text-sm text-gray-800 italic">
                {content.caption}
              </figcaption>
            )}
          </figure>
        ) : (
          <p key={i}>{content.content}</p>
        )
      )}
    </>
  );
}
