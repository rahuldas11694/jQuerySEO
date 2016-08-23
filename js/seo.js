<script type="text/javascript" language="javascript">
function load()
{

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
</script>
