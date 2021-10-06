import { Section } from 'components/patterns/Section';
import { ProjectItem } from 'components/patterns/ProjectItem';

export function ProjectsContent() {
  return (
    <>
      <Section title="Fun">
        <ProjectItem
          title="Map Viewer"
          description={
            <p className="text-gray-700 dark:text-gray-400">
              A small project using mapbox-gl/visx to render map data and
              related charts. Deployed{' '}
              <a
                className="pl-1 link"
                target="_blank"
                href="https://on-alanhu.com/map-viewer/"
                rel="noreferrer">
                here.
              </a>
              . Password is "maple2021"
            </p>
          }
          link="https://github.com/ahuounan/map-viewer-ui"
        />
        <ProjectItem
          title="Personal Blog Site"
          subtitle="Keeping Things Simple"
          description="After having worked on a mobile and web app, writing a personal blog site couldn't take me more than a few days. Or so I thought. Join me in my journey to learning (again) that Occam was right, and that the simplest way is the best way."
          link="/projects/raas-architecture"
        />
      </Section>
      <Section title="JP Morgan">
        <ProjectItem
          title="Risk as a Service"
          subtitle="Architecture"
          description="After learning React/Redux at Endeavor, I thought I had a good grasp of front-end architecture. Well, the world is a big place. It was a challenging but valuable experience not only to learn rxjs but also to unlearn Redux."
          link="/projects/raas-architecture"
        />
        <ProjectItem
          title="Risk as a Service"
          subtitle="Wrestling with AgGrid"
          link="/projects/raas-architecture"
        />
      </Section>
      <Section title="Endeavor Streaming">
        <ProjectItem
          title="Dice Mobile"
          subtitle="Architecture"
          link="/projects/raas-architecture"
        />
        <ProjectItem
          title="Dice Mobile"
          subtitle="Refactoring the Chromecast State Machine"
          link="/projects/raas-architecture"
        />
      </Section>
    </>
  );
}
