import { Storage } from "aws-amplify";

function processStorageList(response) {
    const filesystem = {};
    const add = (source, target, item) => {
      const elements = source.split('/');
      const element = elements.shift();
      if (!element) return;
      target[element] = target[element] || { __data: item };
      if (elements.length) {
        target[element] =
          typeof target[element] === 'object' ? target[element] : {};
        add(elements.join('/'), target[element], item);
      }
    };
    response.results.forEach((item) => add(item.key, filesystem, item));
    return filesystem;
}

export default processStorageList;


export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'download';
  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.removeEventListener('click', clickHandler);
    }, 150);
  };
  a.addEventListener('click', clickHandler, false);
  a.click();
  return a;
}


export async function uploadFile(e, path) {
  console.log(e.target.files)
  // const files = e.target.files;
  // const pathFolder = path.__data.key;
  // try {
  //   for(let file of files){
  //     await Storage.put(`${pathFolder}${file.name}`, file, {
  //       level: "protected"
  //     });
  //   }
  // } catch (error) {
  //     console.log(error);
  // }
}

export async function createFolder(path, folderName) {
  try {
    await Storage.put((path + folderName), '', {
      level: "protected"
    });
  } catch (error) {
    console.log(error);
  }
}

export const cutPage = (path, currentPage) => {
  const paths = currentPage.split('/');
  const result = ["home"];
  for(let i = 0;i < paths.length;i++) {
      result.push(paths[i]);
      if(paths[i] === path) break;
  }
  return `/${result.join('/')}`;
}
