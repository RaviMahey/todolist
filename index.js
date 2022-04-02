
var allData= JSON.parse(localStorage.getItem('list') );
document.body.style.zoom="100%";
console.log(allData);
var temp= "row rounded-0 p-1  alert alert-success";
var zerOneTwo=-1;
function displayList(){
	var inHtml="";
	let single = document.getElementById('LIST');
	allData= JSON.parse(localStorage.getItem('list'));
	for (var i = allData.length - 1; i >= 0; i--) {		
		let cell= `
    <div class="container-fluid w-100 border-bottom d-flex align-items-center  bg-white rounded id=${i}">
    		<div class="col overflow-hidden">${allData[i]}</div>
    		<div class="col-5 btn-group btn-group-sm" >
				<button type="button" class="btn btn-outline-success my-1" onclick="deleteFromList(${i},0)">done</button>
  				<button type="button" class="btn btn-danger my-1" onclick="deleteFromList(${i},1)">delete</button>
    			
    		</div>
    	</div><br>`;
		inHtml += cell;
	}
	single.innerHTML=inHtml;
	return;

}
function showAlert(){
	if(zerOneTwo==0){
		// document.getElementById('taskAdded').innerHTML="Task is Added";
		document.getElementById('taskAdded').style.visibility="hidden";
	}
	else if(zerOneTwo==1){
		// document.getElementById('taskAdded').innerHTML="Task is Done";
		document.getElementById('taskAdded').style.visibility="hidden";
	}
	else if(zerOneTwo==2){
		// document.getElementById('taskdd').innerHTML="Task is deleted";

		document.getElementById('taskAdded').style.visibility="hidden";
		document.getElementById('taskAdded').className=temp;

	}
}
function deleteFromList(indexOfList,doneDel){

	allData.splice(indexOfList,1);
	// alert(allData);
	localStorage.setItem('list' ,JSON.stringify(allData));
	displayList();	
	if(doneDel==0){

		zerOneTwo= 1;
		document.getElementById('taskAdded').innerHTML="Task is Done";
		document.getElementById('taskAdded').style.visibility="visible";
		let t1=setTimeout(showAlert,2000);


	}
	else{	

			
		document.getElementById('taskAdded').innerHTML="Task is Deleted";
		document.getElementById('taskAdded').className="row rounded-0 p-1  alert alert-danger";

		document.getElementById('taskAdded').style.visibility="visible";
		zerOneTwo=2;
		let t2=setTimeout(showAlert,2000);
		

		
	}

	
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
	document.getElementById('taskAdded').innerHTML="task is Added";
	document.getElementById("taskAdded").style.visibility="visible";
	zerOneTwo=0;
	let timeOut=setTimeout(showAlert,2000);

	displayList();


}
function clicked(){
	document.getElementById('taskAdded').style.display="none";
	document.getElementById('taskdd').style.display="none";



}

