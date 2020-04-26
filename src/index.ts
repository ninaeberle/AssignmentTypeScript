const enterButton = document.getElementById("enter");
const input = document.querySelector<HTMLInputElement>("#userInput")
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");
const allow = document.querySelector(".button1");
const deny = document.querySelector(".button2");


// TODO LIST
// input length of the To Do List
function inputLength(){
	return input!.value.length;
} 
function listLength(){
	return item.length;
}

// By the function createListElement, new elemts will be createt in the List
function createListElement() {
	const li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input!.value)); //makes text from input field the li text
	ul!.appendChild(li); //adds li to ul
	input!.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	const dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
    }
}

// Items will appear after click
// to add an item to list, something has to be written in the input field
function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event:any) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}

// functions to add an item to the list
// after click on enter button list appears and list items are added to list
enterButton!.addEventListener("click",addListAfterClick);
// after clicking the enter key list appears or items are added to list
input!.addEventListener("keypress", addListAfterKeypress);



// function acceptCookie() {
//     document.getElementById("cookie-popup")!.style.display='none';
//     window.open('https://javascript.info');
// }
// function denyCookie () {
//     window.location="https://dsgvo-gesetz.de";
// }



// POPUP
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn!.onclick = function() {
  modal!.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function(event:any) {
//   modal!.style.display = "none";
// }


// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event:any) {
  if (event.target == modal) {
    modal!.style.display = "none";
  }
}