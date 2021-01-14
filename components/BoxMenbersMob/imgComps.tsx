import React from 'react';

export function ImgComp({src}) {
  let imgStyles = {width:100 + "%", height: "auto"}
  return (
  <div className="w-30 h-50 bg-blue">
  <img src={src} alt='img' style={imgStyles} />
  </div>

  )}