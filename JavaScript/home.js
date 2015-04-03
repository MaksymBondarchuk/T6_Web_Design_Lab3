var first_about = true;
var first_production = true;
var first_contacts = true;
var first_history = true;
var arr_about = ["First developer", "Second developer"];
var arr_production = ["C", "Javascript", "Java", "Python", "Assembler"];
var arr_contacts = ["Office", "Mr. Bondarchuk", "Mr. Tarasenko"];
var arr_history = ["Tuco", "Founder", "Skyscraper"];

function show(obj) {
    var td = obj;
    var _div = td.getElementsByTagName("div").item(0);


    var arr;
    var table = document.createElement('table');

    var flag;
    if (obj.id == "_about") {
        arr = arr_about;
        flag = first_about;
    }
    else if (obj.id == "_production") {
        arr = arr_production;
        flag = first_production;
    }
    else if (obj.id == "_contacts") {
        arr = arr_contacts;
        flag = first_contacts;
    }
    else if (obj.id == "_history") {
        arr = arr_history;
        flag = first_history;
    }

    if (flag) {
        table.className = "menu";
        table.style.width = "245px";
        for (var i = 0; i < arr.length; i++) {
            var row = table.insertRow(-1);
            var cell = row.insertCell(0);
            var a = document.createElement('a');

            a.href = arr[i] + ".html";
            a.className = "v_menu_item";
            a.innerHTML = arr[i];

            cell.appendChild(a);
        }

        _div.appendChild(table);

        if (obj.id == "_about")
            first_about = false;
        else if (obj.id == "_production")
            first_production = false;
        else if (obj.id == "_contacts")
            first_contacts = false;
        else if (obj.id == "_history")
            first_history = false;
    }

    td.className = "expanded";
    _div.className = "expanded";
}

function hide(obj) {
    var td = obj;
    var _div = td.getElementsByTagName("div").item(0);

    td.className = "normal";
    _div.className = "normal";
}