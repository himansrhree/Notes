var c = document.getElementById('addbtn');
show();
c.addEventListener("click", function(e){
    var title = document.getElementById("addtitle").value;
    var desc = document.getElementById("addnotes").value;
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    title.value = "";
    desc.value = "";
    show();
   

})
function show(){
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }

    var cardBody = document.getElementById("cardBody");
    var html = "";

    notesobj.forEach((element, index) => {
    html += `<div class="card my-2 mx-2" style="width: 18rem;" id="demo">
            <div class="card-body">
            <h5 class="card-title ">${element[0]}</h5>
            <p class="card-text ">${element[1]}</p>
            <a onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary btn-sm">Delete</a>
            </div>
        </div>`;
    });
    
    var cardBody = document.getElementById("cardBody");
    if(notesobj.length != 0){
    cardBody.innerHTML = html;
    }
    else{
        cardBody.innerHTML = `Nothing to show you. Use Submit button to add notes.`
    }
}
function deleteNote(index) {
    var notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    show();
    
}
    
var search= document.getElementById('searchTxt');


search.addEventListener('input', function(){
    var searchvalue = search.value;
   
    var cardCheck = document.getElementsByClassName('check');
    Array.from(cardCheck).forEach(function(element) {
        var cardTxt = document.getElementsByTagName("h5")[0].innerText;
        var cardTxt1 = document.getElementsByTagName("p")[0].innerText;
        var str1 = cardTxt +" " + cardTxt1;
        console.log(str1);
        if(str1.includes(searchvalue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    });
   
})

