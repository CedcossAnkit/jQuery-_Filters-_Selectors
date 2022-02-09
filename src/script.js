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
            <td><u><a onclick='fun("+b+")'>Hide</a></u></td>\
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
        if(vl.length>=3){
        for(var i=0;i<products.length;i++){
            if(vl==products[i].id.toLowerCase() || vl==products[i].name.toLowerCase()){
               main1+= "<tr id='"+b+"'>\
               \<td>"+products[i].id+"</td>\
               <td>"+products[i].name+"</td>\
               <td>"+products[i].brand+"</td>\
               <td>"+products[i].os+"</td>\
               <td><u><a onclick='fun("+b+")'>Hide</a></u></td>\
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
        var apple="apple";
        filter(apple);
    });
    $('#motorola').click(function (e) { 
        var apple="motorola";
        filter(apple);
    });
    $('#sumsung').click(function (e) { 
        var apple="Samsung";
        filter(apple);
    });
    $('#asus').click(function (e) { 
        var apple="asus";
        filter(apple);
    });
    $('#microsoft').click(function (e) { 
        var apple="microsoft";
        filter(apple);
    });

    $('#all').click(function (e) { 
        display();
    });

    $('#allos').click(function (e) { 
        display();e
        
    });
    $('#ios').click(function (e) {
        var ios="iOS";
        filter(ios);
        
    });
    $('#android').click(function (e) {
        var android="android";
        filter(android);
        
    });
    $('#windows').click(function (e) {
        var android="windows";
        filter(android);
        
    });


    function filter(name){
        var main=""
        var b=0;
        for(var i=0;i<products.length;i++){
            if(name.toLowerCase()==products[i].brand.toLowerCase() || name.toLowerCase()==products[i].os.toLowerCase()){
                main+= "<tr id='"+b+"'>\
               \<td>"+products[i].id+"</td>\
               <td>"+products[i].name+"</td>\
               <td>"+products[i].brand+"</td>\
               <td>"+products[i].os+"</td>\
               <td><u><a onclick='fun("+b+")'>Hide</a></u></td>\
               </tr>"
            }
        }
        $('#table').html(main);

    }
});

function fun(id){
    console.log('clicked');
    $("#"+id).hide();
}