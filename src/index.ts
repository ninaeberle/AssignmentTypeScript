const enterButton = document.getElementById("enter");
const input = document.querySelector<HTMLInputElement>("#userInput")
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");
const editButton = document.createElement("button");//edit button

function inputLength(){
	return input!.value.length;
} 

function listLength(){
	return item.length;
}

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
    //END ADD CLASS DELETE
    
    // function editListItem(){
    //     li.classList.
    // }
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

// event:any ??
function addListAfterKeypress(event:any) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton!.addEventListener("click",addListAfterClick);

input!.addEventListener("keypress", addListAfterKeypress);

