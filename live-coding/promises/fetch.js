// const http = new XMLHttpRequest();

// http.onreadystatechange = () => {
//   if (http.readyState == 4) {
//     console.log(http.status);
//     console.log(http.responseText);
//   }
// }

// http.open("GET", "messag.txt");
// http.send();

// console.log("Started download...");

// 


async function downloadFileContent(path) {
  let response, text;
  try {
    response = await fetch("message.txt");

    if(response.status !== 200) {
      throw new Error("Unable to download content of file");
    }

    text = await response.text();
    console.log(text);
  } catch (err) {
    console.error(err);
  }

}

downloadFileContent();
console.log("---");