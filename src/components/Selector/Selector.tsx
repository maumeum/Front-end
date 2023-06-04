import React from 'react';
import { OptionColor, SelectColor } from '@components/Selector/selector';
import Swal from 'sweetalert2';

function Selector({ onChange }) {
	const handleChange = event => {
		const selectedValue = event.target.value;
		if (onChange) {
			onChange(selectedValue);
			// alert(`${selectedValue} (으)로 상태가 변경되었습니다`);
			Swal.fire({
				title: `${selectedValue} (으)로 상태가 변경되었습니다`,
				icon: 'success',
				confirmButtonColor: '#afcd81',
				confirmButtonText: '확인',
			});
		}
	};

	return (
		<SelectColor onChange={handleChange}>
			<OptionColor value='모집중'>모집중</OptionColor>
			<OptionColor value='모집마감'>모집마감</OptionColor>
			<OptionColor value='모집중단'>모집중단</OptionColor>
			<OptionColor value='활동완료'>활동완료</OptionColor>
		</SelectColor>
	);
}

export default Selector;
