
var allData= JSON.parse(localStorage.getItem('list') );
console.log(allData);
function displayList(){
	var inHtml="";
	let single = document.getElementById('LIST');
	allData= JSON.parse(localStorage.getItem('list'));
	for (var i = allData.length - 1; i >= 0; i--) {		
		let cell= `
    <div class="col border-bottom d-flex align-items-center  bg-white rounded id=${i}">
    		<div class="col overflow-hidden">${allData[i]}</div>
    		<div class="col-5 btn-group btn-group-sm" >
				<button type="button" class="btn btn-outline-success my-1" onclick="deleteFromList()">done</button>
  				<button type="button" class="btn btn-danger my-1" onclick="deleteFromList()">delete</button>
    			
    		</div>
    	</div><br>`;
		inHtml += cell;
	}
	single.innerHTML=inHtml;
	return;

}
function deleteFromList(indexOfList){
	allData.splice(indexOfList,1);
	// alert(allData);
	localStorage.setItem('list' ,JSON.stringify(allData));
	displayList();
	return;

}
function  addToList(){
	 event.preventDefault();
	if(localStorage.getItem('list')==null){
		localStorage.setItem('list','[]');
		allData= [];
	}
	var inputText= document.getElementById("inputText").value;
	if(inputText==""){
		alert("field is empty");
		return;
	}
	allData.push(inputText);

	// alert(allData);
	localStorage.setItem('list',JSON.stringify(allData));
	document.getElementById("inputText").value="";
	displayList();

}
