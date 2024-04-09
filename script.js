// RGB Colors

document.getElementById("previewBtn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let r = +document.getElementById("redBG").value;
  let b = +document.getElementById("greenBG").value;
  let g = +document.getElementById("blueBG").value;
  //process
  let colour = "rgb(" + r + ", " + g + ", " + b + ")";
  //output
  document.getElementById("rgbTxt").innerHTML = colour;
  document.getElementById("display").style.background = colour;
  
}
//Black Button
document.getElementById("blackBtn").addEventListener("click", blackBtnClicked);

function blackBtnClicked() {
  //process
  let black = "rgb(0, 0, 0)";
  //output
  document.getElementById("rgbTxt").innerHTML = black;
  document.getElementById("display").style.background = black;
}
//White Button
document.getElementById("whiteBtn").addEventListener("click", whiteBtnClicked);

function whiteBtnClicked() {
  //process
  let white = "rgb(255, 255 ,255)";
  document.getElementById("rgbTxt").innerHTML = white;
  document.getElementById("display").style.background = white;
}
