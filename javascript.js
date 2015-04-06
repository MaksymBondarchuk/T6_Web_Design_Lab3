
function load_clicked() {
    //$.ajax({
    //    type: "POST",
    //    url: "http://localhost/WebDesignLab3/php.php", //Relative or absolute path to response.php file
    //    complete: function () {
    //        alert('Uploaded!')
    //    }
    //});

    $.ajax({
        type: "POST",
        url: "http://localhost/WebDesignLab3/php.php",
        data: '123',
        success: function (data) {
            alert('success');
            return false;
        }
    });
}


function download() {
    var file_name = 'input.xml';
    $.ajax({
        url: file_name,
        dataType: "text",
        success: function (data) {
            $("#spice").empty();
            $("#spice").append(data);
        }
    })
}

function upload() {
    //xhttp=new XMLHttpRequest();
    //xhttp.open("GET","input.xml",false);
    //xhttp.send();
    ////return xhttp.responseXML;
    //
    //xmlDoc = xhttp.responseXML;
    ////xmlDoc=loadXMLDoc("input.xml");
    //
    //newel=xmlDoc.createElement("edition");
    //x = "abcd";
    ////x=xmlDoc.getElementsByTagName("book")[0];
    //x.appendChild(newel);
    //
    //document.write(x.getElementsByTagName("CATALOG")[0].nodeName);

    //var x = 1;
    var xmlDoc = document.getElementsByTagName('table')[0].innerHTML;
    //var xmlDoc = "123456";

    var post_data = {
        'file_data': xmlDoc
    };

    $.ajax({
        type: "POST",
        url: "http://localhost/WebDesignLab3/php.php",
        data: post_data,
        success: function (data) {
            alert('success');
            return false;
        }
    });


}