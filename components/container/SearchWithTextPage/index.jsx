import React from 'react'
import LoanSearchComponent from '@/components/container/LoanSearchComponent'

function SearchWithTextPage({ slug, text }) {
  return <LoanSearchComponent slug={slug} showResults={false} introText={text} />
}

export default SearchWithTextPage


