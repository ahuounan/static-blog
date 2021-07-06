import { PageLayout } from 'components/layouts/PageLayout';
import { ResumeContent } from 'components/contents/ResumeContent';

export default function Resume() {
  return (
    <PageLayout title="Résumé" header="Résumé">
      <ResumeContent />
    </PageLayout>
  );
}
