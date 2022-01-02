

setInterval(() => {
let hr=document.getElementById('hour');
let mm= document.getElementById('minut');
let sc=document.getElementById('second');



     let d=new Date();
     let hrot=d.getHours()*30;
     let minrot=d.getMinutes()*6;
    let   secrot=d.getSeconds()*6;
    
   hr.style.transform=`rotateZ(${(hrot)+(minrot/12)}deg)`;
    mm.style.transform= `rotateZ(${minrot}deg)`;
    sc.style.transform= `rotateZ(${secrot}deg)`;
    
}, 1000);
