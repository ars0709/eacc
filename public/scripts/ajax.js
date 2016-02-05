/**
 * Created by aris on 12/6/15.
 */

 $body = $("body");
    $(document).ready(function() {
        $(document).on({
            ajaxStart: function(){ 
                // console.log('ajax');
                $body.addClass("loading");},
            ajaxStop: function() { $body.removeClass("loading");}
        });
});


function ajxGetData(url,cb){
    $.ajax({
        url: apiUrl+url,
        "async": true,
        "crossDomain": true,
        type: "GET",
        dataType: "json",
        timeout:3000,
        headers:{
            "content-type" :'application/x-www-form-urlencoded',
            "Authorization":gToken
        },
        /**
         * A function to be called if the request succeeds.
         */
        success: function(data, textStatus, jqXHR) {
            return cb(data);
        },
        /**
         * A function to be called if the request fails.
         */
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('jqXHR:');
            console.log(jqXHR);
            return cb({s:0,msg:textStatus});

        }
    });

    //var settings = {
    //    "async": true,
    //    "crossDomain": true,
    //    "url": url,
    //    "method": "GET"
    //}
    //$.ajax(settings).done(function (response) {
    //    data= JSON.parse(response);
    //    return cb(data);
    //
    //});

}
function ajxPostData(url,data,cb){
    console.log(gToken);
    $.ajax({
        url: apiUrl+url,
        "crossDomain": true,
        type: 'POST',
        dataType: 'json',
        data: data,
        timeout:3000,
        headers:{
          "content-type" :'application/x-www-form-urlencoded',
            "Authorization":gToken
        },
        success: function(data, textStatus, jqXHR) {
            return cb(data);
        },
        /**
         * A function to be called if the request fails.
         */
        error: function(jqXHR, textStatus, errorThrown) {
            //alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
            //$('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
            //console.log('jqXHR:');
            //console.log(jqXHR);
            //console.log('textStatus:');
            //console.log(textStatus);
            //console.log('errorThrown:');
            //console.log(errorThrown);
            return cb({s:false,msg:textStatus});
        }

        //success: function (data) {
        //    dt=JSON.parse(data);
        //    return cb(data);
        //},
        //error:function(xhr, status, error) {
        //    var err = eval("(" + xhr.responseText + ")");
        //    //alert(err.Message);
        //    return cb({s:false,msg:err.Message});
        //}

    });

}

function ajxPutData(url,data,cb){

    $.ajax({

        url: apiUrl+url,
        type: 'PUT',
        dataType: 'json',
        data: data,
        timeout:3000,
        headers:{
            'content-type':"application/x-www-form-urlencoded",
            "Authorization":gToken
        },
        success: function(data, textStatus, jqXHR) {
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('data:');
            console.log(data);
            //data= JSON.parse(data);
            return cb(data);
        },
        /**
         * A function to be called if the request fails.
         */
        error: function(jqXHR, textStatus, errorThrown) {
            //alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
            //$('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
            //console.log('jqXHR:');
            //console.log(jqXHR);
            //console.log('textStatus:');
            //console.log(textStatus);
            //console.log('errorThrown:');
            //console.log(errorThrown);
            return cb({s:false,msg:textStatus});
        }

    });

}

function ajxDeleteData(url,data,cb){
    $.ajax({
        url: apiUrl+url,
        type: 'DELETE',
        dataType: 'json',
        data: data,
        timeout:3000,
        headers:{
            'content-type':"application/x-www-form-urlencoded",
            "Authorization":gToken
        },
        success: function (data) {
            dt=data;
            return cb(data);
        },
        error:function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            //alert(err.Message);
            return cb({s:false,msg:err.Message});
        }

    });

}