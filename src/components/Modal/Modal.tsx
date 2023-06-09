import ReactModal from 'react-modal';

import UserForm from '@components/UserForm/UserForm.tsx';
import { customStyles } from '@components/Modal/modal';
import MyReview from '../MyPost/MyReview';
type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	user?: string;
	editMode?: boolean;
	authMode?: boolean;
	id?: string;
};

const Modal = ({
	isOpen,
	closeModal,
	user,
	editMode,
	authMode,
	id,
}: ModalProps) => {
	const handleClose = () => {
		closeModal();
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleClose}
			style={customStyles}>
			{user ? (
				<UserForm
					closeModal={closeModal}
					editMode={editMode}
					authMode={authMode}
				/>
			) : (
				<MyReview closeModal={closeModal} id={id} />
			)}
		</ReactModal>
	);
};
export default Modal;
