import React from 'react';

const DownloadLink = () => {

  const onButtonClick = () => {
    const pdfUrl = "Duck cree.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Duck cree.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div>
      <h2> Download Link to Resume</h2>
      {/* Add your resume download link here */}
      <button onClick={onButtonClick}>
                  <a href="#">Download PDF</a>  
                </button>
    </div>
  );
};

export default DownloadLink;
