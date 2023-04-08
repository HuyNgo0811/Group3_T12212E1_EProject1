var data = [
    //Daikin split
    
    {
        "id" : "05" , "pic1" : "hinh1.png" , "pic2" : "hinh2.png" , "name" : "Daikin air conditioner 9000BTU inverter 1 way <br> FTKY25WAVMV/RKY25WAVMV" , "price" : "11.700.000₫" , "review1" : "Daikin air conditioner 9000BTU inverter 1 way FTKY25WAVMV/RKY25WAVMV" , "review2" : "3D air blowing, fast cooling, comfortable comfort" , "review3" : "Streamer air filter technology effectively disinfects and deodorizes" , "review4" : "Higher energy efficiency, more power saving" , "review5" : "Origin: Genuine Vietnam" , "reivew6" : "Warranty 12 months" ,  "machine" : "Two-way" , "gas" : "Gas410" , "technology" : "Inverter" , "wattage" : "9000BTU" 
    },

    //LG split

    {
        "id" : "06", "pic1" : "hinh4.png" , "pic2" : "hinh5.png" , "name" : "LG DUALCOOL™ Inverter Air conditioner1-way 18,000BTU (2HP) <br> V18API1" , "price" : "22.390.000₫" , "review1" : "Free installation fee" , "review2" : "Enhanced Ion" , "review3" : "Plasmaster Gas Filter ThinQ" , "review4" : "Filters for allergens" , "review5" : "Kill bacteria up to 99.9% with 3,000 billion ions" , "review6" : "LG ThinQ Smart App (WIFI Connection)" , "machine" : "One-way" , "gas" : "Gas22" , "technology" : "Inverter" , "wattage" : "18000BTU"
    },
    {
        "id" : "07", "pic1" : "hinh6.png" , "pic2" : "hinh7.png" , "name" : "LG DUALCOOL™ Inverter Air Conditioner One-way Air Purifier 12000BTU (1.5HP) <br> V13APFP" , "price" : "16.190.000₫" , "review1" : "Free installation fee" , "review2" : "Air Purification" , "review3" : "ThinQ™" , "review4" : "Dual Inverter™" , "review5" : "Energy saving" , "review6" : "Rapid cooling" , "machine" : "One-way" , "gas" : "Gas22" , "technology" : "Inverter" , "wattage" : "12000BTU"
    },
    

    //Toshiba split
     
    {
        "id" : "15", "pic1" : "hinh21.png" , "pic2" : "hinh22.png" , "name" : "TOSHIBA AIR CONDITIONER <br> RAS-H10XKCVG-VU" , "price" : "11.290.000₫" , "review1" : "Capacity: 8,500 BTU" , "review2" : "Exclusive Magic Coil Technology" , "review3" : "Hybrid Inverter Technology" , "review4" : "Fast cooling mode" , "review5" : "IAQ air purification technology" , "review6" : "Warranty 12 months" , "machine" : "One-way" , "gas" : "Gas22" , "technology" : "inverter" , "wattage" : "8500BTU"
    },



    //Sharp split
    {
        "id" : "16", "pic1" : "hinh24.png" , "pic2" : "hinh25.png" , "name" : "SHARP AIR CONDITIONER <br> AH-X18ZEW" , "price" : "25.600.000₫" , "review1" : "Energy saving up to 65%." , "review2" : "Super Jet - Reduces to 5°C in 5 minutes." , "review3" : "Adjustable every 0.5°C." , "review4" : "7 protection functions." , "review5" : "Fast cooling mode" , "review6" : "Warranty 24 months" , "machine" : "One-way" , "gas" : "Gas32" , "technology" : "inverter" , "wattage" : "18000BTU"
    },
    {
        "id" : "17", "pic1" : "hinh26.png" , "pic2" : "hinh27.png" , "name" : "LG AIR CONDITIONER <br> S3-Q12JA3WA" , "price" : "18.900.000₫" , "review1" : "Plasma ionizer helps purify the air." , "review2" : "Smart Diagnosis for troubleshooting." , "review3" : "Adjustable every 1°C." , "review4" : "Quiet operation with low noise level." , "review5" : "Fast cooling mode" , "review6" : "Warranty 36 months" , "machine" : "One-way" , "gas" : "Gas32" , "technology" : "inverter" , "wattage" : "12000BTU"
    },
    




    //Daikin windowAC
        
    {
        "id": "23", "pic1": "hinh38.png", "pic2": "hinh39.png", "name": "Daikin Hybrid Inverter <br> Window Air Conditioner", "price": "24.900.000₫", "review1": "DC Hybrid Inverter for energy saving", "review2": "Quiet operation with low noise level", "review3": "Smart control with WiFi connectivity", "review4": "Auto clean function for easy maintenance", "review5": "Quick cooling with Turbo mode", "review6": "Warranty 36 months", "machine": "One-way", "gas": "Gas32", "technology": "inverter", "wattage": "18000BTU"
    },    
    


    //LG windowAC
    
    {
        "id":"30","pic1":"hinh52.png","pic2":"hinh53.png","name":"LG 4-Way Air Deflection<br>Window Air Conditioner","price":"29.800.000₫","review1":"4-way air deflection for even cooling throughout the room","review2":"Energy Star certified for efficient energy use","review3":"Programmable 24-hour on/off timer for personalized cooling","review4":"Easy-to-clean air filter with filter change alert","review5":"Quiet operation for peaceful living spaces","review6":"Warranty 24 months","machine":"Four-way","gas":"Gas410","technology":"inverter","wattage":"9000BTU"
    },


    //Toshiba AC
    



    //Sharp AC
    
    {
        "id": "40","pic1": "hinh72.png","pic2": "hinh73.png","name": "Sharp ComfortSense 230V Smart <br> Window Air Conditioner","price": "26.800.000₫","review1": "High-power cooling, dehumidifying, and fan modes in a compact unit.","review2": "Cooling power auto-adjusts based on remote's location","review3": "Cooling power auto-adjusts based on remote's location","review4": "Connect to the Haier U+ app","review5": "Easy-to-use installation panels included","review6": "Warranty 36 months","machine": "One-way","gas": "Gas32","technology": "inverter","wattage": "26000BTU"     
    }





    

    
];

