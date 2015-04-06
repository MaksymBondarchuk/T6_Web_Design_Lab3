function download() {
    var file_name = 'data.xml';
    $.ajax({
        url: file_name,
        dataType: "text",
        success: function (data) {
            var _table =  $("#main_table");
            _table.empty();
            _table.append(data);
        }
    })
}


function upload() {
    var xmlDoc = document.getElementsByTagName('table')[0].innerHTML;

    var post_data = {
        'file_data': xmlDoc
    };

    $.ajax({
        type: "POST",
        url: "http://localhost/WebDesignLab3/php.php",
        data: post_data,
        success: function () {
            //alert('success');
            return false;
        }
    });
}


function delete_tr(obj) {
    var idx = obj.parentNode.rowIndex;
    $('table')[0].deleteRow(idx);
    upload();
}


var list_for_select = ["USA", "UK", "Germany", "Italy", "Japan", "France", "Canada", "Ukraine"];


function type_changed() {
    var input_label = $('#for_input')[0];
    var type = $('.type_select')[0];

    input_label.removeChild(input_label.childNodes[1]);
    var firstChild = input_label.childNodes[1];
    input_label.removeChild(input_label.childNodes[1]);

    if (type.value == 'From List') {

        var selectList = document.createElement("select");

        for (var i = 0; i < list_for_select.length; i++) {
            var option = document.createElement("option");
            option.value = list_for_select[i];
            option.text = list_for_select[i];
            selectList.appendChild(option);
        }
        selectList.className = 'type_select';
        input_label.appendChild(selectList);

    }
    else {
        var inputField = document.createElement("input");
        inputField.type = 'text';
        inputField.className = 'input_data';
        inputField.placeholder = 'Enter your data';
        input_label.appendChild(inputField);
    }
    input_label.appendChild(firstChild);
}