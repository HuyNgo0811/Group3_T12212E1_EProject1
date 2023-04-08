var data = [
    //Daikin split
    {
        "id" : "01", "pic1" : "hinh1.png" , "pic2" : "hinh2.png" , "name" : "Daikin air conditioner 24000BTU inverter 1 way <br> FTKY71WVMV/RKY71WVMV" , "price" : "32.500.000₫" , "review1" : "Daikin air conditioner FTKY71WVMV/RKY71WVMV inverter 24000 BTU 1 way" , "review2" : "3D air blowing, fast cooling, comfortable comfort" , "review3" : "Streamer air filter technology effectively disinfects and deodorizes" , "review4" : "Higher energy efficiency, more power saving" , "review5" : "Origin: Genuine Vietnam" , "review6" : "Warranty 12 months" , "machine" : "One-way" , "gas" : "Gas32" , "technology" : "Inverter" , "wattage" : "24000BTU" 
    },
   
    {
        "id" : "05" , "pic1" : "hinh1.png" , "pic2" : "hinh2.png" , "name" : "Daikin air conditioner 9000BTU inverter 1 way <br> FTKY25WAVMV/RKY25WAVMV" , "price" : "11.700.000₫" , "review1" : "Daikin air conditioner 9000BTU inverter 1 way FTKY25WAVMV/RKY25WAVMV" , "review2" : "3D air blowing, fast cooling, comfortable comfort" , "review3" : "Streamer air filter technology effectively disinfects and deodorizes" , "review4" : "Higher energy efficiency, more power saving" , "review5" : "Origin: Genuine Vietnam" , "reivew6" : "Warranty 12 months" ,  "machine" : "Two-way" , "gas" : "Gas410" , "technology" : "Inverter" , "wattage" : "9000BTU" 
    },

    //LG split

    {
        "id" : "06", "pic1" : "hinh4.png" , "pic2" : "hinh5.png" , "name" : "LG DUALCOOL™ Inverter Air conditioner1-way 18,000BTU (2HP) <br> V18API1" , "price" : "22.390.000₫" , "review1" : "Free installation fee" , "review2" : "Enhanced Ion" , "review3" : "Plasmaster Gas Filter ThinQ" , "review4" : "Filters for allergens" , "review5" : "Kill bacteria up to 99.9% with 3,000 billion ions" , "review6" : "LG ThinQ Smart App (WIFI Connection)" , "machine" : "One-way" , "gas" : "Gas22" , "technology" : "Inverter" , "wattage" : "18000BTU"
    },
    
    {
        "id" : "10", "pic1" : "hinh12.png" , "pic2" : "hinh13.png" , "name" : "LG DUALCOOL 1-way Inverter Air Conditioner 24,000 BTU (2.5HP) <br> V24ENF1" , "price" : "23.690.000₫" , "review1" : "Dual Inverter™" , "review2" : "Energy saving" , "review3" : "Rapid cooling" , "review4" : "10 year warranty on" , "review5" : "Dual Inverter" , "review6" : "compressor™" , "machine" : "One-way" , "gas" : "Gas410" , "technology" : "inverter" , "wattage" : "24000BTU"
    },

    //Toshiba split
    {
        "id" : "11", "pic1" : "hinh14.png" , "pic2" : "hinh15.png" , "name" : "TOSHIBA AIR CONDITIONER <br> RAS-H13H4KCVG-VU" , "price" : "13.290.000₫" , "review1" : "Exclusive Magic Coil Technology" , "review2" : "IAQ Bactericidal Filter" , "review3" : "Hybrid Inverter Controller" , "review4" : "Hi Power Quick Cooling" , "review5" : "Self-cleaning" , "review6" : "Warranty 12 months" , "machine" : "One-way" , "gas" : "Gas32" , "technology" : "inverter" , "wattage" : "12000BTU"
    },  
      
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
    


    //Toshiba AC
    {
        "id": "31", "pic1": "hinh54.png", "pic2": "hinh55.png", "name": "Toshiba ComfortSense 230V Smart <br> Window Air Conditioner", "price": "27.500.000₫", "review1": "Three-in-one function: cooling, dehumidification, and air purification", "review2": "Inverter technology saves energy and reduces noise", "review3": "Equipped with a smart remote control", "review4": "Easy to install and use", "review5": "Fast cooling mode" , "review6" : "36-month warranty", "machine": "One-way", "gas": "Gas32", "technology": "inverter", "wattage": "24000BTU"},

    {
        "id": "32", "pic1": "hinh56.png", "pic2": "hinh57.png", "name": "Toshiba ComfortSense 230V Smart <br> Window Air Conditioner", "price": "29.500.000₫", "review1": "Powerful cooling capacity", "review2": "Inverter technology saves energy and reduces noise", "review3": "Air-purifying and dehumidifying functions", "review4": "Easy to use remote control", "review5": "Easy installation with included panels", "review6": "36-month warranty", "machine": "One-way", "gas": "Gas32", "technology": "inverter", "wattage": "26000BTU"},

    



    //Sharp AC
    {
        "id" : "36", "pic1" : "hinh64.png" , "pic2" : "hinh65.png" , "name" : "Sharp ComfortSense 230V Smart <br> Window Air Conditioner" , "price" : "29.500.000₫" , "review1" : "Enjoy powerful cooling and heating in one device" , "review2" : "Smart control with voice commands and Wi-Fi connectivity" , "review3" : "Built-in air purifier for cleaner and fresher air" , "review4" : "Triple Protector Plus technology ensures long-lasting performance" , "review5" : "Easy-to-use remote with large display" , "review6" : "Warranty 24 months" , "machine" : "One-way" , "gas" : "Gas410" , "technology" : "inverter" , "wattage" : "27000BTU"
    },
    {
        "id" : "37", "pic1" : "hinh66.png" , "pic2" : "hinh67.png" , "name" : "Sharp ComfortSense 230V Smart <br> Window Air Conditioner" , "price" : "26.800.000₫" , "review1" : "High-performance cooling with energy-saving inverter technology" , "review2" : "Smart control with mobile app and Wi-Fi connectivity" , "review3" : "Auto-cleaning function for hassle-free maintenance" , "review4" : "Anti-corrosion coating for long-lasting durability" , "review5" : "Easy-to-install with included mounting kit" , "review6" : "Warranty 36 months" , "machine" : "One-way" , "gas" : "Gas410" , "technology" : "inverter" , "wattage" : "24000BTU"
    },
    
    {
        "id" : "60", "pic1" : "hinh114.png" , "pic2" : "hinh115.png" , "name" : "Sharp Inverter Ceiling Air Conditioner 4.5HP <br> AH-XM40EHD" , "price" : "42,990,000₫" , "review1" : "Powerful cooling capacity for large rooms" , "review2" : "Built-in Plasmacluster Ion technology for purifying air" , "review3" : "Inverter technology for energy efficiency" , "review4" : "Quiet operation with 5 fan speed settings" , "review5" : "24-hour on/off timer and sleep mode" , "review6" : "36-month warranty" , "machine" : "Two-way" , "gas" : "Gas32" , "technology" : "inverter" , "wattage" : "39000BTU"
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
    
    $("#only-product").html(s);
    
}