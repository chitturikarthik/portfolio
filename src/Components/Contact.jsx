import React from 'react'
import {CONTACT} from '../constants'

const Contact = () => {
  return (
    <div className='pb-20'>
        <h1 className='my-10 text-center text-5xl bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent font-semibold dark:text-neutral-200 py-2'>Get in Touch</h1>
        <div className='text-center tracking-tight'>
            <p className='my-4 text-blue-500 dark:text-gray-50'>{CONTACT.address}</p>
            <p className='my-4 text-blue-500 dark:text-gray-50'>{CONTACT.phoneNo}</p>
            <p className='my-4 text-blue-500 dark:text-gray-50'>{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact