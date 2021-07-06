import { Head } from 'components/patterns/Head';
import { Navbar } from 'components/patterns/Navbar';
import { Logo } from 'components/patterns/Logo';
import { Footer } from 'components/patterns/Footer';

interface Props {
  title: string;
  header: React.ReactNode;
  children?: React.ReactNode;
}

export function PageLayout(props: Props) {
  const { children, header, title } = props;
  return (
    <div className="container mx-auto px-2 md:px-5 lg:px-12 xl:px-24 min-h-screen flex flex-col dark:bg-gray-800">
      <Head title={title} />
      <header className="relative container mx-auto flex justify-between mt-1 md:mt-3">
        <Logo />
        <Navbar />
      </header>

      <main className="container mx-auto flex-grow">
        <article className="container">
          <h1 className="text-3xl md:text-4xl text-center my-7 md:my-10 cursor-default relative flex flex-col md:flex-row justify-center items-center">
            {header}
          </h1>
          {children}
        </article>
      </main>

      <footer className="container mx-auto print:hidden">
        <Footer />
      </footer>
    </div>
  );
}
