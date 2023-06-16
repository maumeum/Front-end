function phoneNumSplit(phoneNumber: string): string {
	let formattedPhone = '';
	if (phoneNumber) {
		if (phoneNumber.startsWith('010')) {
			formattedPhone =
				phoneNumber
					.split('')
					.reverse()
					.join('')
					.match(/.{1,4}/g)
					?.map((chunk) => chunk.split('').reverse().join(''))
					.reverse()
					.join('-') ?? '';
		} else {
			const lastFourDigits = phoneNumber.slice(-4);
			const remainingDigits = phoneNumber.slice(0, -4);
			formattedPhone =
				remainingDigits
					.split('')
					.reverse()
					.join('')
					.match(/.{1,3}/g)
					?.map((chunk) => chunk.split('').reverse().join(''))
					.reverse()
					.join('-') ?? '';
			formattedPhone = `${formattedPhone}-${lastFourDigits}`;
		}
	}
	return formattedPhone;
}

export default phoneNumSplit;
