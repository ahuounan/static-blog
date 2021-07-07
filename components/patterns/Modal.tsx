import { useContext, useEffect } from 'react';
import { ModalContext, ModalType } from 'components/contexts/ModalContext';

export function Modal() {
  const { modal, setModal } = useContext(ModalContext);
  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(null);
      }, modal.duration);
    }
  }, [JSON.stringify(modal), setModal]);

  return (
    <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-end text-sm md:text-base md:justify-end md:items-start p-7">
      <div
        className={`
          rounded
          p-4
          shadow-md
          bg-white
          relative
          w-48
          h-10
          md:h-12
          transform
          origin-center
          transition-all
          duration-50
          ease-in-out
          text-sm
          flex
          items-center
          z-0
          ${modal ? 'z-100 scale-100 opacity-100' : 'z-0 scale-90 opacity-0'}
          ${getBorder(modal?.type)}
        `}
        role="alertdialog"
        aria-modal="true">
        {modal?.message ?? ''}
      </div>
    </div>
  );
}

function getBorder(type?: ModalType) {
  if (!type) {
    return '';
  }

  if (type === 'success') {
    return 'border border-green-600 bg-green-100';
  }

  if (type === 'error') {
    return 'border border-red-600 bg-red-100';
  }

  if (type === 'neutral') {
    return 'border border-gray-100 bg-white';
  }
}
