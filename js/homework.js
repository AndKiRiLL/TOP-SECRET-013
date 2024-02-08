
let centerX = document.documentElement.clientWidth / 5;
let centerY = document.documentElement.clientHeight / 8;

let elem = document.elementFromPoint(centerX, centerY)

/////// Работа с классами //// Created Andriyanov ////

// 1.
// elem.classList.add("www")
// console.log(elem)

// 2.
// elem.classList.add("www")
// elem.classList.remove("www")
// console.log(elem)

// 3.
// console.log(elem.classList.contains("www"))
// console.log(elem)

// 4.
// elem.classList.toggle("www")
// console.log(elem)

// 5.
// elem.classList.add("www")
// elem.classList.add("ggg")
// elem.classList.add("kkk")

// let length = elem.classList.length;
// alert(length)
// console.log(elem)

// 6.

// elem.classList.add("www")
// elem.classList.add("ggg")
// elem.classList.add("kkk")

// let classNames = elem.classList;

// for (let i of classNames) {
//     alert(i)
// }
// console.log(elem)

///////// Работа с CSS //// Created Andriyanov ////

// elem.style.cssText = 'color: red; font-size: 30px; border: 3px solid black; margin: 25px; padding: 25px;' 
// console.log(elem)


////// Получение элемента на координатах мыши //// Created Andriyanov ////
let elem_global = document.getElementById('html')

elem_global.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;

    elem2 = document.elementFromPoint(x, y)
})

///////// Свойство tagName //// Created Andriyanov ////

// 1.
// function elem_check() {
//     alert(elem2)
// }

// 2.
// function elem_check() {
//     alert(elem2.tagName.toLowerCase());
// }


// 3.
// let elem_class = document.getElementsByClassName('www');

// for (let i = 0; i < elem_class.length; i++) {
//     elem_class[i].innerHTML += ' ' + elem_class[i].tagName.toLowerCase();
//     console.log(elem_class[i])
// }


//////// Вставка элементов через appendChild //// Created Andriyanov ////

// 1.
// let elem_ol = document.getElementById('list');

// for (let i = 0; i < 3; i++)
// {   
//     let li = document.createElement('li');
//     li.innerHTML = 'пункт';
//     elem_ol.appendChild(li);
// }


// 2.
// let array = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < array.length; i++) {
//     let ul = document.getElementById('list2');
//     let li = document.createElement('li');
//     li.innerHTML = array[i];
//     ul.appendChild(li)
// }


//////////// Вставка элементов через insertAdjacentHTML //// Created Andriyanov ////

let elem_title = document.getElementById('title');

// 1.
// elem_title.insertAdjacentHTML('beforeBegin', '<span>!!!</span>')

// 2.
// elem_title.insertAdjacentHTML('afterEnd', '<span>!!!</span>')

// 3.
// elem_title.insertAdjacentHTML('afterBegin', '<span>!!!</span>')

// 4.
// elem_title.insertAdjacentHTML('beforeEnd', '<span>!!!</span>')


///////////// Удаление и клонирование //// Created Andriyanov ////

// 1.
function child_delete() {
    let parent = document.querySelector('#parent');
    let child = document.querySelector('#child');

    parent.removeChild(child)
}

// 2.
function child_delete_last() {
    let child = document.querySelector('#child2')
    child.parentElement.removeChild(child.parentElement.lastElementChild)
}

// 3.
function deleted_elements() {
    elem2.parentElement.removeChild(elem2)
}

// 4.
function delete_elements_list() {
    elem2.parentElement.removeChild(elem2)
}

// 5.
function copy_element() {
    let parent = document.getElementById('parent_copy')
    let elem = document.getElementById('input')

    let copy = elem.cloneNode(true)
    parent.appendChild(copy)
}

//////// Потомки //// Created Andriyanov ////
let parent = document.getElementById('list_parent')

// 1.
let first_child = parent.firstElementChild
first_child.style.color = 'red';

// 2.
let last_child = parent.lastElementChild
last_child.style.color = 'red';

// 3.
let all_childs = parent.children
for (let i = 0; i < all_childs.length; i++)
{
    all_childs[i].insertAdjacentHTML('beforeEnd', '<span>!</span>')
}

////////////////// Соседи //// Created Andriyanov ////
let elem_li = document.querySelector('.there')

