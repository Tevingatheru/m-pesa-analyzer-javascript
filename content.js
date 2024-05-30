document.getElementById("uploadButton").addEventListener("click", function () {
  const fileUpload = document.getElementById("fileUpload");
  const file = fileUpload.files[0];

  console.log("file: ", file);
  if (!file) {
    alert("Please select a file");
    return;
  }
  const pdfExtention = /\.pdf$/i;
  if (!pdfExtention.exec(file.name)) {
    alert("Invalid file type. Please select a PDF");
    return;
  }

  const message = {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    file: file,
  };

  var myExtensionId = chrome.runtime.id;

  console.log("message:", message, "Extention: ", myExtensionId);
  chrome.runtime.sendMessage(myExtensionId, message, function (response) {
    try {
      if (chrome.runtime.lastError) {
        console.error("runtime: ", chrome.runtime.lastError.message);
      } else {
        console.log("Received response:", response);
      }
    } catch (error) {
      console.error("runtime error: ", error);
    }
  });
});
