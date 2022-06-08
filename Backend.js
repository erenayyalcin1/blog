"use strict";
	

	window.addEventListener("load", WebsiteLoaded);
	

	function WebsiteLoaded(){
	   

	    document.getElementById("YanMenuPhoto").addEventListener("click",PhotoClick);
	    var yanMenuler=document.getElementById("Yanmenu").children; // Yan menu divin icindeki tum menu itemlerini aldim.
	     //Bu menu itemlar arasinda geziniyorum
	     for(let i=0;i<yanMenuler.length; i++){
	         yanMenuler[i].addEventListener("mouseenter",MenuItemMouseEntered);//Her bir menu item a mouseenter olayi ekliyorum 
	        }
	        
	}
	var audio=new Audio();
	function MenuItemMouseEntered(Nota){
	    //Herhangi bir menu item a mouse giris yaptigi zaman calisir 
	    //Notanin anlik hedef nesnesi (currentTarget) bu fonksiyonu tetikleyen menu itemi ifade eder

	    //Eger daha onceden bir ses kaydi calmaya basladiysa onu durduracagim
	    if(!audio.paused)
	    {
	        audio.pause(); //onceki calan sesi durduruyorum
	    }
	    var Image=document.getElementById("YanMenuPhoto");
	    if(Image.src.endsWith("Photos/DeadMozart.jpg"))
	    {
	        return;
	    } 
	  
	//calinacak ses dosyasinin kaynagini bu fonksiyonu tetikleyen menu item a gore belirliyorum
	switch(Nota.currentTarget.id){
	    case "hakkinda":
	        audio.src="Audio/Do.wav";
	        break;
	    case "blog_sayfam":
	        audio.src="Audio/RE.wav";
	        break;
	    case "gelecek_planlarim":
	        audio.src="Audio/Mi.wav";
	        break
	    case "benimle_iletisime_gecin":
	        audio.src="Audio/Fa.wav";
	        break;
	    case "hakkinda1":
	            audio.src="Audio/Sol.wav";
	            break;
	    case "blog_sayfam1":
	            audio.src="Audio/La.wav";
	            break;
	    case "gelecek_planlarim1":
	            audio.src="Audio/Si.wav";
	            break
	    case "benimle_iletisime_gecin1":
	            audio.src="Audio/Mozart.wav";
	            break;
	    case "hakkinda2":
	        audio.src="Audio/Turk_Marsi.wav";
	        break;
	    case "blog_sayfam2":
	        audio.src="Audio/Game1.wav";
	        break;
	    case "gelecek_planlarim2":
	        audio.src="Audio/Retro.wav";
	        break
	    case "benimle_iletisime_gecin2":
	        audio.src="Audio/Facebook.wav";
	        break;
	    case "hakkinda3":
	            audio.src="Audio/Ezel2.wav";
	            break;
	    case "blog_sayfam3":
	            audio.src="Audio/La Valse d'Amélie.wav";
	            break;
	    case "gelecek_planlarim3":
	            audio.src="Audio/Yalniz.wav";
	            break
	    case "benimle_iletisime_gecin3":
	            audio.src="Audio/Ses.wav";
	            break;    
	        default:
	            return;//Eger yukarida ki hic bir menu item degilse sesi calmamak icin fonksiyondan cikiyorum
	}
	    audio.play(); //Kaynagi guncellenmis olan sesi calmaya basliyorum.
	}
	function PhotoClick(){
	    var Image=document.getElementById("YanMenuPhoto");
	    if(Image.src.endsWith("Photos/ALiveMozart.jpeg"))  
	    {
	        audio.pause();
	        Image.src="Photos/DeadMozart.jpg";
	

	    }
	    else
	    {
	        Image.src="Photos/ALiveMozart.jpeg";
	    }
	}

