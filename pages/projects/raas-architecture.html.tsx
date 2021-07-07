import { PageLayout } from 'components/layouts/PageLayout';
import { ArticleContent } from 'components/contents/ArticleContent';

export default function RaasArchitecture() {
  return (
    <PageLayout
      title="Risk as a Service - Architecture"
      header={
        <div>
          <h2 className="text-xl">Risk as a Service</h2>
          <h1 className="text-3xl">Architecture</h1>
        </div>
      }>
      <ArticleContent
        paragraphs={[
          { content: <>Content under development, please check back later!</> }
        ]}
      />
    </PageLayout>
  );
}
