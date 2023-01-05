import React, { useEffect, useState } from "react";
import { Storage } from 'aws-amplify';
import processStorageList from "../../helperFn";
import Files from "./Files";


const FilesList = () => {
    const [ files, setFiles ] = useState({});

    const getFiles = async () => {
        const files = await Storage.list("", { level: "protected" });
        const navFiles = processStorageList(files); 
        setFiles(navFiles);
    }
    
    useEffect(() => {
        getFiles();
    }, []);
    
    return Object.keys(files).length > 0 && (
        <Files node={files}/>
    );
};

export default FilesList;