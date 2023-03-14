import React, { useRef, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import FileDrop from "../../utils/icons/file-drop.svg"
import "./Css/Dropzone.css"
const Dropzonehandle = (props) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
    props.onFileSelect([...files, ...newFiles]);
  };

  const handleFileInputChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
    props.onFileSelect([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    props.onFileSelect([...files, ...newFiles]);
  };

  const dropAreaClass = dragging ? "dragging" : "";

  return (
    <div className="container-fluid">
        <div
          className={`row rounded-4 drop-area ${dropAreaClass}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
            <div className="row text-center">
              <p id="para-font"><span><img className="me-3" src={FileDrop} alt="file-drop"/></span>Drag your document here or <span className="browse" onClick={() => fileInputRef.current.click()}>Browse</span> 
                <input
                  ref={fileInputRef}
                  type="file"
                  hidden
                  onChange={handleFileInputChange}
                  multiple
                />
              </p>
            </div>
          </div>
        <div className="row mt-2 mb-2">
          <div className="col-sm-3">
            <ul className="list-group">
              {files.map((file, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center" onChange={props.onChange} >
                  <img className="me-3" src={FileDrop} alt="file-drop"/>{file.name}
                  <FaTimesCircle className="icon-color" onClick={() => removeFile(index)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Dropzonehandle;
