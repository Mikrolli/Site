import React from 'react'
import CertificateItem from './CertificateItem'

const CertificatesList = ({ certificate }) => {
  return (
    <div className='grid lg:grid-cols-3 gap-y-10 sm:grid-cols-2 gap-x-6 py-5' >
      {certificate.map((certif) => (
        <CertificateItem certif={certif} key={certif.id} />
      ))}
    </div>
  )
}

export default CertificatesList