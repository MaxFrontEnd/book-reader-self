const xhr = new XMLHttpRequest();

function xget(URL) {
  xhr.open("GET", URL, true);
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        return xhr.statusText;
      } else {
        console.error(xhr.statusText);
      }
    }
  };

  xhr.onerror = () => {
    console.error(xhr.statusText);
  };

  xhr.send();
}

export * from "./lib_getXHR";
