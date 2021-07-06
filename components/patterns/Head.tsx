import NextHead from 'next/head';

interface Props {
  title?: string;
}

export function Head(props: Props) {
  const { title } = props;

  return (
    <NextHead>
      <title key="title">Alan Hu{title ? ` | ${title}` : ''}</title>
      <meta
        key="metaViewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </NextHead>
  );
}
