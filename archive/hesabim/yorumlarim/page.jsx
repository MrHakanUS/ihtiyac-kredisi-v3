"use client";

import React, { useState } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import ModalComponent from '@/components/common/ModalComponent'

export default function CommentsPage() {
  const [comments, setComments] = useState(() => ([
    {
      id: 'c1',
      bank: { name: 'AKBANK', logo: '/banks/akbank.png' },
      text: 'Pepperoni tomatoes black mozzarella chicken lasagna meat. Ipsum style mozzarella Hawaiian pan pineapple mozzarella olives. Broccoli ipsum tomato cheese Aussie ipsum green pesto. Cheese mouth broccoli black pesto pork pork. Style spinach and mushrooms white lot bacon beef.',
      ratings: { creditApproval: 4, communication: 3, security: 1 },
      createdAt: '2024-08-12'
    },
    {
      id: 'c2',
      bank: { name: 'ING', logo: '/banks/ing.png' },
      text: 'Pepperoni tomatoes black mozzarella chicken lasagna meat. Ipsum style mozzarella Hawaiian pan pineapple mozzarella olives. Broccoli ipsum tomato cheese Aussie ipsum green pesto. Cheese mouth broccoli black pesto pork pork. Style spinach and mushrooms white lot bacon beef.',
      ratings: { creditApproval: 4, communication: 3, security: 1 },
      createdAt: '2024-08-10'
    },
    {
      id: 'c3',
      bank: { name: 'Garanti BBVA', logo: '/banks/garanti.png' },
      text: 'Pepperoni tomatoes black mozzarella chicken lasagna meat. Ipsum style mozzarella Hawaiian pan pineapple mozzarella olives. Broccoli ipsum tomato cheese Aussie ipsum green pesto. Cheese mouth broccoli black pesto pork pork. Style spinach and mushrooms white lot bacon beef.',
      ratings: { creditApproval: 4, communication: 3, security: 1 },
      createdAt: '2024-08-07'
    }
  ]))
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedCommentId, setSelectedCommentId] = useState('')
  const [editText, setEditText] = useState('')
  const [editCredit, setEditCredit] = useState('3')
  const [editCommunication, setEditCommunication] = useState('3')
  const [editSecurity, setEditSecurity] = useState('3')
  const [editError, setEditError] = useState('')

  function StarWithValue({ value }) {
    const color = value >= 4 ? 'text-lime-500' : value <= 1 ? 'text-red-500' : 'text-amber-500'
    return (
      <div className='flex items-center gap-2'>
        <FaStar className={`w-[14px] h-[14px] ${color}`} />
        <span className='text-[13px] font-semibold leading-4 text-slate-900'>{value}</span>
      </div>
    )
  }

  function isInvalidRating(value) {
    const n = parseInt(String(value), 10)
    if (Number.isNaN(n)) return true
    if (n < 1) return true
    if (n > 5) return true
    return false
  }

  function getRatingsErrorMessage(v1, v2, v3) {
    const values = [v1, v2, v3].map((v) => parseInt(String(v), 10))
    if (values.some((n) => Number.isNaN(n))) return 'Puanlar 1 ile 5 arasında tam sayı olmalı'
    if (values.some((n) => n < 1 || n > 5)) return 'Puanlar 1 ile 5 arasında olmalı'
    return ''
  }

  function getStatusInfoByIndex(index) {
    if (index === 0) return { label: 'Beklemede', badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' }
    if (index === 1) return { label: 'Yayınlandı', badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500' }
    if (index === 2) return { label: 'Reddedildi', badge: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' }
    return { label: 'Beklemede', badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' }
  }

  function openEditModal(commentId) {
    const comment = comments.find((c) => c.id === commentId)
    if (!comment) return
    setSelectedCommentId(commentId)
    setEditText(comment.text)
    setEditCredit(String(comment.ratings.creditApproval))
    setEditCommunication(String(comment.ratings.communication))
    setEditSecurity(String(comment.ratings.security))
    setEditError('')
    setIsEditModalOpen(true)
  }

  function closeEditModal() {
    setIsEditModalOpen(false)
    setSelectedCommentId('')
    setEditText('')
  }

  function handleRatingChange(kind, value) {
    if (kind === 'credit') setEditCredit(value)
    if (kind === 'communication') setEditCommunication(value)
    if (kind === 'security') setEditSecurity(value)
    const nextCredit = kind === 'credit' ? value : editCredit
    const nextComm = kind === 'communication' ? value : editCommunication
    const nextSec = kind === 'security' ? value : editSecurity
    const msg = getRatingsErrorMessage(nextCredit, nextComm, nextSec)
    setEditError(msg)
  }

  function handleEditSave() {
    if (!selectedCommentId) return
    const ratingErr = getRatingsErrorMessage(editCredit, editCommunication, editSecurity)
    if (ratingErr) {
      setEditError(ratingErr)
      return
    }
    if (!editText || editText.trim().length < 20) {
      setEditError('Lütfen en az 20 karakterlik bir yorum girin')
      return
    }
    const nextCredit = parseInt(String(editCredit), 10)
    const nextComm = parseInt(String(editCommunication), 10)
    const nextSec = parseInt(String(editSecurity), 10)
    setComments((prev) => prev.map((c) => c.id === selectedCommentId ? {
      ...c,
      text: editText.trim(),
      ratings: { creditApproval: nextCredit, communication: nextComm, security: nextSec }
    } : c))
    closeEditModal()
  }

  function openDeleteModal(commentId) {
    setSelectedCommentId(commentId)
    setIsDeleteModalOpen(true)
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false)
    setSelectedCommentId('')
  }

  function handleDeleteConfirm() {
    if (!selectedCommentId) return
    setComments((prev) => prev.filter((c) => c.id !== selectedCommentId))
    closeDeleteModal()
  }

  return (
    <div className='flex flex-col gap-[16px]'>
      {comments.length === 0 && (
        <div className='rounded-[16px] border border-slate-200 bg-white p-[24px] text-center text-slate-600'>
          Henüz bir yorumunuz yok.
        </div>
      )}

      {comments.map((item, index) => {
        const status = getStatusInfoByIndex(index)
        return (
        <div key={item.id} className='rounded-[20px] border border-slate-200 bg-white p-[16px] sm:p-[20px] relative hover:border-primary transition-colors duration-300'>
          <div className='absolute top-[16px] right-[16px] sm:top-[20px] sm:right-[20px] flex items-center gap-[12px] sm:gap-[18px]'>
            <button
              type='button'
              aria-label='Yorumu düzenle'
              title='Düzenle'
              onClick={() => openEditModal(item.id)}
              className='text-slate-500 hover:text-primary transition-colors'
            >
              <FiEdit2 className='text-[18px] cursor-pointer' />
            </button>
            <button
              type='button'
              aria-label='Yorumu sil'
              title='Sil'
              onClick={() => openDeleteModal(item.id)}
              className='text-slate-500 hover:text-red-600 transition-colors'
            >
              <FiTrash className='text-[18px] cursor-pointer' />
            </button>
          </div>

          <div className='flex items-center gap-[12px] mb-[12px]'>
            <div className='relative h-[28px] w-auto'>
              <Image draggable={false} src={item.bank.logo} alt={`${item.bank.name} logo`} width={100} height={28} className='h-[28px] w-auto object-contain select-none' />
            </div>
            <span className='sr-only'>{item.bank.name}</span>
          </div>

          <div className='border-t border-slate-200 my-[12px]' />

          <p className='text-[14px] text-slate-900 leading-[20px]'>
            {item.text}
          </p>

          <div className='border-t border-slate-200 my-[16px]' />

          <div className='flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-[10px] sm:gap-y-[12px] gap-x-[16px] sm:gap-x-[24px] lg:gap-x-[48px]'>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <span className='text-[13px] font-semibold leading-4 text-slate-900'>Kredi Verme Durumu</span>
              <StarWithValue value={item.ratings.creditApproval} />
            </div>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <span className='text-[13px] font-semibold leading-4 text-slate-900'>İletişim</span>
              <StarWithValue value={item.ratings.communication} />
            </div>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <span className='text-[13px] font-semibold leading-4 text-slate-900'>Güvenlik</span>
              <StarWithValue value={item.ratings.security} />
            </div>
          </div>
          <div className='mt-[12px] md:mt-0 md:absolute md:bottom-[10px] md:right-[20px]'>
            <span className={`inline-flex items-center gap-[8px] rounded-full border px-[12px] py-[6px] text-[12px] font-semibold leading-[16px] ${status.badge}`}>
              <span className={`h-[6px] w-[6px] rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </div>
        </div>
        )
      })}

      {/* Yorum Düzenleme Modal */}
      <ModalComponent isOpen={isEditModalOpen} onClose={closeEditModal} size='md'>
        <div className='flex flex-col gap-[16px]'>
          <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>Yorumu Düzenle</h3>

          <label className='flex w-full flex-col gap-y-[6px]'>
            <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>Yorumunuz</span>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              rows={5}
              className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[20px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary transition-colors duration-300 resize-none'
            />
          </label>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[12px]'>
            <label className='flex flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>Kredi Verme</span>
              <input
                type='number'
                min='1'
                max='5'
                step='1'
                value={editCredit}
                onChange={(e) => handleRatingChange('credit', e.target.value)}
                aria-invalid={isInvalidRating(editCredit)}
                className={`w-full rounded-[10px] bg-white px-[12px] py-[10px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none transition-colors duration-300 ${isInvalidRating(editCredit) ? 'border border-red-500 focus:border-red-600' : 'border border-slate-200 hover:border-slate-400 focus:border-primary'}`}
              />
            </label>
            <label className='flex flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>İletişim</span>
              <input
                type='number'
                min='1'
                max='5'
                step='1'
                value={editCommunication}
                onChange={(e) => handleRatingChange('communication', e.target.value)}
                aria-invalid={isInvalidRating(editCommunication)}
                className={`w-full rounded-[10px] bg-white px-[12px] py-[10px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none transition-colors duration-300 ${isInvalidRating(editCommunication) ? 'border border-red-500 focus:border-red-600' : 'border border-slate-200 hover:border-slate-400 focus:border-primary'}`}
              />
            </label>
            <label className='flex flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>Güvenlik</span>
              <input
                type='number'
                min='1'
                max='5'
                step='1'
                value={editSecurity}
                onChange={(e) => handleRatingChange('security', e.target.value)}
                aria-invalid={isInvalidRating(editSecurity)}
                className={`w-full rounded-[10px] bg-white px-[12px] py-[10px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none transition-colors duration-300 ${isInvalidRating(editSecurity) ? 'border border-red-500 focus:border-red-600' : 'border border-slate-200 hover:border-slate-400 focus:border-primary'}`}
              />
            </label>
          </div>

          {editError && (
            <div className='text-red-600 text-[12px] leading-[16px] pl-[12px]' role='alert'>{editError}</div>
          )}

          <FeaturedButtonComponent
            text='Kaydet'
            buttonColor='primary'
            addClass='w-full justify-center text-[14px] py-[12px]'
            onClick={handleEditSave}
          />
        </div>
      </ModalComponent>

      {/* Yorum Silme Onayı Modal */}
      <ModalComponent isOpen={isDeleteModalOpen} onClose={closeDeleteModal} size='sm'>
        <div className='flex flex-col gap-[16px]'>
          <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>Yorumu Sil</h3>
          <p className='text-[14px] text-slate-600 leading-[20px]'>Bu yorumu silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[12px]'>
            <button type='button' onClick={closeDeleteModal} className='rounded-full border border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors text-[14px] font-semibold py-[12px] cursor-pointer'>Vazgeç</button>
            <button type='button' onClick={handleDeleteConfirm} className='rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors text-[14px] font-semibold py-[12px] cursor-pointer'>Sil</button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}
