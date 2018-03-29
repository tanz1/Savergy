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






