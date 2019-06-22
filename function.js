
    
    
function getRandom01(){
        var num =Math.random()*Math.floor(3);
        console.log(num);
        b= Math.floor(num);
    if(num<1){
        document.getElementById("hoge").innerText = "グー👊";
        document.getElementById("kekka").innerText = "あいこ";
    }
    if(1<=num&&num<2){
        document.getElementById("hoge").innerText = "チョキ✌️"; 
        document.getElementById("kekka").innerText = "あなたの勝ち";
    }
    if(2<=num&&num<3){
        document.getElementById("hoge").innerText = "パー🖐"; 
        document.getElementById("kekka").innerText = "あなたの負け";
    }
        console.log(document.getElementById("hoge").innerText);
        console.log("グー👊");
        console.log(document.getElementById("kekka").innerText);
}

function getRandom02(){
        var num =Math.random()*Math.floor(3);
        console.log(num);
        b= Math.floor(num);
    if(num<1){
        document.getElementById("hoge").innerText = "グー👊";
        document.getElementById("kekka").innerText = "あなたの負け";
    }
    if(1<=num&&num<2){
        document.getElementById("hoge").innerText = "チョキ✌️";
        document.getElementById("kekka").innerText = "あいこ";
    }
    if(2<=num&&num<3){
        document.getElementById("hoge").innerText = "パー🖐";
        document.getElementById("kekka").innerText = "あなたの勝ち";
    }  
        console.log(document.getElementById("hoge").innerText);
        console.log("チョキ✌️");
        console.log(document.getElementById("kekka").innerText);
}

function getRandom03(){
        var num =Math.random()*Math.floor(3);
        console.log(num);
        b= Math.floor(num);
    if(num<1){
        document.getElementById("hoge").innerText = "グー👊";
        document.getElementById("kekka").innerText = "あなたの勝ち";
    }
    if(1<=num&&num<2){
        document.getElementById("hoge").innerText = "チョキ✌️"; 
        document.getElementById("kekka").innerText = "あなたの負け";
    }
    if(2<=num&&num<3){
        document.getElementById("hoge").innerText = "パー🖐";  
        document.getElementById("kekka").innerText = "あいこ";
    }
        console.log(document.getElementById("hoge").innerText);
        console.log("パー🖐");
        console.log(document.getElementById("kekka").innerText);
}
    
function uranai(){
    var num =Math.random()*Math.floor(6);
        console.log(num);
        if(num<1){
            document.getElementById("U1").innerText = "大吉"; 
            console.log(document.getElementById("U1").innerText);
    }
         if(1<=num&&num<2){
        document.getElementById("U1").innerText = "中吉";  
        console.log(document.getElementById("U1").innerText);
    }   
        if(2<=num&&num<3){
         document.getElementById("U1").innerText = "小吉";  
         console.log(document.getElementById("U1").innerText);
    }
        if(3<=num&&num<4){
         document.getElementById("U1").innerText = "吉";  
         console.log(document.getElementById("U1").innerText);
    }
        if(4<=num&&num<5){
         document.getElementById("U1").innerText = "凶";  
        console.log(document.getElementById("U1").innerText);
    }
        if(5<=num&&num<6){
        document.getElementById("U1").innerText = "大凶";  
         console.log(document.getElementById("U1").innerText);
    }

}

    