import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	onClick?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
	label = '버튼',
	colorType = 'green',
	size = 'small',
	round = false,
	backgroundColor,
}) => {
	const mode = round ? 'button--round' : 'button--square';
	return (
		<Button
			type='button'
			className={[
				'button',
				`button--${size}`,
				`button--${colorType}`,
				mode,
			].join(' ')}
			style={{ backgroundColor }}
			colorType={colorType}
			size={size}
			round={round}>
			{label}
		</Button>
	);
};
