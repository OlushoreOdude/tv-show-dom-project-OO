export function newObj2(arr) {
  //console.log(arr);
  let object = Object.assign({}, ...arr);
  return object;
}

export function randomId() {
  let randomId = Math.random().toString(16).slice(6);
  return randomId;
}

// export let randomId = Math.random().toString(16).slice(6);
//maybe an issue with exporting randomId as a variable

//el attribute
export let TestSpan1 = [{ id: `${randomId()}` }, { class: ["classSpan"] }, { innerText: `text` }];

// note cant add place holders in interperlation and use export

export let liElemArr = [{ id: `${randomId()}` }, { innerText: `text` }, { class: ["li-Class"] }];

// Elements for forms and general use //

export let formElemArr = [{ id: `${randomId()}` }, { class: ["form-Class"] }, { innerText: null }];
export let fieldsetElemArr = [
  { id: `${randomId()}` },
  { class: ["fieldset-Class"] },
  { innerText: null },
];
export let legendElemArr = [
  { id: `${randomId()}` },
  { class: ["legend-Class"] },
  { innerText: "place holder" },
];
export let labelElemArr = [
  { id: `${randomId()}` },
  { innerText: "place holder" },
  { class: ["label-Class"] },
  { for: null },
];
export let selectElemArr = [
  { id: `${randomId()}` },
  { innerText: `text` },
  { class: ["select-Class"] },
  { name: null },
];
export let optionElemArr = [
  { id: `${randomId()}` },
  { innerText: `text` },
  { class: ["option-Class"] },
  { value: null },
];

export let buttonElemArr = [
  { id: `${randomId()}` },
  { class: ["button-Class"] },
  { innerText: null },
];
export let spanElemArr = [{ id: `${randomId()}` }, { class: ["span-Class"] }, { innerText: null }];

//-- image tag --//
export let imgElemArr = [
  { id: `${randomId()}` },
  { class: ["img-Class"] },
  { src: null },
  { alt: null },
];

//-- Paragrath tag --//
export let parElemArr = [{ id: `${randomId()}` }, { class: ["img-Class"] }];

//-- Section tag --//
export let sectionElemArr = [{ id: `${randomId()}` }, { class: ["section-Class"] }];

//-- Div tag --//
export let divElemArr = [{ id: `${randomId()}` }, { class: ["div-Class"] }];

//-- h2 tag --//
export let h1ElemArr = [{ id: `${randomId()}` }, { class: ["div-Class"] }];

let arrOfClass = ["paretnUl", "childLi", "image", "title", "color"];

let arrOfElement = ["p", "img", "ul", "span", "li", "div", "section", "h1", "h2", "h3"];

/*
card-section breakdow
- section element = createda and appended to relevant parent when full
class = all-Card-Section
  -section Css 
    - display: flex
    - flex-flow: row wrap;
    - background-color: light color
    - background-image: light image or calculated design

    //-- use map to return an array of flip-containers filled with relevant data, then use append(...ArrayName) to append all children to section --//
 
    //- nested flip component start-//
- div element class = flip-container ( child of section) = create and append to section when full, add event listener to it to initiate flip
  contains flipper
class = flip-container
  flip-container cdd

- div element class ="flipper" (child of flip-container) = creat and append to flip container when full

- div elemet class = "front" (child of flipper) = create and fill
  - div class front css
    - diplay: flex
    - flexdirection: collumn
    - color: 
    - background-color:
    -text-align

  -content of front 
    - majority of data items
    - front has most of the content
  
    elements in front (create fill)
      - h2 // titele class = "h1-front-card"
      - img // picture class = "img-front-card"
      - p// content
      - button?//
    /\ append all to front

div eleemtn class ="back" (child of flipper, sibling of front) = create and fill
- div class back css
  - display: flex;
  - background-color: a color
  - flex-direction: coloum

  elements in back
    - div = create div and fill it with the rest of the info and or some of it






*/
