import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FileItem from "./FileItem";


const Files = ({ node }) => {
    const currentFolder = node.__data?.key || "home";
    const files = Object.keys(node);

    useEffect(() => {
        window.document.title = currentFolder;
    });
    
    return (
    <Routes>
      <Route
        index
        element={<FileItem node={node}/>}
      />
      {files?.map((item) => (
        <Route
          key={item}
          path={`${item}/*`}
          element={<Files node={node[item]} />}
        />
      ))}
    </Routes>
    );
}

export default Files;