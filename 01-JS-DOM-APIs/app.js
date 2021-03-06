

//////Fade in html element "Hello World!"


window.onload = function (){

	let fadeIn = document.getElementById("hide");

	fadeIn.setAttribute("class", "fadeIn");

};


//////Ajax Request Jokes


function getJoke(){

	let xmlhttp;

	try { //modern browsers

		xmlhttp = new XMLHttpRequest();

	} 

	catch (y) {

		try { //ie6

			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");	

		} 
		catch (y){ //ie5

			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

		}

	}

	xmlhttp.onreadystatechange = function (){

		if(xmlhttp.readyState == 4){

			if(xmlhttp.status == 200){

				let data = xmlhttp.responseText;
				console.log(data);

				let jokes = JSON.parse(data);
				console.log(jokes);

				document.getElementById('joke').innerHTML = '<h4 class="success">' + jokes.value.joke + '</h4>';

			}else{

				document.getElementById('joke').innerHTML = '<h4 class="error">There was an error! Try again...</h4>';

			}

		}

	}

	xmlhttp.open("GET", "http://api.icndb.com/jokes/random" , true);

	xmlhttp.send();
};


//////Ajax Request Github with Promises

// This Promise Function is commented because I use other to do searches
/* 
function getGitHub (method, url) { 

	return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onload = function () {

      if (this.status >= 100 && this.status < 300) { // test error: (this.status === 0)

      	resolve(xhr.response);

      } else {

      	reject({

      		status: this.status,

      		statusText: xhr.statusText

      	});

      }

  };

  xhr.onerror = function () {

  	reject({

  		status: this.status,

  		statusText: xhr.statusText

  	});

  };

  xhr.send();

});

}

// Request:

getGitHub('GET', 'https://api.github.com/search/repositories?q=%27javascript%27')

.then(JSON.parse)

.then(function (data) {

	for (var i=0; i<data.items.length; i++) { 

		var li = document.createElement("li"); 

		var liText = document.createTextNode(data.items[i].full_name); 

		li.appendChild(liText);  

		document.getElementById("titlesGitHub").appendChild(li);  
		console.log(data.items[i].full_name); // full_name info

	}

  	console.log(data); // data info

  })

.catch(function (err) {

	document.getElementById('gitHub').innerHTML = '<h4 class="error">There was an error! Try again...</h4>';

	console.error('Augh, there was an error!', err.statusText);

});
*/

//////Reuse Ajax Request Github with Promises to create a table with javascript data


function findRepo (method, url) {

	return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onload = function () {

      if (this.status >= 100 && this.status < 300) { // test error: (this.status === 0)

      	resolve(xhr.response);

      } else {

      	reject({

      		status: this.status,

      		statusText: xhr.statusText

      	});

      }

  };

  xhr.onerror = function () {

  	reject({

  		status: this.status,

  		statusText: xhr.statusText

  	});

  };

  xhr.send();

});

}

// Request:

findRepo('GET', 'https://api.github.com/search/repositories?q=%27JavaScript%27')

.then(JSON.parse)

.then(function (data) {

	let table = document.createElement("table"); //table

	document.getElementById("data-repositories").appendChild(table);

	let thead = document.createElement("thead");//thead

	table.appendChild(thead);

	let trHeader = document.createElement("tr"); //Row with headers

	thead.appendChild(trHeader);

	let headers = ["Name","Description","Watchers","Forks","Download"]; //Array with name of th

	for (let i=0; i < headers.length; i++) { //Asign names to th tag

		let th = document.createElement("th"); //th

		let thName = document.createTextNode(headers[i]); //th name        
	
		th.appendChild(thName);  
                            
		trHeader.appendChild(th); 

	}

	let tbody = document.createElement("tbody"); //tbody

	table.appendChild(tbody);

	let attributes = ["name", "description", "watchers", "forks", "downloads_url"];//attributes

	let dataItems = data.items; //data array

	for (let i=0; i < dataItems.length; i++) {

		let tr = document.createElement("tr"); //tr

		tbody.appendChild(tr); 

		for (let j=0; j < attributes.length; j++) {

			let attribute = attributes[j]; //get attribute

			let value = dataItems[i][attribute]; //put attribute in dataItems

			let td = document.createElement("td"); //td

			let node;

			if (attribute == "downloads_url") {

				node = document.createElement("a"); //create <a> tag

				node.setAttribute("style","text-decoration:none;"); // <a> tag without text-decoration

				node.href = value; //pass url to href

				node.innerText = "Url"; //pass url text to <a> tag

			}else{
				node = document.createTextNode(value);
			}

      		td.appendChild(node);

      		tr.appendChild(td);

		}

		
	}


})

.catch(function (err) {

	document.getElementById('data-repositories').innerHTML = '<h4 class="error">There was an error! Try again...</h4>';

	console.error('Augh, there was an error!', err.statusText);

});


//////Ajax Request to search repositories


function searchUser(){ //input event onchange

	let userFind = document.getElementById('user-find'); //select input

	let value = userFind.value; //get value from input

function searchRepo (method, url) {

	return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onload = function () {

      if (this.status >= 100 && this.status < 300) { // test error: (this.status === 0)

      	resolve(xhr.response);

      } else {

      	reject({

      		status: this.status,

      		statusText: xhr.statusText

      	});

      }

  };

  xhr.onerror = function () {

  	reject({

  		status: this.status,

  		statusText: xhr.statusText

  	});

  };

  xhr.send();

});

}

// Request:

searchRepo('GET', 'https://api.github.com/search/repositories?q=%27' + value + '%27')

.then(JSON.parse)

.then(function (data) {

	let value = document.getElementById("user-find").value;//get input value

	function cleanInput(){//clean input

    	document.getElementById("user-find").value = "";

	}

	cleanInput();//call clean input

	if (value !== "") { //condition to remove li tags to ul

		let list = document.getElementById("titlesGitHub");

    	while (list.hasChildNodes()) {

        	list.removeChild(list.firstChild);

    	}

	}

	for (let i=0; i<data.items.length; i++) { //create li tag into ul tag

		let li = document.createElement("li"); 

		let liText = document.createTextNode(data.items[i].full_name); 

		li.appendChild(liText);  

		document.getElementById("titlesGitHub").appendChild(li);  
		console.log(data.items[i].full_name); // full_name info

	}

  	console.log(data); // data info

  })

.catch(function (err) {

	document.getElementById('gitHub').innerHTML = '<h4 class="error">There was an error! Try again...</h4>';

	console.error('Augh, there was an error!', err.statusText);

});

}


//////Search word 


function wordSearch() {

    let value = document.getElementById("user-find").value;

    document.getElementById("user-search-find").innerHTML = "-You search: " + value;

}





