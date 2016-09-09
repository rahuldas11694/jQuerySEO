$(document).ready(function() 
 {
counter=0;

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


    var ul_child=$("#newUl").children();
    var $liID=ul_child[counter].id;
   console.log("length________",ul_child.length);


    if(key==40)
    {
     var ul_child=$("#newUl").children();
     console.log("ul_children...",ul_child);
      if(ul_child !=null)
          {
  			if(counter==ul_child.length)
  				{
  					counter=1;
  				}

  		     var $liID=ul_child[counter].id;

  		     console.log("ididididididid",$liID);

             var $liText=ul_child[counter].innerHTML;

             console.log("*******COLOR***********",ul_child[counter]);

             ul_child.eq(counter).css({"backgroundColor":"#efefef"});

             $("#ajax").val(ul_child.eq(counter).html()); //takes the value of list nd prints into the text box

             for(i=0;i<counter;i++)
              {
         	   ul_child.eq(i).css({"backgroundColor":"white"});
              }

        counter++

     return;
      }
    }

      if(key==38)
        {
         /* if(counter==0)
          { 
          	counter=ul_child.length;
             console.log("key 38 pressed",counter);
         }*/
            console.log("key 38*****",counter)

         	counter=counter-1;

         	console.log("text",ul_child.eq(counter).html());

         	console.log("counetr-1=",counter)

         	var $liID=ul_child[counter].id;

         	ul_child.eq(counter-1).css({"backgroundColor":"#efefef"});

         	console.log("white",counter);

         	ul_child.eq(counter).css({"backgroundColor":"white"});

         	$("#ajax").val(ul_child.eq(counter-1).html());//takes the value of list nd prints into the text box


     return;
    }


} //end of key==40 || key==38

  if(key==13)
{
console.log("^^^^^KEY 13^^^^^^^^",counter);
doStuff_for_li(counter);
return;
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
  //console.log("ajax data",data);		
// $("#newUl").innerHTML=" ";  in jq use val() instead of innerhtml

$("#newUl").html(" ");


    for (var obj in data.Search)
           { 

                 var newLi= $("#newUl").append($("<li>"+data.Search[obj].Title+"</li>").attr("class","searchopts list").attr("id",data.Search[obj].imdbID));

                
                 //$(".searchopts").attr("id",data.Search[obj].imdbID); if you use this then it will apply same id to all the elements bcz last value is 10
                 //console.log(" for loop id",data.Search[obj].imdbID)
            }
           $("#newUl li").click(function()     //calling func in jQ
               {
                              doStuff();
                }
                 	);

  }
    //Do stuff with the JSON data
});


/*********************************************************************************/
});//end of keyup:

function doStuff()
{
 	console.log("....clicked getting executed......",event.target.innerHTML,"jnkzcz",event.target.id);
 
    var mvid= event.target.id;

     $("#newUl").html("");

    $.ajax(
          {

  type: "GET",
  url: "http://www.omdbapi.com/?",
  data:"i="+mvid,
  async: true,
  dataType: "json",
  success: function (data) {
  console.log("mvdata------",data);
    	//console.log("-=-=-=-=-",obj);
    	//$("#ajax").val(ul_child.eq(counter-1).html());
		$("#rated").html(data.Rated);
    	console.log(data.Rated);
        $("#poster").attr("src",data.Poster);  // to use when u have img tag in ur DOM to show img 
        $("#title").html(data.Title);
        $("#year").html(data.Year);
        $("#rating").html(data.imdbRating);
        console.log(data.imdbRating)
        $("#plot").html(data.Plot);
        $("#info").css({"display":"block"});
}
});
}


//$("#newUl").html("");
function doStuff_for_li(counter)
{
console.log("9999888887776665443321122345667889",counter)

var ul_child=$("#newUl").children();
console.log("jzfbzhdjzcz ahc cbxz zczhjc ",ul_child);

var liId =ul_child[counter-1].id;
var liText=ul_child[counter-1].innerHTML;
console.log("ID ",liId,"Text",liText);

$("#newUl").html("");


$.ajax(
{
type:"GET", url:"http://www.omdbapi.com/?", data:"i="+liId, async:true,
dataType:"json",
success:function(data)
{
console.log("000000000000000",data);
$("#rated").html(data.Rated);
      console.log(data.Rated);
        $("#poster").attr("src",data.Poster);  // to use when u have img tag in ur DOM to show img 
        $("#title").html(data.Title);
        $("#year").html(data.Year);
        $("#rating").html(data.imdbRating);
        console.log(data.imdbRating)
        $("#plot").html(data.Plot);
        $("#info").css({"display":"block"});

}

});
}


/*function req_for_btn()
{

  console.log("butto getting clicked")
}
*/

$("#btn").click(function()
{

  console.log("heloo world");

   var input = $("#ajax").val();
   console.log(input);
   $("#newUl").html(" ");
   $.ajax(
    {
    type:"GET",
    url:"http://www.omdbapi.com/?",
    data:"s="+input,
    async:true,
    dataType:"json",
    success:function(data)
    {
      console.log(data.Search[0].imdbID);
      var btn_id= data.Search[0].imdbID;
      $.ajax(
            {
              type:"GET", 
              url:"http://www.omdbapi.com/?", 
              data:"i="+btn_id, 
              async:true, 
              dataType:"json",

              success:function(data)
              {
               console.log("hello hello",data);
        $("#rated").html(data.Rated);
        console.log(data.Rated);
        $("#poster").attr("src",data.Poster);  // to use when u have img tag in ur DOM to show img 
        $("#title").html(data.Title);
        $("#year").html(data.Year);
        $("#rating").html(data.imdbRating);
        console.log(data.imdbRating)
        $("#plot").html(data.Plot);
        $("#info").css({"display":"block"});

               



              }

            }
        );
      



    }



    }
    );



}

  );







        








	});//end of  ready fun:1
