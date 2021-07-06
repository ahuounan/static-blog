import { PageLayout } from 'components/layouts/PageLayout';
import { ArticleContent } from 'components/contents/ArticleContent';
import logo from 'public/pikachu.png';

export default function RaasArchitecture() {
  return (
    <PageLayout
      title="Risk as a Service - Architecture"
      header={
        <>
          <h2>Risk as a Service</h2>
          <h1>Architecture</h1>
        </>
      }>
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
