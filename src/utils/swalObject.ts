import { SweetAlertIcon } from 'sweetalert2';

const alertData = {
	wrongUserData: {
		icon: 'error' as SweetAlertIcon,
		title: '이메일 또는 비밀번호가 일치하지 않습니다.',
		confirmButtonColor: '#d33',
	},
	wrongPwd: {
		icon: 'error' as SweetAlertIcon,
		title: '비밀번호가 일치하지 않습니다.',
		confirmButtonColor: '#d33',
	},
	successSignUp: {
		title: '마음이음에 오신 것을 환영합니다!',
		text: '로그인을 해주세요.',
		confirmButtonColor: 'var(--button--color)',
	},
	emptyEmail: {
		icon: 'error' as SweetAlertIcon,
		title: '이메일을 입력해주세요.',
		confirmButtonColor: '#d33',
	},
	possibleEmail: {
		title: '사용 가능한 이메일 입니다!',
		confirmButtonColor: 'var(--button--color)',
	},
	usedEmail: {
		icon: 'error' as SweetAlertIcon,
		title: '이미 사용 중인 이메일입니다.',
		confirmButtonColor: '#d33',
	},
	acceptTeamCard: {
		title: '수락 하시겠습니까?',
		icon: 'warning' as SweetAlertIcon,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: '예',
		cancelButtonText: '아니오',
	},
	refuseTeamCard: {
		title: '거부 하시겠습니까?',
		icon: 'warning' as SweetAlertIcon,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: '예',
		cancelButtonText: '아니오',
	},
	confirmMessge: {
		title: '확인되었습니다',
		icon: 'success' as SweetAlertIcon,
		confirmButtonColor: 'var(--button--color)',
	},
	successMessage: (title: string) => ({
		title: `${title}`,
		icon: 'success' as SweetAlertIcon,
		confirmButtonText: '확인',
		confirmButtonColor: 'var(--button--color)',
	}),
	errorMessage: (title: string) => ({
		title: `${title}`,
		icon: 'error' as SweetAlertIcon,
		confirmButtonText: '확인',
		confirmButtonColor: 'var(--button--color)',
	}),
	infoMessage: (title: string) => ({
		title: `${title}`,
		icon: 'info' as SweetAlertIcon,
		confirmButtonText: '확인',
		confirmButtonColor: 'var(--button--color)',
	}),
	doubleCheckMessage: (title: string) => ({
		title: `${title}`,
		icon: 'info' as SweetAlertIcon,
		showCancelButton: true,
		confirmButtonColor: '#ffd4d4',
		cancelButtonColor: '#afcd81',
		confirmButtonText: '네',
		cancelButtonText: '아니요',
	}),
	waitTeamCert: {
		title: '제출이 완료되었습니다.',
		text: '관리자의 확인 후 승인 여부가 2~3일 내에 메일로 발송됩니다.',
		confirmButtonColor: 'var(--button--color)',
	},
};

export default alertData;
