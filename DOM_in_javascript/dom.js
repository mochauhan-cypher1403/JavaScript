const pageTitle = document.getElementById("page-title");
console.log(pageTitle);

document.getElementById('page-title').id

//----------How to get and set attributes----------------
document.getElementById('page-title').setAttribute('data-custom-attribute', 'value');
console.log(document.getElementById('page-title').getAttribute('data-custom-attribute'));

//-------- How to get out content from the <title>----------------
document.getElementById('title').innerHTML; // This will give the HTML content inside the <title> tag.
document.getElementById('page-title').textContent; // This will give the content which is not even visible because of the display value or because of hidden properties.
document.getElementById('page-title').innerText; // Only the text which is visible to the user.

document.getElementsByClassName('class-name'); // This is going to return the html collection of elements with the class name 'class-name'.

/*
Some most useful query selector 

document.querySelector('h2'); // This will give me the first h2 tag - this query selector selects the first item only.
document.querySelector('#page-title'); // This will select the element with the id 'page-title'.
document.querySelectorAll('.class-name'); // This will select all elements with the class name 'class-name'.

document.querySelector('div > p'); // This will select the first <p> element that is a child of a <div>.
document.querySelector('input[type="text"]'); //Selecting the input field with the type text.

*/

//----------Let's suppose we need to change the first list item color in a ul------
document.querySelector('ul li:first-child').style.color = 'red';

//---------------How to select multiple elements-------------------------
const listItems = document.querySelectorAll('ul li');
listItems.forEach(item => {
    item.style.color = 'blue';
});
/*
The type of listItems is NodeList, which is similar to an array but not exactly the same.
This is an array-like collection of DOM nodes returned by methods like querySelectorAll, childNodes, etc.
- NodeList supports forEach, but not all array methods (like map, filter, etc.)
- This could contain any type of nodes (elements, text node, comments) not just elements like HTML collection 
*/

const myH1 = document.querySelectorAll('h1'); // This will contain the node list.
console.log(myH1 instanceof NodeList); // true

//--------------Using getElementByClassName()---------------------
const myElements = document.getElementsByClassName('class-name'); // This will contain the HTMLCollection.

//---------------Selecting all the child elements in the div with class first-div---------------
const childElements = document.getElementsByClassName('first-div')[0].children; //This would be returning me the HTML Collection.
const childElementsNodeList = document.getElementsByClassName('first-div')[0].childNodes; // This will give all the child nodes including text nodes and comment nodes.

