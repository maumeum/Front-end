interface WritePageProps {
	onSave: (inputTitle: string, textContent: string) => void;
	onCancel: () => void;
}

export default WritePageProps;
