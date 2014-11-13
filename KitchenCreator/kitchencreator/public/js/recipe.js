function GetRecipes()
{
var foo = document.getElementById("Ingredients").value;

//alert(foo);
var urlVal = '/ingredients/recipeInfo/' + "ingredients" + foo;
//alert(urlVal);
    request = $.ajax({
        url: urlVal,
        type: "GET",
        data: foo,
        success: function(data) {
            //var returnVar = "";
            //alert("data is here: " + data);
            //document.getElementById("recipeList").value = data;

            var obj = JSON.parse(data);
            //recipeName
            //obj.employees[1].firstName + " " + obj.employees[1].lastName;
            //alert(obj.matches[1].recipeName);
            //Insert default info header
            var returnVar = "<tr>" +
            "<th>Recipe #</th>" +
            "<th>Picture</th>" +
            "<th>Name</th>" +
            "<th>Link</th>" +
            "</tr>";

            for (var i = 0; i < obj.matches.length; i++) {
            //var counter = jsonData.counters[i];

            //make recipe object
            var recipe = obj.matches[i];

            //Find ID
            console.log("reicpe is: " + recipe);
            console.log("source is" + recipe.source);
            console.log("id is:" + recipe.id);


            //Make var
            var curRow = "<tr>";
            //Add recipe #
            curRow += "<td>" + i + " </td>";
            //Add Picture
            curRow += '<td><img src="' + recipe.smallImageUrls[0] + '"alt="Smiley face" height="" width=""></td>';
            //Add Name
            curRow += "<td>" + recipe.recipeName + "</td>";
            //Add Link

            curRow += "<td>";
            curRow += '<button type="button"';
            //alert("recipeid: " + recipe.id);
            curRow += 'onClick="GetLink(' + '\'' +  recipe.id + '\'' + ')' +  '"';
            curRow += 'class="btn btn-info" id="';
            curRow += 'recipe' + i +'">';
            curRow += 'Link';
            curRow += '</button>';
            curRow += "</td>";
            //<button type="button" class="btn btn-info">Info</button>
            //Add closing TR
            curRow += "</tr>";
            //Add to table
            returnVar += curRow;

            }

            document.getElementById("recipeTable").innerHTML =  returnVar;
        },
        failure: function(data){
          //alert(data);
        }
    });
    //alert("request" + JSON.stringify(request));

    //document.getElementById("responseVal").innerHTML = request;
}


function GetLink(id)
{
    //alert(id);
    // var urlVal = '/ingredients/recipeURL/' +"id" +  id;
    // //alert(urlVal);
    // request = $.ajax({
    //     url: urlVal,
    //     type: "GET",
    //     data: id,
    //     success: function(data) {
    //         window.location.href = data;

    //         }
    //     });
    window.location.href = "http://www.yummly.com/recipe/external/" + id;

}






