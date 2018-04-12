function calculate()
{
    var i = 1;
    var total = [];
 
    while(i < 6)
    {
        var electronic = document.getElementById('appliance' +i ).value;
        var quantity = document.getElementById('quantity' +i).value;
        var hours = document.getElementById('hours' +i).value;
        total[i-1] = electronic * quantity * hours;
        i++;
    }
       document.getElementById("output").innerHTML = total.reduce(function(a, b){return a+b;});
       // assistance from https://stackoverflow.com/questions/16057672/sum-values-from-an-array-in-javascript
}

// source url for hamburger menu https://github.com/mranenko/hamburger-menu
(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

//show hide effects
$(document).ready(function(){
    $("#tips").click(function(){
        $("#calculator").hide();
        $("#energytips").show();
        $("#aboutus").hide();
 
    });
    $("#home").click(function(){
        $("#calculator").show();
        $("#aboutus").hide();
        $("#energytips").hide();
   });
   $("#about").click(function(){
        $("#calculator").hide();
        $("#aboutus").show();
        $("#energytips").hide();
    });
});
//source url for jquery: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show 
/*
JSON 
DATA
*/
// source url https://stackoverflow.com/questions/16845373/replace-select-box-options-with-json-result
var json =
    [
            { text : "Aquarium equipment" , value : "24"},
            { text : "Boom box" , value : "8"},
            { text : "Cable box" , value : "140"},
            { text : "CD player" , value : "7"},
            { text : "Ceiling fan" , value : "35"},
            { text : "Clothes dryer" , value : "2790"},
            { text : "Clothes washer" , value : "255"},
            { text : "Coffee maker" , value : "1000"},
            { text : "Compactors" , value : "400"},
            { text : "Computer - desktop PC" , value : "75"},
            { text : "Computer - notebook PC" , value : "25"},
            { text : "Deep fryer" , value : "1000"},
            { text : "Desktop computer monitor" , value : "42"},
            { text : "Dishwasher" , value : "330"},
            { text : "DVD/VCR" , value : "17"},
            { text : "Electric blanket" , value : "400"},
            { text : "Electronic air cleaner/filter" , value : "50"},
            { text : "Furnace fan" , value : "295"},
            { text : "Garage door opener" , value : "400"},
            { text : "Hair dryer" , value : "710"},
            { text : "Humidifier" , value : "11"},
            { text : "Iron" , value : "1100"},
            { text : "Lawn sprinkler" , value : "11"},
            { text : "Microwave oven" , value : "1500"},
            { text : "Other" , value : "0"},
            { text : "Pool pump" , value : "1000"},
            { text : "Portable spa" , value : "4350"},
            { text : "Printer (inkjet)" , value : "13"},
            { text : "Printer (laser)" , value : "250"},
            { text : "Printer/multi-function" , value : "18"},
            { text : "Receiver" , value : "28"},
            { text : "Rechargeable power tool" , value : "13"},
            { text : "Refrigerator" , value : "225"},
            { text : "Router/DSL/cable modem" , value : "6"},
            { text : "Slow cooker" , value : "200"},
            { text : "Space heater" , value : "1320"},
            { text : "Stereo systems" , value : "33"},
            { text : "Television, analog, <40&quot;" , value : "86"},
            { text : "Television, analog, >40&quot;" , value : "156"},
            { text : "Television, CRT" , value : "60"},
            { text : "Television, CRT - projection" , value : "225"},
            { text : "Television, DLP" , value : "175"},
            { text : "Television, ED/HD TV, <40&quot;" , value : "150"},
            { text : "Television, ED/HD TV, >40&quot;" , value : "234"},
            { text : "Television, LCD" , value : "150"},
            { text : "Television, plasma" , value : "300"},
            { text : "Television set-top box" , value : "20"},
            { text : "Toaster" , value : "1100"},
            { text : "Toaster oven" , value : "1051"},
            { text : "Torchiere lamp-halogen" , value : "300"},
            { text : "Vacuum" , value : "542"},
            { text : "Video game system" , value : "36"},
            { text : "Water heater" , value : "4500"},
            { text : "Waterbed heater" , value : "350"},
            { text : "Well pump" , value : "725"}
];
 var options=$('<select/>');
    $.each(json, function(id, ob){
      options.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum = document.getElementsByClassName("appliance").length;
var count
for (count = 0; count <= appNum; count++)
    {
    $('#appliance'+count).html(options.html());
    }
