import Image from 'next/image';

interface Props {
  link: string;
  label: string;
  icon: StaticImageData;
}

export function ContactCard(props: Props) {
  const { link, label, icon } = props;

  return (
    <button
      tabIndex={-1}
      className="
        block
        inline-flex
        h-28
        w-28
        md:h-36
        md:w-36
        button
        group
        rounded
        mx-1
        md:mx-5
        flex
        flex-col
        items-center
        justify-center
      ">
      <a
        className="
          flex
          flex-col
          items-center
          justify-center
          h-full
          w-full
          mx-0
          no-underline
          bg-transparent
          hover:bg-transparent
        "
        href={link}
        target="_blank"
        rel="noreferrer">
        <Image
          unoptimized
          role="link"
          id={`${label} Icon`}
          src={icon}
          height={50}
          width={50}
          layout="intrinsic"
          objectFit="contain"
          className="rounded dark-img"
          alt={label}
        />
        <span>{label}</span>
      </a>
    </button>
  );
}
