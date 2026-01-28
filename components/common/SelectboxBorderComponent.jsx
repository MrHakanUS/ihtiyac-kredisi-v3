"use client"

import React, { useEffect, useRef, useState, useId } from 'react'
import { LuUsers, LuChevronDown } from 'react-icons/lu'

function SelectboxBorderComponent({ options = [], label = 'Seçenek', defaultValue, icon, onChange, className }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue ?? (options[0] ?? ''))
  const [activeIndex, setActiveIndex] = useState(() => {
    const initial = defaultValue ?? (options[0] ?? '')
    const index = options.indexOf(initial)
    return index >= 0 ? index : 0
  })

  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const reactId = useId()
  const listboxId = `credit-type-listbox-${reactId}`

  useEffect(() => {
    function handleClickOutside(event) {
      if (!rootRef.current) return
      if (rootRef.current.contains(event.target)) return
      setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!Array.isArray(options) || options.length === 0) {
      setSelectedOption('')
      setActiveIndex(0)
      return
    }
    if (defaultValue && options.includes(defaultValue)) {
      setSelectedOption(defaultValue)
      setActiveIndex(options.indexOf(defaultValue))
      return
    }
    if (!options.includes(selectedOption)) {
      setSelectedOption(options[0])
      setActiveIndex(0)
      return
    }
    setActiveIndex(options.indexOf(selectedOption))
  }, [options, defaultValue])

  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  function handleOpenWithKeyboard() {
    setIsOpen(true)
  }

  function handleKeyDownOnButton(event) {
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && options.length > 0) {
      event.preventDefault()
      handleOpenWithKeyboard()
      setActiveIndex(prev => {
        if (event.key === 'ArrowDown') return Math.min(prev + 1, options.length - 1)
        return Math.max(prev - 1, 0)
      })
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleOpen()
      return
    }
    if (event.key === 'Escape') setIsOpen(false)
  }

  function handleKeyDownOnList(event) {
    if (event.key === 'ArrowDown' && options.length > 0) {
      event.preventDefault()
      setActiveIndex(prev => Math.min(prev + 1, options.length - 1))
      return
    }
    if (event.key === 'ArrowUp' && options.length > 0) {
      event.preventDefault()
      setActiveIndex(prev => Math.max(prev - 1, 0))
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      selectByIndex(activeIndex)
      return
    }
    if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current && buttonRef.current.focus()
    }
  }

  function selectByIndex(index) {
    const option = options[index]
    if (!option) return
    setSelectedOption(option)
    setIsOpen(false)
    buttonRef.current && buttonRef.current.focus()
    if (onChange) onChange(option)
  }

  const wrapperBorderClass = isOpen ? 'border-primary' : 'border-slate-200'

  return (
    <div
      ref={rootRef}
      className={`relative select-none w-1/3 ${className ?? ''}`}
    >
      <button
        ref={buttonRef}
        type='button'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={toggleOpen}
        onKeyDown={handleKeyDownOnButton}
        className={`flex items-center gap-x-[12px] cursor-pointer w-full text-left outline-none bg-white border ${wrapperBorderClass} hover:border-slate-300 focus:outline-none focus-visible:border-primary focus-visible:ring-0 rounded-xl px-4 py-3 transition-all`}
      >
        <div className='text-slate-500 text-[20px]'>
          {icon ?? <LuUsers />}
        </div>
        <div className='flex flex-1 items-center justify-between'>
          <div className='flex flex-col gap-y-[2px]'>
            <span className='text-slate-600 font-light text-[12px] leading-[16px]'>
              {label}
            </span>
            <span className='text-slate-900 font-medium text-[14px] leading-[18px]'>
              {selectedOption}
            </span>
          </div>
          <LuChevronDown className={`transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180 text-primary' : 'text-slate-500 group-hover:text-primary'}`} />
        </div>
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role='listbox'
          tabIndex={-1}
          onKeyDown={handleKeyDownOnList}
          className='absolute left-0 right-0 top-[calc(100%+8px)] z-20 w-full rounded-[12px] border border-slate-200 bg-white p-[6px] shadow-lg'
        >
          {options.map((option, index) => {
            const isActive = index === activeIndex
            const isSelected = option === selectedOption
            return (
              <li
                key={option}
                role='option'
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectByIndex(index)}
                className={`flex cursor-pointer items-center justify-between rounded-[8px] px-[10px] py-[10px] text-[14px] leading-[18px] transition-colors ${
                  isActive ? 'bg-slate-50' : 'bg-white'
                } ${isSelected ? 'text-primary' : 'text-slate-800'} hover:bg-slate-50`}
              >
                <span>{option}</span>
                {isSelected && (
                  <span className='text-[12px] text-primary'>Seçili</span>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SelectboxBorderComponent

 
