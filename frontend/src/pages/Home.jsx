import { getChat } from "../services/chat";
import React, { useCallback } from 'react'

import Dropzone from "./DropZone";
import { Grid,Paper } from "@mui/material";
import './Home.css';
import { useDropzone } from 'react-dropzone'
import { uploadPDF } from '../services/upload'


const Home = () => {

  const onDrop = useCallback(acceptedFiles => {
    uploadPDF(acceptedFiles[0]).then(response => console.log(response))
  }, [])

  
  const { getInputProps, getRootProps } = useDropzone({ onDrop })

  return (<>
  
  {/* <h1 id="trial">Find your Information  </h1> */}
      <div class="container">
  <div class="card">
    <h3 id="heading">Upload PDF</h3>
    <div {...getRootProps()} class="drop_box">
      <header>
        <h4>Drop File here</h4>
      </header>
      <p>Only PDF file format is allowed</p>
      <input {...getInputProps()} hidden id="fileID" style={{display:null}}/>
      <button class="btn">Choose File</button>
    </div>

  </div>
</div>
  </>)
}

export default Home;