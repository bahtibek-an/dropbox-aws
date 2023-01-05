import React, { useState } from "react";
import { uploadFile } from "../../helperFn";
import { createFolder } from "../../helperFn";


const Navbar = ({ currentFolder, node }) => {
    const [ folder, setFolder ] = useState('');
    
    const uploadFolder = (e, node) => {
        console.log(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createFolder(currentFolder, folder + '/');
    }

    return (
        <div className="flex mt-4">
            <input type="file"  id="folder" webkitdirectory="true" multiple onChange={(e) => uploadFile(e, node)} />
            {/* <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" onChange={e => setFolder(e.target.value)}/>
                <button type="submit">Create</button>
            </form> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4" type="button">Upload</button>
            <button className="bg-slate-200 text-dark font-bold py-1 px-4 ml-4" type="button">Create</button>
        </div>
    );
}

export default Navbar;