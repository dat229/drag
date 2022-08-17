import React, { useRef, useState } from 'react'

import './drop-file-input.css';

import { listImg } from '../../config/listFile';

import imgFile from '../../assets/cloud-upload-regular-240.png';

const DropFileInput = () => {

  const dropFile =  useRef();
  
  const [listFile,setListFile] = useState([]);

  const onDragEnter = () => {
    dropFile.current.classList.add('active');
  }

  const onDragLeave = () => {
    dropFile.current.classList.remove('active');
  }

  const onDrop = () => {
    dropFile.current.classList.remove('active');
  }

  const onChange = (e) => {
    const newfile = e.target.files[0];
    setListFile([...listFile,newfile])
  }

  const closeItem = (e,item) =>{ 
    e.stopPropagation();
    const items = listFile.filter((i) => i!==item);
    setListFile(items);
  }
  return (
    <div className='drop-file'>
        <div ref={dropFile} className='drop-file__content '>
          <div className='drop-file__content__img'>
              <img src={imgFile} alt="" />
              <span>Drag & Drop your files here or Click to browse file</span>
          </div>
          <input type="file" 
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onChange={onChange}
          />
        </div>
        <ul className='list-file'>
          {
            listFile.length>0 ? 
            listFile.map((item,i)=>(
              <li key={i} className='list-file__item'>
                <img src={listImg[item.type.split("/")[1]] ? 
                          listImg[item.type.split("/")[1]] : 
                          listImg['default']} 
                      alt="" 
                />
                <div className='list-file__item__content'>
                  <span className='list-file__item__content__name'>{item.name}</span>
                  <span className='list-file__item__content__size'>{item.size}</span>
                </div>
                <span className="list-file__item__close"
                      onClick={(e)=>closeItem(e,item)}
                >x</span>
              </li>
            )) :
            null
          }
        </ul>
    </div>
  )
}

export default DropFileInput