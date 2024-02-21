import React, { useEffect, useState } from 'react';
export default function DateMain() {
  const [newTime, setNewTime] = useState('');


  const todayTime  = () => {
    const now   = new Date();
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();
    const weekDay = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    const dayOfWeek = weekDay[now.getDay() - 1];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return todayYear + '/' + todayMonth + '/' + todayDate + dayOfWeek + hours + ':' + minutes;
  }
  useEffect(()=> {
   const liveTime = setInterval(()=>{
    setNewTime(todayTime().slice(12,19));
   },1000);
return (()=> clearInterval(liveTime));
  },[]);
  return (
    <main>
      <p className='text-42-700 flex items-center justify-center'>{newTime}</p>
      <p className='text-14-400 text-gray-7 flex items-center justify-center'>{todayTime().slice(0,9) + todayTime().slice(9,12)}</p>
    </main>
  );
}

