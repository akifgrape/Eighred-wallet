 function a(){
            var b=document.getElementById("kisaKenar").value;
            var c=document.getElementById("uzunKenar").value;
            kk=Number(b);
            uk=Number(c);
            var dAlan=kk*uk;
            var dCevre=2*(kk+uk);
            document.getElementById("alan").innerHTML="d : " + dAlan;
            document.getElementById("cevre").innerHTML="c : " + dCevre;
        }
        
        var hspBtn=document.getElementById("a");
        hesapla.onclick=a;
