import React, { useState } from "react";
import { downloadBlob } from "../../helperFn";
import { Storage } from "aws-amplify";
import { Link } from "react-router-dom";
import Breadcrumb from "../templates/Breadcrumb";
import Navbar from "../templates/Navbar";

const FileItem = ({ node }) => {
    const currentFolder = (node.__data?.key || '');
    const files = Object.keys(node);
    
    const downloadFile = async (name) => {
        const fileName = name.split('/');
        const result = await Storage.get(name, { download: true, level: "protected" });
        downloadBlob(result.Body, fileName[fileName.length - 1]);
    }
    
    return (
        <>
        <div className="my-4 px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="border-b pb-3">
                <Breadcrumb node={node}/>
            </div>
            <Navbar currentFolder={currentFolder} node={node}/>
        </div>
        <div className="border">
            <ul>
                {currentFolder && (
                    <Link to="..">
                        <li className="border p-2 hover:bg-gray-200">..</li>
                    </Link>
                )}
                {files?.map((item) => (
                    (item !== "__data") && (
                        node[item].__data.size > 0
                        ? (
                            <li key={item} 
                                className="border p-2 hover:bg-gray-200" 
                                onClick={() => downloadFile(node[item].__data.key)}>
                                {item}
                            </li>
                        ) : (
                            <Link key={item} to={item}>
                                <li key={item} 
                                    className="border p-2 hover:bg-gray-200">
                                    {`${item}/`}
                                </li>
                            </Link>
                        )
                    )
                ))}
            </ul>
        </div>
        </>
    );
}
export default FileItem;