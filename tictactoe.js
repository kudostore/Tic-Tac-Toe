let boxes =document.querySelectorAll(".box");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let resetbtn= document.querySelector("#reset");
let newbtn= document.querySelector("#newbtn");

turno=true;
count=0;
const winpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
boxes.forEach((box)=> {
    box.addEventListener('click', () =>{
        if (turno) {
            box.innerText= "O";
            turno = false;
        } else {
            box.innerText= "X";
            turno = true;
        }
        box.disabled = true;
        count ++;
        let win = checkwinner();
        if (count==9 && !win) {
            gamedraw();
        }
    });
});
const gamedraw = ()=>{
    msg.innerText = 'This Game Is Draw';
    msgcontainer.classList.remove("hide");
    disabledbox();
} 
const disabledbox =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for(box of boxes){   
        box.disabled = false;
        box.innerText = "";
        }
}

const resetgame=()=>{
    turno = true;
    enablebox();
    count=0;
    msgcontainer.classList.add("hide");
}

const showwinner= (winner) =>{
msg.innerText=`Congrats! Winner Is ${winner}`;
msgcontainer.classList.remove("hide");
disabledbox();
}
const checkwinner= () => {
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 !="")
            if (pos1 == pos2 && pos2 ==  pos3) {
                showwinner(pos1);
                return true;
            }
    }
}
console.log("hi");
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);