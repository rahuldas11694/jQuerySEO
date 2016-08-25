/*following code is  returning null value because it executes before the DOM fully loads. 
you need to put this code under window.onload=function(){ -- put your code here } 
Then it will run without any eoor
*/



/*
var ax=document.getElementById("ajax");     
if(ax)
{
  ax.addEventListener("keyup",load,false);
}
else
{
  window.alert("ID not found");
}*/



//window.addEventListener("keyup",load);      //only using this it also works



//   document.getElementById("ajax").addEventListener("keyup",load);


// window.onload=function() // use this to execute the following code without an error
// {


document.getElementById("ajax").addEventListener("keyup",load,false);




// }

  function load(event)
{
    var key = event.keyCode;
     console.log(key);

     if(key==37 || key==38 || key==39 || key==40)
      return;



     var dataList = document.getElementById("json-datalist");
     var input = document.getElementById("ajax");
     // store the data in input then create url then fire ajax
      var text =document.getElementById("ajax").value;
      console.log(text);

     // Create a new XMLHttpRequest.
var xhr = new XMLHttpRequest();
// dynamic searchhhhhhh
xhr.open("GET", "http://www.omdbapi.com/?s="+ text ,true);

// Handle state changes for the request.
xhr.onreadystatechange = function() {
  if ((xhr.readyState) == 4 && (xhr.status == 200))
   {
      // Parse the JSON
      var jsonObj = JSON.parse(xhr.responseText);
          dataList.innerHTML= "";

      // Loop over the JSON array.
               for(var obj in jsonObj.Search) {
        // Create a new <option> element.
        console.log(obj)
        var option = document.createElement("option");
        // Set the value using the item in the JSON array.
        option.value = jsonObj.Search[obj].Title;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      }

      // Update the placeholder text.

      if(input.placeholder=="Search...")
      {
      input.placeholder = "Movie...";
    } else {
      // An error occured :(
      input.placeholder = "Search...";
    }
  }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.

xhr.send();

}

