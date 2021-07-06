import { PageLayout } from 'components/layouts/PageLayout';
import { ProjectsContent } from 'components/contents/ProjectsContent';

export default function Projects() {
  return (
    <PageLayout title="Projects" header="Projects">
      <ProjectsContent />
    </PageLayout>
  );
}
