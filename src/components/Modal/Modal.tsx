import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './modal.css';

type ModalProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const Modal = ({ isOpen, setOpen }: ModalProps) => {
  const [input, setInput] = useState('');

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달 입니다.</div>
      <ReactQuill onChange={handleChange} />
      <div>
        <button onClick={handleClickClose}>닫기</button>
      </div>
    </ReactModal>
  );
};
export default Modal;
