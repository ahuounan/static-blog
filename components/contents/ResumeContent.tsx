import { Section } from 'components/patterns/Section';
import { ResumeItem } from 'components/patterns/ResumeItem';

export function ResumeContent() {
  return (
    <>
      <Section title="Experience">
        {experienceItems.map(item => (
          <ResumeItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            link={item.link}
            bullets={item.bullets}
          />
        ))}
      </Section>
      <Section title="Education">
        {educationItems.map(item => (
          <ResumeItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            link={item.link}
            bullets={item.bullets}
          />
        ))}
      </Section>
    </>
  );
}

const experienceItems: ResumeItem[] = [
  {
    title: 'JP Morgan, London, UK',
    date: 'November 2020 - Present',
    subtitle: 'Frontend Engineer',
    link: '/projects#JP Morgan',
    bullets: [
      'Built, maintained, refactored risk-as-a-service React/rxjs application',
      'Built charting tools combining d3 with React and svg',
      'Debugged python backend codebase'
    ]
  },
  {
    title: 'Endeavor Streaming, London, UK',
    date: 'June 2019 - November 2020',
    subtitle: 'Frontend Engineer',
    link: '/projects#Endeavor Streaming',
    bullets: [
      'Built, maintained, refactored white-label sports streaming React-Native/redux/sagas mobile application',
      'Debugged Swift/Java codebase'
    ]
  },
  {
    title: 'Greenpeace, Beijing, China',
    date: 'April 2018 - October 2018',
    subtitle: 'Data Analyst',
    bullets: [
      'Built Python webcrawler tool to scrape data from Chinese state-owned enterprise websites',
      'Integrated data from different sources into a single reference table with source waterfall and tracking',
      'Analyzed data with pandas and matplotlib'
    ]
  },
  {
    title: 'Bloomberg LP, Beijing, China',
    date: 'October 2015 - March 2018',
    subtitle: 'Sales and Analytics',
    bullets: [
      'Advocated Bloomberg API products, helping clients integrate their models with Bloomberg data',
      "Consulted clients on Bloomberg's Portfolio, Commodities, and Fixed Income products",
      'Relationship management for large Chinese financial institutions, including ICBC, CIC, and AIIB'
    ]
  },
  {
    title: 'FMV Opinions, Irvine, California',
    date: 'June 2013 - June 2015',
    subtitle: 'Associate',
    bullets: [
      'Maintained Excel models for valuation of closed-end funds',
      'Wrote reports defending tax discount valuations for holding companies'
    ]
  }
];

const educationItems: ResumeItem[] = [
  {
    title: 'Stanford University, Online',
    date: 'June 2020 - Present',
    link: 'https://online.stanford.edu/programs/foundations-computer-science-graduate-program',
    subtitle: 'Foundations of Computer Science, in progress'
  },
  {
    title: 'Claremont McKenna College, California, USA',
    date: 'August 2009 - May 2013',
    link: 'https://www.cmc.edu/',
    subtitle:
      'Dual Major in Econ-Accounting and Environment, Economics, and Politics (EEP)',
    bullets: ['GPA: 3.5/4.0', 'GMAT: 700']
  },
  {
    title: 'International School of Beijing, Beijing, China',
    date: 'August 2005 - May 2009',
    link: 'https://www.isb.bj.edu.cn/',
    subtitle: 'International Baccalaureate',
    bullets: ['GPA: 3.5/4.0', 'SAT: 2130']
  }
];
