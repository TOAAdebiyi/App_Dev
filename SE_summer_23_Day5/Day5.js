console.log('Terence O Adebiyi')
let myText = document.querySelector('#userName p:nth-child(2)')
myText.computedStyleMap.color = 'darkred'

document.querySelector('.name1').computedStyleMap.backgroundColor = 'coral'

/*----- querySelector----*/

let myName =document.querySelectorAll('#userName p')
for(let i=0; i< myName; length. i++){
    myName[i].style.color="darkgreen"

//----Change the font size of all odds <p></p>-----//

if(i%2===0){
    myName[i].style.fontSize ="2em"

}
}

//-----innerHTML-------//

let myDiv =document.querySelectorAll('p')[1]
myDiv.innerHTML = 'New text content using <em><b>innerHTML</b></em>'

/*-----classList.add()-----*/

document.querySelector('h1').classList.add('subtitle')

/*------testing parent/siblings/child------*/

let listItem = document.querySelector('li:nth-child(2)')

/*--------creating El;ements and text nodes------*/

// step 1: creat an element //
let myPara = document.createElement('p')

//step 2: creat a content  //
let mySentence = document.createTextNode('This is the Text of the new paragragh')

//step 3A: append the text node into the new element //

myPara.appendChild(mySentence)
myPara.classList.add('subtitle')

// step 3B: append the new element, with text node, to the document  //

document.querySelector('div').appendChild(myPara)

/*------ REMOVE ELEMENT------*/

let myItem = document.querySelector('ul')
myItem.removeChild(myItem.lastElementChild)

/*---- Event-----*/

let btn = document.querySelector('btn1')
btn.onclick = function(){alert('Hello People')}

/*----- example guess a number-----*/

let randomNumber = function(){
    let radium = Math.cell(math.random()*9)
    return radium
}
let guessNumDiv = document.querySelector('.guessNumber')
let btnGuess = document.querySelector('.btnGuessNum')

btnGuess.addEventListener('click',function(){
guessNumDiv.innerHTML = randomNum()

})
/*----- mouse events---*/

let btnMouseEvent = document.querySelector('btnMouseEvent')
let mouseoutDisplay = document.querySelector('.mouseoutDisplay')
let dblClickDisplay = document.querySelector('dblClickDisplay')
let mouseoutCounter = 0
btnMouseEvent.addEventListener('mouseout', function(){
    mouseoutCounter++
    mouseoutDisplay.innerHTML =mouseoutCounter
})
btnMouseEvent.addEventListener('dblClick', function(){
    dblClickDisplay.innerHTML +='dblcClick'
})


