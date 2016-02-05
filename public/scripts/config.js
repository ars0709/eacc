
var apiUrl='http://logapi.dev/';
var hostUrl='http://log.dev/';

var modeAir='air';
var modeLand='land';
var modeSea='ship';

var step1='outgoing';
var step2='manifest';
var step3='ongoing';
var step31='incoming';
var step4='arrived';
var step41='foa';
var step5='delivered';
var step6='received';
var step61='ofd';
var step7='pod';
var step8='confirm pod';

var step1Color='#4F628E';
var step2Color='manifest';
var step3Color='ongoing';
var step4Color='arrived';
var step5Color='delivered';
var step6Color='received';

var step1Desc='Pickup';
var step2Desc='Processing';
var step3Desc='Dispatch To';
var step4Desc='Arrived To';
var step5Desc='With Delivery';
var step6Desc='Received By ';

var dtTable={
    "bRetrieve": true,
    "bProcessing": true,
    "bDestroy": true,
    "responsive":true,
    "dom": 'Bfrtip',
     buttons: ['csv', 'excel', 'pdf', 'print'],
    "language": {"emptyTable": "No data available"}
}
var ba=null;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var t=new Date();
var hariIni=(t.getMonth()+1)+'/'+t.getDate()+'/'+t.getFullYear();
var gToken;
var gComp;  

if(dd<10) {
    dd='0'+dd
}
if(mm<10) {
    mm='0'+mm
}
today = yyyy+'-'+mm+'-'+dd;
today1 = dd+'/'+mm+'/'+yyyy;


function cekNull(id,thenId){
    if (id || typeof id != 'undefined'){
        return id;
    }else {
        //console.log('brow');
        if (thenId || typeof thenId != 'undefined'){
            return thenId;
        }else{
            return '';
            
        }

    }
}

function cekUndefined(id){
    if (id){
        return id;
    }else {
        return '';
    }
}






