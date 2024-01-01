let music = new Audio("./assets/music.mp3");
        let audioTurn = new Audio("./assets/ting.mp3");
        let gameOver = new Audio("./assets/gameover.mp3");
        let turn = "X";

        let isGame = false;

        // Function to change the turn
        const changeTurn = () => {
            return turn === 'X' ? "O" : "X";
        }

        // Function to check the win
        const checkWin = () => {
            // logic to check win
            let boxtext = document.getElementsByClassName('boxText');

            let wins = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            wins.forEach((e, idx) => {
                if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
                    document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won";
                    isGame = true;

                    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "450px";

                    // draw line on matching
                    if(idx == 0){
                        document.querySelector('.match-line').style.rotate="90deg";
                        document.querySelector('.match-line').style.left="-40px";
                        document.querySelector('.match-line').style.top="-150px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 1){
                        document.querySelector('.match-line').style.rotate="90deg";
                        document.querySelector('.match-line').style.left="-40px";
                        document.querySelector('.match-line').style.top="0px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 2){
                        document.querySelector('.match-line').style.rotate="90deg";
                        document.querySelector('.match-line').style.left="-40px";
                        document.querySelector('.match-line').style.top="160px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 3){
                        document.querySelector('.match-line').style.rotate="180deg";
                        document.querySelector('.match-line').style.left="-200px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 4){
                        document.querySelector('.match-line').style.rotate="180deg";
                        document.querySelector('.match-line').style.left="-45px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 5){
                        document.querySelector('.match-line').style.rotate="180deg";
                        document.querySelector('.match-line').style.left="110px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 6){
                        document.querySelector('.match-line').style.rotate="-45deg";
                        document.querySelector('.match-line').style.left="-45px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                    if(idx == 7){
                        document.querySelector('.match-line').style.rotate="45deg";
                        document.querySelector('.match-line').style.left="-45px";
                        document.querySelector('.match-line').style.height="450px";
                    }
                }
            })
        }

        // game logic
        // music.play();

        let boxes = document.getElementsByClassName('division1');
        Array.from(boxes).forEach(element => {
            let boxtext = element.querySelector('.boxText');
            element.addEventListener('click', () => {
                if (boxtext.innerHTML === "") {
                    boxtext.innerHTML = turn;
                    turn = changeTurn();
                    audioTurn.play();
                    checkWin();
                    if (!isGame) {
                        document.getElementsByClassName('info')[0].innerHTML = `Turn for ${turn}`;
                    }
                }
            })
        })
        

        // Logic for reset button
        
        document.getElementById('reset-btn').addEventListener('click', () => {
            let boxtexts = document.querySelectorAll('.boxText');
            Array.from(boxtexts).forEach(element => {
                element.innerHTML = "";
            });
            turn = "X";
            isGame = false;
            document.getElementsByClassName('info')[0].innerHTML = `Turn for ${turn}`;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0"
            document.querySelector('.match-line').style.height="0";
        })
