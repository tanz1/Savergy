var choices = ["one", "two"];

function addInput(divName) {
    var newDiv = document.createElement('div');
    var selectHTML = "";
    selectHTML="<select>";
    for(i = 0; i < choices.length; i = i + 1) {
        selectHTML += "<option value='" + choices[i] + "'>" + choices[i] + "</option>";
    }
    selectHTML += "</select>";
    newDiv.innerHTML = selectHTML;
    document.getElementById(divName).appendChild(newDiv);
}
<form class="new" method="post" action="/jobs">
    <div id="dynamicInput"></div>
    <input type="button" value="Add" onclick="addInput('dynamicInput');" />
    <input type="button" value="Save" />
</form>