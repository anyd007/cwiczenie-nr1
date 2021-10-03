const img1 = document.querySelector('.item1');
const img2 = document.querySelector('.item2');
const btnArrow = document.querySelector('.arrow');
const srcArrow = document.querySelector('.fas');
const sectionPhoto = document.querySelector('.photos');
const text1 = document.createElement('h1');


document.body.append(text1)
text1.textContent = 'witam wsztskich...:)'
text1.classList.add('hideText');


const fun1 = () =>{
    img1.classList.toggle('hide');
    img1.classList.toggle('itemChange');
    img2.classList.toggle('itemChange2');
    srcArrow.classList.toggle('fa-arrow-up');
    text1.classList.toggle('hideText');
}


btnArrow.addEventListener('click', fun1);





