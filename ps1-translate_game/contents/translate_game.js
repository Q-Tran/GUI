// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		 	= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

	// Your code here

	//initialize constant variables
	var keyArray = Object.keys(current_dict);
	var button = document.getElementById("click_me");
	var currentdom = document.getElementById("current");
	var column1 = document.getElementById("column1");
	var column2 = document.getElementById("column2");
	var column3 = document.getElementById("column3");

	//variables that will change
	var text = document.getElementById("translation");
	var current_entry = getrandomword();

	$("#translation").autocomplete({ //autocomplete from http://jqueryui.com/autocomplete/
		source: keyArray,
		minLength: 3
	});
	currentdom.innerHTML = current_dict[current_entry];
	button.onclick = validate; //click button listener
	text.addEventListener("keydown", function(e){ //enter listener
		if(e.keyCode === 13){
			validate();
		}
	});

	function validate(){
		$( "#translation" ).autocomplete( "close" ); //http://jqueryui.com/autocomplete/
		//initialize variables
		var linebreak = document.createElement("br");
		var user_input = text.value;
		var col1p = document.createElement("p");
		var col2p = document.createElement("p");
		var col3p = document.createElement("p");
		var col1span = document.createElement("span");
		var col2span = document.createElement("span");
		var col3span = document.createElement("span");
		var input = document.createTextNode(user_input);
		var check = document.createElement("p");
		var checktext = document.createTextNode("✔");
		check.appendChild(checktext);
		var answer = current_entry//current_dict[current_entry]); CHANGE PLEASE
		var answertext = document.createTextNode(answer);
		col3span.appendChild(answertext);
		col3span.setAttribute('class', 'redtext');
		col3p.appendChild(col3span);

		if(user_input === answer){//check if user input is the correct translation
			col1span.setAttribute('class','bluetext');
			col2span.setAttribute('class', 'bluetext');
			column3.insertBefore(check, column3.childNodes[4]);
		}
		else{
			col2span.setAttribute('class','crossout redtext');
			col1span.setAttribute('class', 'redtext');
			column3.insertBefore(col3p, column3.childNodes[4]);
		}
		var inputtext = document.createTextNode(user_input);
		if(user_input === ""){
			col2p.appendChild(linebreak);
		}

		//append and insert
		col2span.appendChild(inputtext);
		col2p.appendChild(col2span);
		var current = document.createTextNode(current_dict[current_entry]);
		col1span.appendChild(current);
		col1p.appendChild(col1span);
		column1.insertBefore(col1p, column1.childNodes[4]);
		column2.insertBefore(col2p, column2.childNodes[4]);
		current_entry = getrandomword();
		//change current to current_entry
		document.getElementById("current").innerHTML = current_dict[current_entry];

		//clear the text box field
		text.value = "";
	};
	function getrandomword(){//returns random word from keys
		return(keyArray[Math.floor(Math.random()*(keyArray.length))]);
	}
    });
