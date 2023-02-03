export function createElement(type, ...args) {
  //--set potential known parameter variables -//
  let attributes, eventHandler, inrText, rID;

  // -- loop over argumets array
  //-- set variable to parameter based on test --//
  args.forEach((el) => {
    if (typeof el === "string" && /[0-9]/.test(el)) {
      rID = el;
    } else if (typeof el === "object") {
      attributes = el;
    } else if (typeof el === "function") {
      eventHandler = el;
    } else if (typeof el === "string" && !/[0-9]/.test(el)) {
      inrText = el;
    } else {
      console.log("parameter not found");
    }
  });

  //-- create element with type parameter --//
  let element = document.createElement(type);

  //-- run a for in loop on attributes objec --//
  //-- set properties from attributes object to element object --//
  //-- unless value is redefined by later argument
  //--e.g innerText rID
  //-- need to use bang operator to use double bang to convert truthey to true
  for (let key in attributes) {
    // may be better to set inner text content on outside
    if (key === "class") {
      element.classList.add(...attributes[key]);
    } else if (key === "innerText" && !!inrText) {
      //-- if the key === innertext and inrtext exists
      //-- create an elemt key inner text
      //-- set the vallue to inrText
      //Note: only using || (or) operator can create duplicate values
      element[key] = inrText;
    } else if (key === "id" || (key === "id" && !!rID)) {
      element[key] = rID ? rID : attributes[key];
    } else {
      //-- this takes care or alt, src, and other keys
      element[key] = attributes[key];
    }
  }
  console.log(element.id);
  if (!element.id) {
    element.id = null;
  }

  //-- if typeof type === img dont set inner text and set alt instead with inner text
  /* if (typeof type === "img"){
    element.alt = 
  }
*/
  console.log(element.innerText);
  if (!element.innerText) {
    element.innerText = inrText ? inrText : null;
  }
  // note: null appeas as litteral empty space in the browser
  console.log(element.innerText);
  console.log(element);
  //-- if evenHandler included add event hanler to element
  if (eventHandler) {
    element.addEventListener("click", eventHandler);
  }
  //Note: if elemet does not have inner text,html or content
  //it will not visibley show in the web brwoser
  return element;
}
