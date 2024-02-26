import { todayTime } from '@/pages/Date';
import React, { useEffect, useState } from 'react';

interface DateProps { 
  newTime : string;
}
export default function DateMain({newTime} :DateProps) {
  return (
    <main>
      <p className='text-42-700 flex items-center justify-center'>{newTime}</p>
      <p className='text-14-400 text-gray-7 flex items-center justify-center'>{todayTime().slice(0,9) + todayTime().slice(9,12)}</p>
    </main>
  );
}

