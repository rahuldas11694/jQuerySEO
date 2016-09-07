$(document).ready(function() 
 {
counter=1;

$("#ajax").keyup(function(event)
  {
var key=event.which;
console.log(key); 

  if (key == 37 || key == 39 || key == 32)
   return;

 
  if(key==8)
 {


 }

   if(key==40 || key==38)
   {
    if(key==40)
    {
     var ul_child=$("#newUl").children();
     console.log("ul_children",ul_child);

       if(ul_child !=null)
        {
  			if(counter==ul_child.length)
  				{
  					counter=1;
  				}

  		var liID=ul_child[counter].id;
  		console.log("zbcmnzczj",liID);		

             



        }





    }


   }




/*******************************************************************************/
var input = $("#ajax");

var text = $("#ajax").val();

$.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?",
  data:"s="+$("#ajax").val(),
  async: true,
  dataType: "json",
  success: function (data) {
  console.log("ajax data",data);		
// $("#newUl").innerHTML=" ";  in jq use val() instead of innerhtml

$("#newUl").html(" ");
console.log("2");

    for (var obj in data.Search)
    { 

                 $("#newUl").append($("<li>"+data.Search[obj].Title+"</li>").attr("class","searchopts list"));


            }

    //Do stuff with the JSON data
  }
});
/*********************************************************************************/
   


   });//end of keyup:

	});//end of  ready fun:1