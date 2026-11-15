var result="";
function months()
{
    let months=["Muharram","Safar","Rabiul-Awal","Rabiul-Sani","Jamad-ul-Awal","Jamadul-ul-Sani","Rajab","Shabaan","Ramazan","Shawal","Zil-Qaudda","Zil-Hajj"]
      for(i=0;i<12;i++)
      {
        result+=months[i]+"<br>";
      }

      document.getElementById("islamic_months").innerHTML=result;

      
}
months()