displayImages(data);

//lap trinh su kien search
$("#formSearch").submit(function (e) {
    e.preventDefault();

    let search = $("#search").val();
    let re = new RegExp(search, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);

    displayImages(subdata);
});


//lap trinh chi tiet san pham
var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
}

//show products
function productDetail(){
    var d = ``;
    var i = 0;
    for (var v of data){
        if (v.id == res){
            i++;
            d += `
                <div class="row">
                    <div class="col-md-6">
                        <div><img src="imageProduct/${v.pic}" alt="" class="flowerImage"></div>
                    </div>
                    <div class="col-md-6">
                        <h3>${v.name.toUpperCase()}</h3>
                        <h1>Price: ${v.price}</h1>
                        <div>
                            <p>${v.description}</p>
                        </div>
                        <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">Add to cart</a>
                    </div>
                </div>  
                `;
            break;
        }
    }
    if (i == 0){
        d += `404 Not Found`;
    }
    $("#productDetail").html(d);
}


//lap trinh su kien click chon loai san pham
$("input[type=checkbox]").click(function () {
    let cats = $(".chk-cake:checked").map(function () { return $(this).val() }).toArray().toString();
    
    let subdata = (cats.length==0)?data: data.filter(item => cats.search(item.cat) >= 0);
    
    displayImages(subdata);

});


function displayImages(items) {
    let s = ``;
	
	$.each(items, function (k,v) {

        s += `<div class="col-sm-6 col-md-4 divImage">
        <div class="selectProduct" data-id="${v.id}" data-name="${v.name}" data-price="${v.price}" data-description="${v.machine}">
            <a href="product_detail_page.html?id=${v.id}" class="productImg"><img src="imageProduct/${v.pic1}" alt="" class="flowerImage"></a>
            <h3>${v.name.toUpperCase()} </h3>
            <h4>Price: ${v.price}</h4>
        </div>
        <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">Add to cart</a>
    </div>`;
    });
    
    $("#new-product").html(s);
    
}