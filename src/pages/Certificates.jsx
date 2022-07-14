import React, { useState } from 'react';
import CertificatesList from '../components/certificatesCard/CertificatesList';
import CertificatesCardList from '../mocks/CertificatesCardList';

const Certificates = () => {
  const [certificate, setCertificate] = useState(CertificatesCardList)

  return (
    <div className='max-w-[1240px] w-full mx-auto py-12 px-4'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 lg:px-6' >
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-2xl text-gray-600 font-bold md:text-4xl'>Наши сертификаты</h2>
        </div>
      </div>
      <CertificatesList certificate={certificate} />
    </div>
  )
}

export default Certificates