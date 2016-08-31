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
var counter =1;
function load(event) {
   

    var i, j,k,l,m;
    
    var key = event.keyCode;
     //console.log(key);

    if (key == 37 || key == 39 || key == 32)
    return;

if(document.getElementsByTagName("type").value==null && key==40)
  return;



    if(key == 40 ){
      var ul_child = document.getElementById("newUl").childNodes;
      console.log(ul_child);
         
         if( ul_child != null){
          var liID= ul_child[counter].id;

          console.log("li ID",liID);
         document.getElementById(liID).style.backgroundColor="white";
         console.log(document.getElementById(liID));
         counter++;

          for(var i = 0 ; i<counter; i++)
          {
          console.log("for loop executing");


            document.getElementById(ul_child[counter].id).style.backgroundColor = "#efefef";
          }

         if (counter==ul_child.length)
         {
          counter=1; 
          
         }
       // if(key)
        return;
       }
        
      
    }


if(key==13)
{
 doStuff_for_li();

}




    
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
            

           // console.log("hello",demo[3]);
            
            

            var jsonObj = JSON.parse(xhr.responseText);

             //var SearchLength = jsonObj.Search.length;
             //console.log(obj);
            //var demo=document.getElementsByTagName("li");
           // keys(demo,event);
            

            document.getElementById("newUl").innerHTML = " ";

            //for  Loop over the JSON array. 
            for (var obj in jsonObj.Search) 
            {
                  var newLi = document.createElement("li");
 
                  newLi.innerHTML=jsonObj.Search[obj].Title;
                         
                  newLi.id=jsonObj.Search[obj].imdbID;                
       
                  var newUl = document.getElementsByTagName("ul");

                 // var newUl = document.getElementsById("ul");     not working

                  //newLi.addEventListener("click",doStuff,false); on line no 88
                  
                  newLi.setAttribute("class","searchopts list");

                  newLi.addEventListener("click",doStuff,false);
                  // keys(event);

                  newUl[0].appendChild(newLi);           
                  //newUl.appendChild(newLi);                  not working
                   

            }



/*
var parent = child.parentNode;
var children = parent.children;
var count = children.length;
console.log("children",count)
var child_index;
for (var i = 0; i < count; i++) {
  if (child === children[i]) {
    child_index = i;
    break;
  }
} 

/*var i=0
var obj =jsonObj.Search[i];

*/





















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

function doStuff_for_li()
{
console.log("doStuff_for_li is executing");


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

            //console.log("info",jsonID);


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
    




/*function keys(demo ,event)
{ 


  console.log(demo[2])
var key = event.keyCode;
    if (key == 38 || key == 40)
    console.log("UpDownkeys executed");
}*/
 







































