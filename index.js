
var allData= JSON.parse(localStorage.getItem('list') );
console.log(allData);
function displayList(){
	var inHtml="";
	let single = document.getElementById('LIST');
	allData= JSON.parse(localStorage.getItem('list'));
	for (var i = allData.length - 1; i >= 0; i--) {		
		let cell= `<li  style="list-style-type:none" id="${i}">
  	<div class="conntainer-fluid border-bottom" >
    <div class="row ">    
      <div class="col " ><p class="mx-2 my-2 ">${allData[i]}</p></div>
      <div class="col-2" align="center" ><button type="button" class="btn  btn-outline-success w-100 my-1 " onclick="deleteFromList(${i})">done</button></div>
	<div class="col-2" align="center" ><button type="button" class="btn  btn-danger w-100 my-1 " onclick="deleteFromList(${i})">delete</button></div>
    </div>
</div>
</li><br>`;
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
