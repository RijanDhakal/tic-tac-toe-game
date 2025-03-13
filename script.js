let boxes = document.body.querySelectorAll(".box");
// console.log(boxes);

let reset_button = document.body.querySelector(".reset");
let regame_buttom = document.body.querySelector(".regame");

let turnO = true; //player-O and player-X
document.body.querySelector(".turn").innerText = 'Its "O" turn';


// let arr = [["mango", "appale" , "banana"],["cauli", "bhindi", "aalu"],["car" , "bus" , "bike"]]
// console.log(arr)

const win_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        console.log("box was clicked")
        if (turnO == true) {
            document.body.querySelector(".turn").innerText = 'Its "X" turn';
            box.innerHTML = "O";
            turnO = false;
            box.disabled = true;

        }
        else {
            document.body.querySelector(".turn").innerText = 'Its "O" turn';
            turnO = true
            box.innerHTML = "X";
            box.disabled = true;
        }
        check_winner()
    })

})

const check_winner = () => {
    for (let pattern of win_pattern) {
        let position_1 = boxes[pattern[0]].innerText;
        let position_2 = boxes[pattern[1]].innerText;
        let position_3 = boxes[pattern[2]].innerText;

        if (position_1 != "" && position_2 != "" && position_3 != "") {
            if (position_1 === position_2 && position_2 === position_3) {
                document.body.querySelector(".winner").style.display = "flex";
               document.body.querySelector(".winner").innerHTML = `${position_1} is the winner !!!`
               boxes.forEach((box)=>{
                box.disabled= true;
               })
            }
        }
    }
}

reset_button.addEventListener("click", () => {
    boxes.forEach((e) => {
        e.innerHTML = "";
        e.disabled = false;
        document.body.querySelector(".winner").style.display = "none";

    })
})