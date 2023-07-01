document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

// Save data to localStorage
function saveData(key, value) {
  localStorage.setItem(key, value);
}

// Get data from localStorage
function getData(key) {
  return localStorage.getItem(key);
}

// Example usage
const htmlCode = document.querySelector("#htmlCode");
const cssCode = document.querySelector("#cssCode");
const jsCode = document.querySelector("#jsCode");

htmlCode.addEventListener("input", () => {
  saveData("htmlCode", htmlCode.value);
});

cssCode.addEventListener("input", () => {
  saveData("cssCode", cssCode.value);
});

jsCode.addEventListener("input", () => {
  saveData("jsCode", jsCode.value);
});

window.addEventListener("load", () => {
  const savedHtmlCode = getData("htmlCode");
  const savedCssCode = getData("cssCode");
  const savedJsCode = getData("jsCode");

  if (savedHtmlCode) {
    htmlCode.value = savedHtmlCode;
  }

  if (savedCssCode) {
    cssCode.value = savedCssCode;
  }

  if (savedJsCode) {
    jsCode.value = savedJsCode;
  }
});
