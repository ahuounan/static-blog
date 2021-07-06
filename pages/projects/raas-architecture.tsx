import { PageLayout } from 'components/layouts/PageLayout';
import { ArticleContent } from 'components/contents/ArticleContent';
import logo from 'public/pikachu.png';

export default function RaasArchitecture() {
  return (
    <PageLayout
      title="Risk as a Service - Architecture"
      header="Risk as a Service - Architecture">
      <ArticleContent
        paragraphs={[
          { content: <>test</> },
          {
            img: logo,
            caption: 'test',
            alt: 'test'
          }
        ]}
      />
    </PageLayout>
  );
}
