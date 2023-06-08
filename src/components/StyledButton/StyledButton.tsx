import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	onClick?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
	label = '버튼',
	primary = true,
	size = 'small',
	round = false,
	backgroundColor,
}) => {
	const mode = primary ? 'button--primary' : 'button--outline';
	return (
		<Button
			type='button'
			className={['button', `button--${size}`, mode].join(' ')}
			style={{ backgroundColor }}
			primary={primary}
			size={size}
			round={round}>
			{label}
		</Button>
	);
};
