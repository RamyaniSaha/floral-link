let count1 = 0;
let CountData1 = setInterval(()=>{
    document.getElementById('client-c1').innerText = ++count1;
    if (count1 >=86){
        clearInterval(CountData1);
    }
},400)

let count2 = 0;
let CountData2 = setInterval(()=>{
    document.getElementById('client-c2').innerText = ++count2;
    if (count2 >=25){
        clearInterval(CountData2);
    }
},400)

let count3 = 0;
let CountData3 = setInterval(()=>{
    document.getElementById('client-c3').innerText = ++count3;
    if (count3 >=17){
        clearInterval(CountData3);
    }
},400)

let count4 = 0;
let CountData4 = setInterval(()=>{
    document.getElementById('client-c4').innerText = ++count4;
    if (count4 >=98){
        clearInterval(CountData4);
    }
},400)