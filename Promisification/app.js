// without Promise

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };
}

function loadScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = (error) => callback(error);

  document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);
console.log(loadScriptNew);

// loadScript("test.js", (err, script) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Script Loaded");
//   }
// });

loadScript("test.js")
.then(() => console.log("DOne.")).catch((err) => console.log("Error"));
