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
        <ProjectItem
          title="CantoChat"
          subtitle="Writing a Dependency Manager"
          description="C# is a very class-based language and different from Javascript. Here, I write a simple Dependency Manager class to help manage the different game services."
          link="/projects/raas-architecture"
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
          subtitle="Building a Charting Toolbox"
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
