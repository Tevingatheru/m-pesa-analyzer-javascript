chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received message:", request);
  if (request.file) {
    var file = request.file;
    var allowedExtensions = /\.pdf$/i;
    console.log("Received file:", file);
    if (!allowedExtensions.exec(request.fileName)) {
      console.log("Invalid file type", request);
      alert("Invalid file type");
      sendResponse({ success: false, message: "Invalid file type" });
      return false;
    }

    processFile(file)
      .then(() => {
        sendResponse({ success: true, message: "File processed successfully" });
      })
      .catch((error) => {
        sendResponse({ success: false, message: error.message });
      });

    return true;
  } else {
    sendResponse({ success: false, message: "Bad request." });
  }
});

function processFile(file) {
  return new Promise((resolve, reject) => {
    try {
      console.log(`Processing file: ${file.name}`);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

