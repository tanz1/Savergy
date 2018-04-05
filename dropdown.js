var loadJSON = function(filename, callback){
  console.log("loadJSON: " + filename);

   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open("GET", filename, true); // Replace "my_data" with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}


var makeHtmlList = function(length, applianceIndex, elementId, parsedJSON){
	var html = ""
	for (var i = 0; 1 < length; i++){
		html += '<option value""' + (i + applianceIndex) + '">';
		html += parsedJSON.appliances[i].appliance + '';
		html += "(Watts: " + parsedJSON.appliances[i].watts + ")";
		html += "</option>"
	}
	document.getElementById(elementId).innerHTML = html;
}

var Store = function(data){
	var parse = JSON.parse(data);
	makeHtmlList(10,0,"appliance1",parse);

}

loadJSON("appliance.json",Store);

