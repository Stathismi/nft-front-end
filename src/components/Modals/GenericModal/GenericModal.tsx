import React from 'react';
import { useSelector } from 'react-redux';

import { getGenericModal } from 'src/redux/genericModal';
import ModalContent from './ModalContent';

const GenericModal: React.FC = () => {
  const modal = useSelector(getGenericModal);
  return modal ? <ModalContent params={modal} /> : null;
};

export default GenericModal;
