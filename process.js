// chrome.runtime.onMessage
//     .addListener(
//         function (request, sender, sendResponse) {
//         console.log("Received message:", request);
//         if (request.file) {
//             var file = request.file;
//             var allowedExtensions = /(\.pdf)$/i;
//             if (!allowedExtensions.exec(file.name)) {
//                 alert('Invalid file type');
//                 sendResponse({ success: false, message: 'Invalid file type' });
//                 return false;
//             }

//             processFile(file)
//                 .then(() => {
//                     sendResponse({ success: true, message: 'File processed successfully' });
//                 })
//                 .catch((error) => {
//                     sendResponse({ success: false, message: error.message });
//                 });

//             return true; 
//         }
//     });

// function processFile(file) {
//     return new Promise((resolve, reject) => {
//         try {            
//             console.log(`Processing file: ${file.name}`);
//             resolve();
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    sendResponse({response: "Message received"});
  });