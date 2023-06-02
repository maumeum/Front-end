import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	onClick?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	isFull,
	...props
}) => {
	const mode = primary ? 'button--primary' : 'button--secondary';
	return (
		<Button
			type='button'
			className={['button', `button--${size}`, mode].join(' ')}
			primary={primary}
			style={{ backgroundColor }}
			size={size}
			isFull={isFull}
			{...props}>
			{label}
		</Button>
	);
};
