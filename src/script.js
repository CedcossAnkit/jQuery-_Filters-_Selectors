var brandd="";
var oss="";
$(document).ready(function () {
    // console.log('Working..')

    
    var products = [{
        "id": "100",
        "name": "iPhone 4S",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "101",
        "name": "Moto X",
        "brand": "Motorola",
        "os": "Android"	
    },
    {
        "id": "102",
        "name": "iPhone 6",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "103",
        "name": "Samsung Galaxy S",
        "brand": "Samsung",
        "os": "Android"
    },
    {
        "id": "104",
        "name": "Google Nexus",
        "brand": "ASUS",
        "os": "Android"
    },
    {
        "id": "105",
        "name": "Surface",
        "brand": "Microsoft",
        "os": "Windows"
    }];
    display();
    function  display(){
        var main="";
        var b=0;
        for(var i=0;i<products.length;i++){
            main+="<tr id='"+b+"'>\
            \<td>"+products[i].id+"</td>\
            <td>"+products[i].name+"</td>\
            <td>"+products[i].brand+"</td>\
            <td>"+products[i].os+"</td>\
            <td><u><button class='bt' onclick='fun("+b+")'>Hide</button></u></td>\
            <td><u><button>add to cart</button></u></td>\
            </tr>"
            b++;
        }

        $('#table').html(main);
        console.log('Display() Working');
    }

        


    $('#srch').keypress(function (e) {
        var main1=""; 
        var vl=$('#srch').val().toLowerCase();
        var b=0;
        if(vl.length>=2){
        for(var i=0;i<products.length;i++){
            if(vl==products[i].id.toLowerCase() || vl==products[i].name.toLowerCase()){
               main1+= "<tr id='"+b+"'>\
               \<td>"+products[i].id+"</td>\
               <td>"+products[i].name+"</td>\
               <td>"+products[i].brand+"</td>\
               <td>"+products[i].os+"</td>\
               <td><u><button class='bt' onclick='fun("+b+")'>Hide</button></u></td>\
               <td><u><button>add to cart</button></u></td>\
               </tr>"
               console.log('Searching in loop');
                b++;
            }
            
        }
    
        $('#table').html(main1);
        console.log('Searching Working');
    }
    if(vl.length==""){
        display();
    }
    });

    $('#apple').click(function (e) { 
        brandd="apple";
        filter(brandd,oss);
        
    });
    $('#motorola').click(function (e) { 
        brandd="motorola";
        filter(brandd,oss);

    });
    $('#sumsung').click(function (e) { 
        brandd="Samsung";
        filter(brandd,oss);


    });
    $('#asus').click(function (e) { 
        brandd="asus";
        filter(brandd,oss);


    });
    $('#microsoft').click(function (e) { 
        brandd="microsoft";
        filter(brandd,oss);


    });

    $('#all').click(function (e) { 
        display();
    });

    $('#allos').click(function (e) { 
        display();e
        
    });
    $('#ios').click(function (e) {
        oss="iOS";
        filter(brandd,oss);


        
    });
    $('#android').click(function (e) {
        oss="android";
        filter(brandd,oss);


        
    });
    $('#windows').click(function (e) {
        oss="windows";
        filter(brandd,oss);

        
    });




    function filter(brandd,oss){
        
        
        var main=""
        var b=0;
        for(var i=0;i<products.length;i++){
            if(brandd.toLowerCase()==products[i].brand.toLowerCase() || oss.toLowerCase()==products[i].os.toLowerCase()){
                main+= "<tr id='"+b+"'>\
               \<td>"+products[i].id+"</td>\
               <td>"+products[i].name+"</td>\
               <td>"+products[i].brand+"</td>\
               <td>"+products[i].os+"</td>\
               <td><u><button class='bt' onclick='fun("+b+")'>Hide</button></u></td>\
               <td><u><button>add to cart</button></u></td>\
               </tr>"
            }
        }
        $('#table').html(main);

    }

    //add to cart code

    
    
});


function fun(id){
    console.log('clicked');
    $("#"+id).css('border','1px solid red');
    $("#"+id).hide(500);
    


}