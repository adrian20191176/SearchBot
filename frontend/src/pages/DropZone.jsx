import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadPDF } from '../services/upload'
  
export default function Dropzone() {
  
  const onDrop = useCallback(acceptedFiles => {
    alert(acceptedFiles[0].name)
    uploadPDF(acceptedFiles[0]).then(response => console.log(response))
  }, [])
  
  const { getInputProps, getRootProps } = useDropzone({ onDrop })
  
  return (
    <div style={{ display: 'block' }}>
      <h4>React-Dropzone Module Demo</h4>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Click to select file or 
           drag-and-drop the file here!!</p>
  
      </div>
    </div>
  );
}
