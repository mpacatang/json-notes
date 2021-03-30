	$(document).ready(function() {	
	console.log(tableQuery);
	// Testing
    var testRequest = new XMLHttpRequest();
    testRequest.open('GET', tableQuery);
    testRequest.onload = function getData(){
        var mData = JSON.parse(testRequest.responseText);
        console.log(mData);
       
    }
    // getData();
    
    testRequest.send();
    
    //let machineData = mData;
    
    
    //getJson Jquery
    $.getJSON(tableQuery, function(data){
        
        console.log(data);
        var post = data.data;
        $("#machines").html('<ul class="row">');
        var output = "";
        
        for (var i in post) {
            console.log(post[i].strModel);
            var imgURL = "/ProductImages/thumbnails/" + post[i].strPictureFileName;
            
            
            output += "<li class='card'>";
            
            output += "<img src = '" + imgURL + "'/>";
            
            output += "<div class='card-body'>";
            
            output += "<div class='card-cat'>"+  post[i].strCategoryName + "</div>"
            
            output += "<h4 class='card-title'>" + post[i].strModel + "</h4>";
            output += "<p><strong>Unit #:</strong></p>"
            output += "<p><strong>Year:</strong></p>";
            output += "<p><strong>Make:</strong></p>";
            output += "<p><strong>Capacity:</strong></p>"
            output += "<p><strong>Location:</strong></p>"
            
            output += "<a href='#' class='card-link'>More Details</a>"
            
            output += "</div>"; //end card body
            

            output += "</li>";    
            }
            
        $("#machines ul").append(output); // append to list
        $("#machines ul").append('</ul>'); // close to list
            
            
        });
        

    
    // Render HTML
    document.getElementById("product-cards").innerHTML = `<h2>Product cards goes here</h2>
        
    
    `
    
	   
	});
