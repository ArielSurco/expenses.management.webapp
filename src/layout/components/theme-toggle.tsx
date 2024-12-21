'use client'

import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { Button } from '@/shared/components/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className='fixed bottom-4 right-4'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant='ghost'
    >
      {theme === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </Button>
  )
}
