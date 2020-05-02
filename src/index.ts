const enterButton = document.getElementById("enter");
const input = document.querySelector<HTMLInputElement>("#userInput")
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");
const fadeAway = document.getElementById('myModal')!;
const noThanks = document.getElementById('button2')!;
const toStore = document.getElementById('button1')!;
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");




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
	const li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input!.value)); 
	ul!.appendChild(li); 
	input!.value = ""; 


	// marks elements as 'done'
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

// button apears to delete items
	const dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);


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
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}

// functions to add an item to the list
// after click on enter button list appears and list items are added to list
enterButton!.addEventListener("click",addListAfterClick);
// after clicking the enter key list appears or items are added to list
input!.addEventListener("keypress", addListAfterKeypress);



// POPUP
// funktion to close the popup by the button 'noThanks'
function closePopup(): void {
	fadeAway.style.display = 'none';
}

noThanks.addEventListener('click', closePopup)

// by clicking the 'toStore' button the page leads to apple.com
function storeForwarding():void {
	window.location.href = ('http://www.apple.com');
}

toStore.addEventListener('click', storeForwarding)




// When the user clicks the button, the modal opens
btn!.onclick = function() {
  modal!.style.display = "block";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event:any) {
  if (event.target == modal) {
    modal!.style.display = "none";
  }
}