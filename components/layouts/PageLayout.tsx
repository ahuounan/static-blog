import { useState } from 'react';
import { Head } from 'components/patterns/Head';
import { Navbar } from 'components/patterns/Navbar';
import { Logo } from 'components/patterns/Logo';
import { Footer } from 'components/patterns/Footer';
import { Modal } from 'components/patterns/Modal';
import { ModalContext } from 'components/contexts/ModalContext';

interface Props {
  title: string;
  header: React.ReactNode;
  children?: React.ReactNode;
}

export function PageLayout(props: Props) {
  const { children, header, title } = props;
  const [modal, setModal] = useState<ModalContext['modal'] | null>(null);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <div className="container mx-auto px-2 md:px-5 lg:px-12 xl:px-24 min-h-screen flex flex-col bg-transparent">
        <Head title={title} />
        <header className="container mx-auto flex justify-between mt-1 md:mt-3">
          <Logo />
          <Navbar />
        </header>

        <main className="container mx-auto flex-1">
          <article className="container">
            <h1 className="text-3xl md:text-4xl text-center my-7 md:my-10 cursor-default flex flex-col md:flex-row justify-center items-center">
              {header}
            </h1>
            {children}
          </article>
        </main>

        <footer className="container mx-auto print:hidden relative md:mt-5 mt-3 flex flex-col items-end justify-end z-0">
          <Footer />
        </footer>
        <Modal />
      </div>
    </ModalContext.Provider>
  );
}
