const divHeader = document.body.getElementsByTagName('div')
let listDiv = Array.from(divHeader)
const h1 = document.body.querySelector('h1')
const menu = document.body.querySelector('menu')
const button = document.body.getElementsByTagName('button')
let buttonList = Array.from(button)
// console.log(buttonList)

listDiv[0].className = 'header container'
listDiv[1].className = 'header__content'
h1.className = 'logo'
menu.className = 'header__menu'
button[0].className = 'header__menu-button'


const section = document.body.querySelector('section')
const image = document.body.getElementsByTagName('img')
const h3 = document.body.querySelectorAll('h3')
const p = document.body.getElementsByTagName('p')
let listParagraph = Array.from(p)
let listH3 = Array.from(h3)
let listImage = Array.from(image)


section.className = 'gallery'
for (let i=0; i < listImage.length; i++) {
    listImage[i].className = 'gallery__item__image'
}
for (let i = 0; i < listH3.length; i++) {
    listH3[i].className = 'gallery__item__text'
}
for (let i = 2; i < listDiv.length - 2; i++) {
    listDiv[i].className = 'gallery__item'
}
for (let i = 0; i < listParagraph.length - 1; i++) {
    listParagraph[i].className = 'gallery__item__text'
    listParagraph[listParagraph.length - 1].className = 'subscribe__text'
}


const input = document.body.querySelector('input')

listDiv[8].className = 'subscribe'
input.className = 'subscribe__input'
buttonList[1].className = 'subscribe__button'