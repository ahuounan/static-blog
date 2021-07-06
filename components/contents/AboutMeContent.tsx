import { ContactCard } from 'components/patterns/ContactCard';

import emailIcon from 'public/icons/email.png';
import linkedInIcon from 'public/icons/linkedIn.png';
import githubIcon from 'public/icons/github.png';

export function AboutMeContent() {
  return (
    <>
      <div className="flex justify-center">
        <ContactCard
          icon={emailIcon}
          label="Email"
          link="mailto:on.alanhu@gmail.com"
        />
        <ContactCard
          icon={githubIcon}
          label="Github"
          link="https://github.com/ahuounan"
        />
        <ContactCard
          icon={linkedInIcon}
          label="LinkedIn"
          link="https://www.linkedin.com/in/ahuounan/"
        />
      </div>
    </>
  );
}
