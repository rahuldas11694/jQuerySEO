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

var key = event.keyCode;

     console.log(key);

    if (key == 37 || key == 39 || key == 32)

    return;

  if (key ==8)
  {
  document.getElementById("no_result").style.display="none";
  document.getElementById("info").style.display="none";

  }


/*if(document.getElementsByTagName("type").value==null & key==40)
{
  return;
}
*/

/*if(key == 40)
      {
     //console.log(key);
      var ul_child = document.getElementById("newUl").childNodes;
      console.log("length is",ul_child.length,ul_child);
         
         if( ul_child != null){
          var liID= ul_child[counter].id;

          console.log("li ID",liID);
         
         document.getElementById(liID).style.backgroundColor="#efefef";
         console.log(document.getElementById(liID));
         counter++;
         
         for(var i =1 ; i<counter; i++)
          {
          console.log("for loop executing");
          document.getElementById(ul_child[i].id).style.backgroundColor = "white";
          }
        
         if (counter==ul_child.length)
         {
          counter=1;

          
         }
       // if(key)
        return;
       }
     }
     */



 if(key == 40 || key == 38){
  console.log("***************************************"+ key);


  
  
  if (key==40)
    {
    var ul_child = document.getElementById("newUl").childNodes;
      //console.log(ul_child);
         
         if( ul_child != null)
         {
          if(counter==ul_child.length)
          {
          counter=1;
          }
          
          var liID= ul_child[counter].id;
          var liText= ul_child[counter].innerHTML;
            
          //console.log("li ID and text",liID,liText);


              
         document.getElementById(liID).style.backgroundColor="#efefef";

         console.log(document.getElementById(liID));
         //counter++;
         document.getElementById("ajax").value = liText;


          for(var i = 1 ; i<counter; i++)
          {
          console.log("for loop executing");


            document.getElementById(ul_child[i].id).style.backgroundColor = "white";
          }

         /*if (counter==ul_child.length) //on line no 96 
         {
          counter=1; 
          
         }*/
         counter++;
         console.log("key 40 counter",counter);
       // if(key)
       //console.log(counter);
       return;
       }
        
    }

    if (key==38)
    {    
      var ul_child = document.getElementById("newUl").childNodes;
      console.log("jst entered in 38");
            if(counter==0 )
            {
              console.log("now the counter is",counter);
              counter=ul_child.length;
              return;
            }
    console.log("key 38 counter",counter);
        //document.getElementsById(liID).style.backgroundColor="red";

          counter=counter-1;
          var liID= ul_child[counter].id;
          var liText= ul_child[counter].innerHTML;
          
             
          console.log("key pressed 38 ",liID,liText);

        // document.getElementById(liID).style.backgroundColor="red";
         
          
          for(var i = 0 ; i<counter; i++) 

          {

          console.log("key for 38 for loop executing");


            document.getElementById(ul_child[counter].id).style.backgroundColor = "white";

          }


          document.getElementById(ul_child[counter-1].id).style.backgroundColor="#efefef";


          console.log("nabdahjnzmcbzgcjhajdabh m",counter)
            text=ul_child[counter-1].innerHTML;
          document.getElementById("ajax").value = text;


      //counter= counter-1;
      /*if(counter==0 )
            {
              counter=ul_child.length-1;
              return;
            }*/


    return;
    }

}



 if(key==13)
{

  console.log("key 13 counter",counter);
 doStuff_for_li(counter);
 
 return;

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

   xhr.send();

    document.getElementById("load").removeAttribute("class");
    document.getElementById("no_result").innerHTML="";

    // Handle state changes for the request
    xhr.onreadystatechange = function() {

        if ((xhr.readyState) == 4 && (xhr.status == 200)) {
            // Parse the JSON
            document.getElementById("load").setAttribute("class", "hidden");
            
            document.getElementById("newUl").innerHTML = " ";   // to stop repeated results
           // console.log("hello",demo[3]);            
            var jsonObj = JSON.parse(xhr.responseText);


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

 
                 
                  newLi.addEventListener("click",doStuff,true);
                  // keys(event);

                  newUl[0].appendChild(newLi);           
                  //newUl.appendChild(newLi);                  not working
                   
            document.getElementById("no_result").style.display="none";
            }


/*******************************/
            // Update the placeholder text.

            if (input.placeholder == "Search...") {
                input.placeholder = "Search...";
            } else {
                // An error occured :(
                input.placeholder = "Search...";
            }
        } // xhr.readystate==4  if block closed line 62
        else{
            document.getElementById("no_result").style.display="block";
           document.getElementById("no_result").innerHTML="NO RESULT FOUND..";

        }

    }; // onreadystate change = function() closed here line no:  61


    // Update the placeholder text.
    input.placeholder = "Search...";

    // Set up and make the request.

    //xhr.send();

