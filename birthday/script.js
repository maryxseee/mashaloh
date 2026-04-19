let state = 0;
let feng = 0;
let ready = true;

const car = document.getElementById("car");
const masha = document.getElementById("masha");
const box = document.getElementById("box");
const bg = document.getElementById("bg");
const tap = document.getElementById("tap");
const fengBtn = document.getElementById("fengBtn");
const heart = document.getElementById("heart");
const tapHeart = document.getElementById("tapHeart");
const titles = document.getElementById("titles");
const video = document.getElementById("video");
const music = document.getElementById("music");

/* музика */
document.body.addEventListener("click", () => music.play(), {once:true});

/* загальний клік */
document.body.addEventListener("click", () => {
  if(!ready) return;
  next();
});

/* кнопка тикни */
tapHeart.onclick = (e)=>{
  e.stopPropagation(); // щоб не викликався body click
  tapHeart.style.display="none";
  next();
};

function next(){
  state++;

  switch(state){

    case 1: carMove("bg1.jpg"); break;
    case 2: carMove("bg2.jpg"); break;
    case 3: carMove("bg3.jpg"); break;
    case 4: carMove("bg4.jpg"); break;

    case 5:
      masha.style.display="block";
      break;

    case 6:
      masha.src="img/masha2.PNG";
      break;

    case 7:
      box.style.display="block";
      break;

    case 8:
      car.style.left="1500px";
      masha.style.left="150%";
      tap.style.display="none";
      fengBtn.style.display="block";
      break;

    case 9:
    case 10:
    case 11:
    case 12:
      feng++;
      bg.src="img/f"+feng+".jpg";
      if(feng===4) fengBtn.innerText="чекнути повідомлення";
      break;

    case 13:
      box.style.display="none";

      masha.style.display="block";
      masha.style.left="50%";
      masha.style.transform="translateX(-50%)";
      masha.style.animation="shake 0.35s infinite";

      ready = false;

      setTimeout(()=>{
        fengBtn.style.display="block";
        ready = true;
      },1500);
      break;

    case 14:
      masha.style.animation="none";
      fengBtn.style.display="none";

      startTitles();
      heart.style.display="block";

      setTimeout(()=>{
        tapHeart.style.display="block";
      },3000);

      break;

    case 15:
      music.pause();
      video.style.display="block";
      video.play();
      break;
  }
}

/* машина */
function carMove(bgImg){
  ready = false;

  car.style.transition="none";
  car.style.left="-700px";

  setTimeout(()=>{
    bg.src="img/"+bgImg;
    car.style.transition="all 1.2s ease";
    car.style.left="66%";
    car.style.transform="translateX(-50%)";
    ready = true;
  },100);
}

/* титри */
function startTitles(){
  const arr=["З днем народження","Happy Birthday","Feliz cumpleaños","生日快乐"];
  const colors=["red","yellow","blue","lime","pink"];

  for(let i=0;i<25;i++){
    let el=document.createElement("div");
    el.className="text";
    el.innerText=arr[Math.floor(Math.random()*arr.length)];
    el.style.top=Math.random()*2000+"px";
    el.style.color=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration=(4+Math.random()*4)+"s";
    titles.appendChild(el);
  }
}

/* кінець */
video.onended=()=>{
  document.body.innerHTML="";
  document.body.style.background="black";

  let end=document.createElement("div");
  end.innerText="кінець";
  end.style.color="white";
  end.style.fontSize="80px";
  end.style.position="absolute";
  end.style.top="50%";
  end.style.left="50%";
  end.style.transform="translate(-50%,-50%)";

  document.body.appendChild(end);
};