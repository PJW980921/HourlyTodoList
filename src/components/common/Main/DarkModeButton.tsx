import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import {  Switch } from 'antd';
import type { InputRef } from 'antd';


const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const inputRef = useRef<InputRef>(null);
  const [input, setInput] = useState(true);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label className='flex flex-row justify-center items-center'>
          <Switch
          className=' bg-black-4'
          checked={theme === 'dark'}
          checkedChildren={ <BsSunFill className=' flex flex-row justify-center mt-[0.3rem] text-yellow-300 items-center'/>}
          unCheckedChildren={<BsMoonStarsFill  className=' flex flex-row justify-center mt-[0.6rem] text-yellow-300 items-center'/>}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
    </label>


    
  )
}


export default DarkModeButton