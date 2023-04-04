
$(document).ready(function () {
    $("#generated").hide()
    $("#submit-loading").hide()

    $("#submit").click(function () {
        $("#submit").hide();
        $("#submit-loading").show();

        dream = $("#dreamText").val();

        $.ajax({
            type: "GET",
            url: 'https://jarofmilk.com/api/getDream/'+dream,
            timeout: 20000,    
            crossDomain: true,
            dataType: "json",
            success: function(data) {
                $("#submit").show();
                $("#submit-loading").hide();

                $("#generated").show();
                $("#generated").text(data.result); 
             },
             error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);

                $("#submit").show();
                $("#submit-loading").hide();

                //$("#generated").show();
                //$("#generated").text("Something went wrong! Please try again later when it isn't broken."); 
                alert("Something went wrong! Please try again later when it isn't broken.");
            } 
        });
    });
});
    