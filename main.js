function addElement() {
  document.body.setAttribute("class", "Site");
  document.body.setAttribute("id", "Site");
  // create the outer container element
  const outerContainer = document.createElement("div");
  outerContainer.setAttribute("class", "Site-content");
  document.body.appendChild(outerContainer);
  // create wrapper container that contains all the other elements
  // all tags bound in the same way to wrapperContainer either directly
  // or through parent.
  const wrapperContainer = document.createElement("div");
  // append wrapperContainer to body
  document.body.appendChild(wrapperContainer);
  // create wrapperContainer class
  wrapperContainer.classList.add("wrapper-container");
  // create app title
  const manipulateDOM = document.createElement("h1");
  // set id attribute
  manipulateDOM.setAttribute("id", "manipulate-dom");
  // set manipulateDOM innerHTML
  manipulateDOM.innerHTML = `Welcome to my DOM manipulation site!`;
  // append manipulateDOM to wrapperContainer
  wrapperContainer.appendChild(manipulateDOM);
  // create new section element
  const newSection = document.createElement("section");
  // append newSection to wrapperContainer
  wrapperContainer.appendChild(newSection);
  // create p tag
  const newPara = document.createElement("p");
  newSection.appendChild(newPara);
  const newContent = document.createTextNode(
    "I just created my first HTML elements!"
  );
  newPara.appendChild(newContent);
  // add new elements and their content to the DOM
  //   const bodySection = document.getElementById("Site");
}
// when the body loads, the addElement function will load
document.body.onload = addElement;