// 1.
let elem_previous = elem_li.previousElementSibling
elem_previous.insertAdjacentHTML('beforeEnd', '<span>!</span>')

// 2.
let elem_next = elem_li.nextElementSibling
elem_next.insertAdjacentHTML('beforeEnd', '<span>!</span>')

// 3.
let elem_next_two = elem_li.nextElementSibling.nextElementSibling
elem_next_two.insertAdjacentHTML('beforeEnd', '<span>!</span>')

/////////////////// Родители //// Created Andriyanov ////
let deleted_elems_h1 = document.getElementById('deleted_elems_h1')

// 1.
deleted_elems_h1.parentNode.style.color = 'red';

// 2.
//deleted_elems_h1.parentNode.parentNode.style.color = 'red';


///////////////// На величину границы //// Created Andriyanov ////

// 1.
function show_top_border() {
    alert(border_block.clientTop + ' px')
}

// 2.
function show_left_border() {
    alert(border_block.clientLeft + ' px')
}

////////////////// На полный размер элемента //// Created Andriyanov ////

// 1.
function show_width() {
    alert(border_block.offsetWidth + ' px')
}

// 2.
function show_height() {
    alert(border_block.offsetHeight + ' px')
}


///////////////// На размер элемента без границ, но с padding //// Created Andriyanov ////

// 1.
function show_internal_part_width() {
    alert(border_block.clientWidth + ' px')
}

// 2.
function show_internal_part_height() {
    alert(border_block.clientHeight + ' px')
}

//////////////// Работа с getComputedStyle //// Created Andriyanov ////

// 1.
function show_content_size() {
    let style = getComputedStyle(border_block)
    alert('Длина: ' + style.width + '\n' + 'Высота: ' + style.height)
}

///////////////// Прокрутка элемента //// Created Andriyanov ////

// 1.
function show_scroll_top() {
    alert(border_block.scrollTop + ' px')
}

// 2.
function show_scroll_left() {
    alert(border_block.scrollLeft + ' px')
}

// 3.
function scroll_top_100px() {
    border_block.scrollTop = 100
}

// 4.
function scroll_plus_100px() {
    let curent_height = border_block.scrollTop
    border_block.scrollTop = curent_height + 100
}


////////////////////// Прокрутка элемента //// Created Andriyanov ////

// 1.
function show_real_height(){
    alert(border_block.scrollHeight)
}

// 2.
function show_real_width() {
    alert(border_block.scrollWidth)
}

// 3.
function scroll_bottom_100px() {
    let height = border_block.scrollHeight
    //border_block.scrollTop = (height - 100) // этот способ соответсвует условию, но функционалу нет ниже тот что работает правильнее
    let height_window = border_block.clientHeight
    border_block.scrollTop = (height - height_window) - 100 // Этот метод выполняет функционал
}

///////////////////// Прокрутка страницы //// Created Andriyanov ////

// 1.
function show_page_yoffset() {
    alert('Текущая прокрутка сверху: ' + window.pageYOffset)
}

// 2.
function show_page_xoffset() {
    alert('Текущая прокрутка слева: ' + window.pageXOffset)
}

//////////////////// Прокрутка страницы //// Created Andriyanov ////

// 1.
function window_scroll_300_500() {
    window.scrollTo({
            top: 500,
            left: 300,
            behavior: "smooth"
        });
}

// 2.
function window_scroll_plus_100() {
    window.scrollTo({
        top: window.pageYOffset + 100,
        behavior: "smooth"
    });
}

////////////////// Практика //// Created Andriyanov ////

// 1.
function window_scroll_bottom() {
    let body_height = document.getElementById('body')
    window.scrollTo({
        top: body_height.offsetHeight,
        behavior: "smooth"
    });
}

// 2.
function window_scroll_plus_400px() {
    let y = window.pageYOffset
    window.scrollTo({
        top: y + 400,
        behavior: "smooth"
    });
}

// 3.
function check_scroll_bottom() {
    let window_y = window.pageYOffset
    let window_height = window.innerHeight - 17

    if (window_y + window_height === document.documentElement.scrollHeight) {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });
    } else {
        alert('Страница прокручена не до самого низа')
    }
}

// 4.
function element_size_2x() {
    let elem_width = elem2.offsetWidth
    let elem_height = elem2.offsetHeight

    elem2.style.width = `${elem_width * 2}px`;
    elem2.style.height = `${elem_height * 2}px`;
}