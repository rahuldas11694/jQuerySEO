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


document.getElementById("ajax").addEventListener("keyup", load, false);




// }

function load(event) {
    var key = event.keyCode;
     console.log(key);

    if (key == 37 || key == 38 || key == 39 || key == 40)
        return;
    var incrKey=0;
     if(key == 38)
     {
      incrKey-=1;
    }
    else if(key == 40)
    {
      incrKey+=1;
    }
    console.log(incrKey);
    



    

    //var dataList = document.getElementById("json-datalist");
    var input = document.getElementById("ajax");
    // store the data in input then create url then fire ajax
    var text = document.getElementById("ajax").value;
   //console.log(text);



    // Create a new XMLHttpRequest.
    var xhr = new XMLHttpRequest();
    // dynamic searchhhhhhh
    xhr.open("GET", "http://www.omdbapi.com/?s=" + text, true);

    // Handle state changes for the request.
    xhr.onreadystatechange = function() {
        if ((xhr.readyState) == 4 && (xhr.status == 200)) {
            // Parse the JSON
            var demo=document.getElementsByTagName("li");

            console.log("hello",demo[3]);
            


            var jsonObj = JSON.parse(xhr.responseText);

            console.log(incrKey);

            document.getElementById("newUl").innerHTML = " ";

            //for  Loop over the JSON array. 
            for (var obj in jsonObj.Search) 
            {
                  var newLi = document.createElement("li");
 
                  newLi.innerHTML=jsonObj.Search[obj].Title;
                         
                  newLi.id=jsonObj.Search[obj].imdbID;                
       
                  var newUl = document.getElementsByTagName("ul");

                  //newLi.addEventListener("click",doStuff,false); on line no 88
                  
                  newLi.setAttribute("class","searchopts");

                  newLi.addEventListener("click",doStuff,false);

                  newUl[0].appendChild(newLi); 

            }
            // Update the placeholder text.

            if (input.placeholder == "Search...") {
                input.placeholder = "Movie...";
            } else {
                // An error occured :(
                input.placeholder = "Search...";
            }
        } // xhr.readystate==4  if block closed line 62
    }; // onreadystate change = function() closed here line no:  61


    // Update the placeholder text.
    input.placeholder = "Loading options...";

    // Set up and make the request.

    xhr.send();

}





function doStuff(event)
{
  console.log("li getting clicked",event.target.innerHTML);
  //document.getElementById("mvid").innerHTML=event.target.innerHTML;
  document.getElementById("ajax").value=event.target.innerHTML; // or .innerText
 
   //console.log(mvid); 
    
    var mvid= event.target.id;
    
    console.log(mvid); 

    //Create a new XMLHttpRequest.
    var xml = new XMLHttpRequest();
    // dynamic searchhhhhhh
    xml.open("GET", "http://www.omdbapi.com/?i="+mvid, true);

    // Handle state changes for the request.1
    xml.onreadystatechange = function() {
        if ((xml.readyState) == 4 && (xml.status == 200)) {
            // Parse the JSON
            var jsonID = JSON.parse(xml.responseText);

            console.log("info",jsonID);


            document.getElementById("newUl").innerHTML = " ";

            //for  Loop over the JSON array. 
           for (var obj in jsonID) 
            {
                 console.log("inside for Loop",obj);
                  
                 document.getElementById("poster").src=jsonID.Poster; 
                 document.getElementById("title").innerHTML=jsonID.Title;
                 document.getElementById("year").innerHTML=jsonID.Year;
                 document.getElementById("rated").innerHTML=jsonID.Rated;
                 document.getElementById("rating").innerHTML=jsonID.imdbRating;
                 document.getElementById("plot").innerHTML=jsonID.Plot;

                
            }
            document.getElementById("info").style.display="block";


          }
        };
        xml.send();
      }





 







































