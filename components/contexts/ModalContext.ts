import { createContext } from 'react';

export interface ModalContext {
  modal: ModalData | null;
  setModal: (m: ModalData | null) => void;
}

export interface ModalData {
  duration: number;
  message: string;
  type: ModalType;
}

export type ModalType = 'error' | 'success' | 'neutral';

export const ModalContext = createContext<ModalContext>({} as ModalContext);
