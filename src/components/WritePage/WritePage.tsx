import { useState } from 'react';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
	ImageArea,
} from '../WritePage/WritePageStyle';

type WritePageProps = {
	onSave: (
		inputTitle: string,
		textContent: string,
		selectedImage: File[],
	) => void;
	onCancel: () => void;
};

const WritePage = ({ onSave, onCancel }: WritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [selectedImage, setSelectedImage] = useState<File[]>([]);

	// const onClickHandler = () => {
	// 	const textContent = content;
	// 	onSave(inputTitle, textContent);
	// 	clearContent();
	// };
	const onClickHandler = () => {
		onSave(inputTitle, content, selectedImage);
		clearContent();
	};

	const handelImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenFiles = e.target.files;
		if (chosenFiles) {
			setSelectedImage((prevFiles) => [
				...prevFiles,
				...Array.from(chosenFiles),
			]);
		}
	};

	const handelInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		if (text.length <= 2000) {
			setContent(text);
		}
	};

	const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputTitle(text);
	};

	const deleteContent = () => {
		clearContent();
		onCancel();
	};

	const clearContent = () => {
		setInputTitle('');
		setContent('');
	};

	return (
		<>
			<Container>
				<TitleInput
					placeholder='제목을 입력해주세요'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<TextContainer>
					<ContentInput
						placeholder='내용입력'
						value={content}
						onChange={handelInputContent}
						maxLength={2000}
					/>
				</TextContainer>
				<TextLength>{content.length}/2000</TextLength>

				<ImageArea>
					이미지업로드
					<input
						id='fileInput'
						type='file'
						accept='image/*'
						name='image'
						multiple
						onChange={handelImageChange}
					/>
				</ImageArea>
				<ButtonContainer>
					<CancelButton onClick={deleteContent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default WritePage;
