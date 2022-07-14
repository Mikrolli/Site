import React from "react";

const CertificateItem = (props) => {
  return (
    <div className="group border-2 rounded-lg p-2">
      <div className="w-full rounded-lg overflow-hidden">
        <img
          src={props.certif.img}
          alt={props.certif.imgAlt}
          className="w-full h-full object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.certif.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {props.certif.name}
      </p>
    </div>
  );
};

export default CertificateItem;
