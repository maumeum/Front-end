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
	fillTitleContent: {
		title: '제목과 내용을 모두 입력해주세요',
		icon: 'warning' as SweetAlertIcon,
	},
};

export default alertData;
