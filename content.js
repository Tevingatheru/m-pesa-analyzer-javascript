document.getElementById("uploadButton").addEventListener("click", function () {
  const fileUpload = document.getElementById("fileUpload");
  const file = fileUpload.files[0];

  if (!file) {
    alert("Please select a file");
    return;
  }

  if (!/\.pdf$/.test(file.name)) {
    alert("Invalid file type. Please select a PDF");
    return;
  }

  const message = {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
  };
  var myExtensionId = chrome.runtime.id;
  
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("message:", message, "Tab: ", tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id, message, null, function (response) {
      try {
        if (chrome.runtime.lastError) {
          console.error("tabs: ", chrome.runtime.lastError.message);
        } else {
          console.log("Received response:", response);
        }
      } catch (error) {
        console.error("tabs error: ", error);
      }
    });
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
