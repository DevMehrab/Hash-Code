let morseCode = {
  "a": "#*",
  "b": "*###",
  "c": "*#*#*",
  "d": "*##",
  "e": "*#**",
  "f": "**#*",
  "g": "**##",
  "h": "****",
  "i": "**",
  "j": "#***",
  "k": "#*#*#",
  "l": "#*##",
  "m": "##**",
  "n": "#*#",
  "o": "###",
  "p": "#**#",
  "q": "**#*#",
  "r": "#*#*",
  "s": "***",
  "t": "*",
  "u": "**#",
  "v": "***#",
  "w": "#**",
  "x": "*##*",
  "y": "*#*#",
  "z": "##**#",
  "1": "#****",
  "2": "##***",
  "3": "###**",
  "4": "####*",
  "5": "#####",
  "6": "*####",
  "7": "**###",
  "8": "***##",
  "9": "****#",
  "0": "*****",
  ".": "*###*",
  " ": "/"
}
const switchedObject = {};
  for (const key in morseCode) {
    const value = morseCode[key];
    switchedObject[value] = key;
  }
let input = document.querySelector('textarea')
let cot = document.querySelector('.cot')
let toc = document.querySelector('.toc')
let dataDiv = document.querySelector('.data')
let labelInput = document.querySelector('.input-label')
let copyBtn = document.querySelector('.copy')
let pasteBtn = document.querySelector('.paste')

cot.addEventListener('click',e=>{
  cot.classList.add('active')
  toc.classList.remove('active')
  labelInput.innerHTML='Paste the Code'
  input.value=''
  dataDiv.innerHTML=''
})
toc.addEventListener('click',e=>{
  toc.classList.add('active')
  cot.classList.remove('active')
  labelInput.innerHTML='Write your text'
  input.value=''
  dataDiv.innerHTML=''
})
input.addEventListener('input', e => {
  if (cot.classList[3] === 'active') {
    codeToText(e.target.value)
  }
  else {
    textToCode(e.target.value) 
  }
})
console.log(morseCode);

// let userInput = 'I run Set Studio, a creative agency that specialises in building excellent websites for everyone. We still have some availability for projects starting 2024, too!'

function textToCode(userInput) {
  let text = userInput.toLocaleLowerCase()
  console.log(text)
  let array = []
  for (var i = 0; i < text.length; i++) {
    if (morseCode[text[i]] !== undefined) {
      array.push(morseCode[text[i]])
    }
  }
  console.log(array)
  dataDiv.innerHTML = array.join(' ')
}



function codeToText(userInput) {
  let array = userInput.split(' ')
  let testArr = []
  for (var i = 0; i < array.length; i++) {
    if (switchedObject[array[i]] !== undefined) {
      testArr.push(switchedObject[array[i]])
    }
  }

  dataDiv.innerHTML = testArr.join('')
}

copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(dataDiv.innerHTML)
})
