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
    <>
      <ModalBase
        message={modal?.message}
        type="error"
        show={modal?.type === 'error'}
      />
      <ModalBase
        message={modal?.message}
        type="success"
        show={modal?.type === 'success'}
      />
      <ModalBase
        message={modal?.message}
        type="neutral"
        show={modal?.type === 'neutral'}
      />
    </>
  );
}

interface BaseProps {
  type: ModalType;
  message?: string;
  show: boolean;
}

function ModalBase(props: BaseProps) {
  const { message, type, show } = props;

  return (
    <div
      className={`
          fixed
          left-2/4
          right-2/4
          bottom-10
          md:top-10
          md:left-auto
          md:right-10
          rounded
          p-4
          shadow-md
          bg-white
          w-48
          h-10
          md:h-12
          transform
          origin-center
          -translate-x-2/4
          md:translate-none
          transition-modal
          duration-50
          ease-in-out
          text-sm
          flex
          items-center
          ${show ? 'z-100 scale-100 opacity-100' : 'z-0 scale-90 opacity-0'}
          ${getBorder(type)}
        `}
      role="alert">
      {message ?? ''}
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
