"use strict";
	

window.addEventListener("load", WebsiteLoaded);






function WebsiteLoaded(){
    document.getElementById("Hareketli_Giris").addEventListener("mouseenter",Ziplayiver);
    document.getElementById("Hareketli_Giris1").addEventListener("mouseenter",Ziplayiver);
   

}

function Ziplayiver(Element){
    var divim=Element.currentTarget;
    let a=Math.floor(Math.random()*4)+1;
    let divGenisligi = divim.clientWidth;


    switch(a){
        case 1:
            let yeniDeger =  (parseInt(divim.style.marginTop.replace("px", "")) + divGenisligi);
            if (yeniDeger >= window.innerHeight)
            {
                yeniDeger = (parseInt(divim.style.marginTop.replace("px", "")) - divGenisligi);
            }
            divim.style.marginTop=yeniDeger  + 'px';
            break;
        case 2:
            let yeniDeger2 =  (parseInt(divim.style.marginLeft.replace("px", "")) - divGenisligi);
            if (yeniDeger2 < 0)
            {
                yeniDeger2 =  (parseInt(divim.style.marginLeft.replace("px", "")) + divGenisligi);
            }
            divim.style.marginLeft=yeniDeger2  + 'px';
            break;
        case 3:
            let yeniDeger3 =  (parseInt(divim.style.marginLeft.replace("px", "")) + divGenisligi);
            if (yeniDeger3 >= window.innerWidth)
            {
                yeniDeger3 =  (parseInt(divim.style.marginLeft.replace("px", "")) - divGenisligi);
            }
                divim.style.marginLeft=yeniDeger3  + 'px';
                break;  
        case 4:
            let yeniDeger4 =  (parseInt(divim.style.marginTop.replace("px", "")) - divGenisligi);
            if (yeniDeger4 < 0)
            {
                yeniDeger4 = (parseInt(divim.style.marginTop.replace("px", "")) + divGenisligi);
            }
            divim.style.marginTop= yeniDeger4  + 'px';
                break;    
    }




}

