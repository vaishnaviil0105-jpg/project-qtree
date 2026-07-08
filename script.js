// Health Progress Animation

window.onload = function(){

    setTimeout(()=>{

        document.getElementById("healthBar")
        .style.width="82%";

    },500);

};




// Dark / Light Mode

let modeBtn = document.getElementById("mode");


modeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){

        modeBtn.innerHTML="🌙";

    }
    else{

        modeBtn.innerHTML="☀️";

    }


});







// Deployment Simulation


let deployBtn =
document.getElementById("deploy");


let steps =
document.querySelectorAll(".step");


let logs =
document.getElementById("logs");


deployBtn.addEventListener("click",()=>{


    deployBtn.innerHTML="Deploying... ⏳";


    let current = 3;



    let timer=setInterval(()=>{


        if(current < steps.length){


            steps[current].classList.add("active");



            let li=document.createElement("li");


            if(current==3){

                li.innerHTML=
                "🔐 Security Scan completed successfully";

            }


            if(current==4){

                li.innerHTML=
                "🚀 Application deployed to Production";

            }



            logs.appendChild(li);


            current++;


        }


        else{


            clearInterval(timer);


            deployBtn.innerHTML=
            "Deployment Completed ✅";


            let finalLog=document.createElement("li");


            finalLog.innerHTML=
            "🎉 Release v2.4.1 is live";


            logs.appendChild(finalLog);


        }



    },2000);



});







// Live Time Display


let timeBox=document.createElement("p");


document.querySelector("header div")
.appendChild(timeBox);



function clock(){


let now=new Date();


timeBox.innerHTML=
"Server Time : "
+
now.toLocaleTimeString();


}



setInterval(clock,1000);

clock();








// Random System Health Update


let health =
document.getElementById("health");


setInterval(()=>{


let value =
Math.floor(Math.random()*10)+85;


health.innerHTML=value+"%";


document.getElementById("healthBar")
.style.width=value+"%";



},5000);







// Add New Activity Automatically


let activities=[

"📦 New package version detected",

"🧪 Unit tests executed",

"⚡ Build optimization completed",

"🔍 Code review approved"

];



setInterval(()=>{


let random =
activities[
Math.floor(Math.random()*activities.length)
];


let item=document.createElement("li");


item.innerHTML=random;


logs.prepend(item);



},7000);