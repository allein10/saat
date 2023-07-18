var saat2 = document.getElementById("saat");
var dakika2 = document.getElementById("dakika");
var saniye2 = document.getElementById("saniye");
var pmam2 = document.getElementById("pmam");

function guncel(){
    let saat3 = new Date().getHours();
    let dakika3 = new Date().getMinutes();
    let saniye3 = new Date().getSeconds();
    let pmam3 = "AM";
    if(saat3 > 12){
        saat3= saat3-12;
        pmam3 = "PM";
    }
    
    saat3 = saat3 < 10 ? "0" + saat3 : saat3;
    dakika3 = dakika3 < 10 ? "0" + dakika3 : dakika3;
    saniye3 = saniye3 < 10 ? "0" + saniye3 : saniye3;
    
    saat2.innerText = saat3;
    dakika2.innerText = dakika3;
    saniye2.innerText = saniye3;
    pmam2.innerText= pmam3;
    
    setTimeout(() => {
            guncel();
    }, 1000);
}


guncel();