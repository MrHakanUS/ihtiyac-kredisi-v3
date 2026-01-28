"use client"

import React, { useEffect, useId, useState } from 'react'

function InputboxComponent({ label = 'Değer', type = 'text', defaultValue, placeholder, icon, suffix, onChange, className, min, max, step }) {
  const [value, setValue] = useState(() => {
    if (typeof defaultValue === 'number' || typeof defaultValue === 'string') return defaultValue
    return ''
  })
  const reactId = useId()
  const inputId = `inputbox-${reactId}`

  useEffect(() => {
    if (defaultValue === undefined) return
    setValue(defaultValue)
  }, [defaultValue])

  function handleChange(event) {
    const nextValue = event.target.value
    setValue(nextValue)
    if (onChange) onChange(nextValue)
  }

  return (
    <div className={`relative group flex items-center gap-x-[16px] select-none w-1/3 ${className ?? ''}`}>
      <div className='text-slate-800 text-[20px]'>
        {icon}
      </div>
      <label htmlFor={inputId} className='flex flex-1 items-center justify-between cursor-text'>
        <div className='flex flex-col gap-y-[4px]'>
          <span className='text-slate-600 font-light text-[12px] leading-[16px]'>
            {label}
          </span>
          <input
            id={inputId}
            type={type}
            inputMode={type === 'number' ? 'numeric' : undefined}
            step={type === 'number' ? (step ?? 'any') : undefined}
            min={type === 'number' ? min : undefined}
            max={type === 'number' ? max : undefined}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className='bg-transparent outline-none text-slate-900 font-medium text-[14px] leading-[18px] placeholder:text-slate-400'
          />
        </div>
        {suffix && (
          <span className='ml-[12px] text-slate-500 text-[14px] leading-[18px]'>
            {suffix}
          </span>
        )}
      </label>
    </div>
  )
}

export default InputboxComponent


