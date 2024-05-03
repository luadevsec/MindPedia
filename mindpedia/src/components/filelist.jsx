import React from 'react';

function FileList({ files }) {
    return (
      <section id="arquivos">
        <h2>arquivos</h2>
        <ul id="lista-arquivos">
          {files.map((file, index) => (
            <li key={index}>
              <a href={file.url}>{file.name}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

    export default FileList;