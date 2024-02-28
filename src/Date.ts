export const getTodayTime = () => {
	const now = new Date();
	const todayYear = now.getFullYear();
	const todayMonth = now.getMonth() + 1;
	const todayDate = now.getDate();
	const weekDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	const dayOfWeek = weekDay[now.getDay()];
	const hours = now.getHours() < 12 ? '오전' : '오후';
	const hoursAmPm = hours + (now.getHours() % 12);
	const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
	return todayYear + '/' + todayMonth + '/' + todayDate + dayOfWeek + hoursAmPm + ':' + minutes;
};
