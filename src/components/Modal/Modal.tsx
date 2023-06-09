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
	isParticipate: boolean;
};

const Modal = ({
	isOpen,
	closeModal,
	user,
	editMode,
	authMode,
	id,
	isParticipate,
}: ModalProps) => {
	const handleSubmit = () => {
		//요청보내는 코드 들어가야하는 부분
		closeModal();
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleSubmit}
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