//


}

/********* doStuff_for_li******/

function doStuff_for_li(counter)
{


 // document.getElementById("load1").style.visibility="visible"; 




console.log("doStuff_for_li is executing",counter);
var ul_child = document.getElementById("newUl").childNodes;
console.log(ul_child);
var liID= ul_child[counter-1].id;
console.log("dostuff for liID ===",liID);

document.getElementById("newUl").innerHTML = " ";

var xmlr=new XMLHttpRequest();
xmlr.open("GET", "http://www.omdbapi.com/?i="+liID,true);

document.getElementById("load1").removeAttribute("class");

xmlr.onreadystatechange=function(){
if ((xmlr.readyState) == 4 && (xmlr.status == 200)) {
  document.getElementById("load1").setAttribute("class", "hidden1");
var jsonID=JSON.parse(xmlr.responseText);



           // setTimeout(function(){
            //  document.getElementById("load1").style.visibility="visible";
             //             },5000);


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
        xmlr.send();


        //document.getElementById("load1").style.visibility="visible";

}


function doStuff()
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

    document.getElementById("load1").removeAttribute("class");

    // Handle state changes for the request.1
    xml.onreadystatechange = function() {

         //document.getElementById("load1").display="none";


        if ((xml.readyState) == 4 && (xml.status == 200)) {
          

          document.getElementById("load1").setAttribute("class", "hidden1");
            // Parse the JSON
            var jsonID = JSON.parse(xml.responseText);
            
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
function req_for_btn()
      {

      console.log("SEARCH BUTTON PRESSED");
      var input = document.getElementById("ajax");
      console.log(input);
      var text = document.getElementById("ajax").value;
      console.log(text);
      var xhr = new XMLHttpRequest();
    // dynamic searchhhhhhh
    xhr.open("GET", "http://www.omdbapi.com/?s=" + text, true);
   
   document.getElementById("load1").removeAttribute("class");
    // Handle state changes for the request.
    xhr.onreadystatechange = function() {
        if ((xhr.readyState) == 4 && (xhr.status == 200)) {

          document.getElementById("load1").setAttribute("class","hidden1");
            // Parse the JSON
            
            document.getElementById("newUl").innerHTML = " ";
           // console.log("hello",demo[3]);            
            var jsonObj = JSON.parse(xhr.responseText);
            console.log(jsonObj);
            
    
            var btn_id=jsonObj.Search[0].imdbID;
            console.log("ID WHEN BUTTON CLICKED",jsonObj.Search[0].imdbID,jsonObj.Search[0].Title);            

          var xmlr=new XMLHttpRequest();
xmlr.open("GET", "http://www.omdbapi.com/?i="+btn_id,true);
xmlr.onreadystatechange=function(){
if ((xmlr.readyState) == 4 && (xmlr.status == 200)) {
var jsonID=JSON.parse(xmlr.responseText);


            //for  Loop over the JSON array. 
           for (var obj in jsonID) 
            {
                 console.log("BUTTON CLICKED",obj);

                  
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
        xmlr.send();
}

};

xhr.send();

}


