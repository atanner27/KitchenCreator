//lab 2 stuff
// fire off the request
function Post()
{
var foo = document.getElementById("textVals").value;
//alert(foo);
var urlVal = '/users/' + foo;
//alert(urlVal);
    request = $.ajax({
        url: urlVal,
        type: "POST",
				success: function(data) {
            //alert("data is here: " + data);
						document.getElementById("textResponse").value = data;
						//$("textarea#textResponse").html(data)
						//alert("data is " + data);
        },
				failure: function(data){
					//alert(data);
				}
    });
		//alert("request" + JSON.stringify(request));

		//document.getElementById("responseVal").innerHTML = request;
}



function Get()
{
var foo = document.getElementById("textVals").value;
//alert(foo);
var urlVal = '/users/' + foo;
//alert(urlVal);
		request = $.ajax({
				url: urlVal,
				type: "GET",
				success: function(data) {
						//alert("data is here: " + data);
						document.getElementById("textResponse").value = data;
						//$("textarea#textResponse").html(data)
						//alert("data is " + data);
				},
				failure: function(data){
					//alert(data);
				}
		});
		//alert("request" + JSON.stringify(request));

		//document.getElementById("responseVal").innerHTML = request;
}

function Update()
{
var foo = document.getElementById("textVals").value;
//alert(foo);
var urlVal = '/users/' + foo;
//alert(urlVal);
		request = $.ajax({
				url: urlVal,
				type: "UPDATE",
				success: function(data) {
						//alert("data is here: " + data);
						document.getElementById("textResponse").value = data;
						//$("textarea#textResponse").html(data)
						//alert("data is " + data);
				},
				failure: function(data){
					//alert(data);
				}
		});
		//alert("request" + JSON.stringify(request));

		//document.getElementById("responseVal").innerHTML = request;
}

function Delete()
{
var foo = document.getElementById("textVals").value;
//alert(foo);
var urlVal = '/users/' + foo;
//alert(urlVal);
		request = $.ajax({
				url: urlVal,
				type: "DELETE",
				success: function(data) {
						//alert("data is here: " + data);
						document.getElementById("textResponse").value = data;
						//$("textarea#textResponse").html(data)
						//alert("data is " + data);
				},
				failure: function(data){
					//alert(data);
				}
		});
		//alert("request" + JSON.stringify(request));

		//document.getElementById("responseVal").innerHTML = request;
}
