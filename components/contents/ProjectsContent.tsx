import { Section } from 'components/patterns/Section';
import { ProjectItem } from 'components/patterns/ProjectItem';

export function ProjectsContent() {
  return (
    <>
      <Section title="Fun">
        <ProjectItem
          title="Strange Attractor Simulator"
          description="A small project playing around with Canvas."
          link="/projects/raas-architecture"
        />
        {/* <ProjectItem
          title="Risk as a Service"
          subtitle="Building a Charting Toolbox"
          link="/projects/raas-charting"
        /> */}
      </Section>
      <Section title="JP Morgan">
        <ProjectItem
          title="Risk as a Service"
          subtitle="Architecture"
          description="This was my first project really using rxjs, and it was a great learning experience having to re-learn a React app architecture."
          link="/projects/raas-architecture"
        />
        {/* <ProjectItem
          title="Risk as a Service"
          subtitle="Building a Charting Toolbox"
          link="/projects/raas-charting"
        /> */}
      </Section>
      <Section title="Endeavor Streaming">
        {/* <ProjectItem
          title="Dice Mobile"
          subtitle="Architecture"
          link="/projects/dm-architecture"
        />
        <ProjectItem
          title="Dice Mobile"
          subtitle="Refactoring Chromecast"
          link="/projects/dm-chromecast"
        /> */}
      </Section>
    </>
  );
}
