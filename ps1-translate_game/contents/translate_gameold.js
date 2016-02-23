// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		 	= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

	// Your code here
	var button = document.getElementById("click_me");
	var text = document.getElementById("translation");
	var current_entry = "espejo";
	button.onclick = validate;
	text.addEventListener("keydown", function(e){
		if(e.keyCode === 13){
			validate();
		}
	});

	function validate(){
		var user_input = text.value;
		var inputtext = document.createTextNode(user_input);
		alert(user_input);

		//CODE TO HANDLE USER INPUT
		var wspan = document.createElement("span");
		var zspan = document.createElement("span");
		if(user_input === current_dict[current_entry]){//check if user input is the correct translation
			wspan.setAttribute('class','bluetext');
			zspan.setAttribute('class', 'bluetext');
		}
		else{
			wspan.setAttribute('class','crossout redtext');
			zspan.setAttribute('class', 'redtext');
		}
		var addp = document.createElement("P");
		var addp1 = document.createElement("P");
		wspan.appendChild(inputtext);
		addp.appendChild(wspan);
		var column1 = document.getElementById("column1");
		var column2 = document.getElementById("column2");

		var current = document.createTextNode(current_entry);
		zspan.appendChild(current);
		addp1.appendChild(zspan);

		column1.insertBefore(addp1, column1.childnodes[2]);
		column2.insertBefore(addp, column2.childnodes[2]);
		current_entry = getrandom();
	};
	function getrandom(){
		var keyArray = Object.keys(current_dict);
		var random = keyarray[Math.random()*(keyArray.length-1)];
		return random;
	}
    });
