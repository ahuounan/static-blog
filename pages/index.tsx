import Image from 'next/image';

import pikachu from 'public/pikachu.png';
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
            className="relative h-3/6 w-3/6 md:h-2/6 md:w-2/6">
            <Image
              unoptimized
              src={pikachu}
              alt="Happy Pikachu"
              objectFit="cover"
              objectPosition="center"
              className="rounded-full h-full w-full"
            />
          </figure>
          <figcaption className="text-base w-72 self-center md:mt-12 lg:mt-36">
            Software engineer with experience building web and mobile apps with
            React and React-Native. In my free time, I enjoy 3d-printing and
            gardening.
          </figcaption>
        </>
      }>
      <AboutMeContent />
    </PageLayout>
  );
}
