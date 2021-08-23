import Image from 'next/image';

import profile from 'public/profile.jpg';
import { PageLayout } from 'components/layouts/PageLayout';
import { AboutMeContent } from 'components/contents/AboutMeContent';

export default function Home() {
  return (
    <PageLayout
      title=""
      header={
        <>
          <figure
            role="figure"
            className="h-3/6 w-3/6 md:h-2/6 md:w-2/6 shadow-sm rounded-full">
            <Image
              unoptimized
              src={profile}
              alt="Bust shot of Alan, looking sharp"
              priority
              className="rounded-full"
            />
          </figure>
          <figcaption className="text-base w-72 self-center ml-3 md:mt-5 lg:mt-20">
            <p>
              <b>Hi, I&apos;m Alan.</b>
            </p>
            <p className="my-2">
              I am a software engineer with experience building <i>web</i> and{' '}
              <i>mobile apps</i> with <i>React</i> and <i>React Native</i>.
            </p>
            <p>
              I spend my free time learning things, 3d-printing and gardening.
            </p>
          </figcaption>
        </>
      }>
      <AboutMeContent />
    </PageLayout>
  );
}
