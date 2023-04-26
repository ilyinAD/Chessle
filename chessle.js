const GuessNumber = 6;
let turn_green = 0;
let last_text = [];
let all_board_game_copy = [];
let all_board_game = [];
let attempt_all_green = [];
let board_all_green = [];
let idx_first_not_green = -1;
let last_all_moves = [];
let last_picked = -1;
let guess_remain = 6;
let figure_is_choosen = 0;
let idx_x = -1;
let idx_y = -1;
let idx_box = 1;
let my_moves = [];
let my_moves_all_green = [];
let flag = 0;
let turn = 0;
let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let attempt = [];
let flag_checkmate = 0;
let NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let black = ['r', 'n', 'b', 'q', 'k', 'p'];
let white = ['R', 'N', 'B', 'Q', 'K', 'P'];
let move_or_not = [];
for (let i = 0; i < 8; ++ i){
    let array = [];
    for (let j = 0; j < 8; ++j){
        array.push(0);
    }
    move_or_not.push(array);
}
let board_game = [['r','n','b','q','k','b','n','r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']];
import {DEBUT} from "./debut.js";
let CORRECT_ANS1 = [];
let CORRECT_ANS = [];
let correct_moves = [];
let str = "";
let right_answer1 = document.getElementById("right_answer1");
let right_answer2 = document.createElement("div");
right_answer2.className = "right_answer2";
right_answer1.appendChild(right_answer2);
function Generate_new_guess(){
    
    CORRECT_ANS1 = DEBUT[Math.floor((Math.random() * DEBUT.length))];
    CORRECT_ANS = CORRECT_ANS1.moves;
    console.log(CORRECT_ANS1.name)
    console.log(CORRECT_ANS);
    correct_moves = [];
    str = "";

    console.log(CORRECT_ANS.length);
    for (let i = 0; i < CORRECT_ANS.length; ++i){
        if (CORRECT_ANS[i] != ' '){
            str += CORRECT_ANS[i];
        }
        else{
            if (NUMBERS.indexOf(str[0]) != -1){
                str = '';
                continue;
            }
            correct_moves.push(str);
            str = '';
            if (correct_moves.length == 10){
                break;
            }
        }
    }
    console.log(correct_moves);
    
    
    let sr = '';
    console.log(correct_moves[0]);
    for (let i = 0; i < correct_moves.length; ++ i){
        if (i% 2 == 0){
            sr += String((i / 2) + 1) + '. ';
        }
        sr += correct_moves[i] + '\n';
    }
    let right_answer2 = document.getElementsByClassName("right_answer1")[0].children[0];
    right_answer2.textContent = CORRECT_ANS1.name + '\n' + sr;
    right_answer2.style.display = 'none';
    
    //right_answer1.className = "right_answer1";
    

    turn_green = 0;
    last_text = [];
    all_board_game_copy = [];
    all_board_game = [];
    attempt_all_green = [];
    board_all_green = [];
    idx_first_not_green = -1;
    last_all_moves = [];
    last_picked = -1;
    guess_remain = 6;
    figure_is_choosen = 0;
    idx_x = -1;
    idx_y = -1;
    idx_box = 1;
    my_moves = [];
    my_moves_all_green = [];
    flag = 0;
    turn = 0;
    letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    //let index_of_new = [];
    attempt = [];
    flag_checkmate = 0;
    // for (let i = 0; i < 8; ++ i){
    //     index_of_new.push([]);
    //     for (let j = 0; j < 8; ++ j){
    //         index_of_new[i].push([0, 0]);
    //     }
    // }
    NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    black = ['r', 'n', 'b', 'q', 'k', 'p'];
    white = ['R', 'N', 'B', 'Q', 'K', 'P'];
    move_or_not = [];
    for (let i = 0; i < 8; ++ i){
        let array = [];
        for (let j = 0; j < 8; ++j){
            array.push(0);
        }
        move_or_not.push(array);
    }
    board_game = [['r','n','b','q','k','b','n','r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']];
    for (let i = 0; i < 8; ++ i){
        for (let j = 0; j < 8; ++ j){
            let box_figure = document.getElementsByClassName("row_figure")[i].children[j];
            if ((i + j) % 2 === 0){
                //box.classList.add("cell-black");
                box_figure.src = "board_and_figures\\black.jpg";
            }
            else{
                //box.classList.add("cell-white");    
                box_figure.src = "board_and_figures\\white.jpg";
            }
            
            if (i === 1)
                box_figure.src = "board_and_figures\\pawn_black.png";
            else if (i === 0){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_black.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_black.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_black.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_black.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_black.png";
                }
            }
            if (i === 6){
                box_figure.src = "board_and_figures\\pawn_white.png";
            }
            else if (i === 7){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_white.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_white.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_white.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_white.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_white.png";
                }
            }
        }
    }
    //let board_guesses = document.getElementById("board_guesses");
    for (let i = 0; i < GuessNumber; ++ i){
        //console.log(100);
        //let row_guesses = document.createElement("div");
        //row_guesses.className = "row_guesses";
        for (let j = 0; j < 15; ++ j){
            // let box_guesses = document.createElement("div");
            // box_guesses.className = "box_guesses";
            console.log(111);
            let box_guesses = document.getElementsByClassName("row_guesses")[i].children[j];
            if ((j % 3) === 0){
                //box_guesses.classList.add("number_guesses");
                box_guesses.textContent = String((j / 3) + 1) + '.';
            }
            else{
                box_guesses.textContent = '';
            }
            box_guesses.style.backgroundColor = 'white';
            
            //row_guesses.appendChild(box_guesses);   
        }
        //board_guesses.appendChild(row_guesses);
    }
}

let generate_guess1 = document.getElementById("generate_guess1");
let generate_guess2 = document.createElement("button");
generate_guess2.className = "generate_guess2";
generate_guess2.textContent = "Generate New Guess";
generate_guess1.appendChild(generate_guess2); 
generate_guess2.addEventListener('click', () =>{
    Generate_new_guess();
});

function InitBoard(){
    
    let board_button = document.getElementById("board_button");
    let board_cells = document.getElementById("board_cells");
    let chess_board = document.getElementById("chess_board");
    for (let i = 0; i < 8; ++ i){
        let row_button = document.createElement("div");
        row_button.className = "row_button";
        let row = document.createElement("div");
        row.className = "row";
        let row_figure = document.createElement("div");
        row_figure.className = "row_figure";
        for (let j = 0; j < 8; ++ j){
            let box_button = document.createElement("button");
            box_button.className = "box_button";
            let box_figure = document.createElement("img");
            box_figure.className = "box_figure";
            let box = document.createElement("div");
            box.className = "box";
            if ((i + j) % 2 === 0){
                box.classList.add("cell-black");
                box_figure.src = "board_and_figures\\black.jpg";
            }
            else{
                box.classList.add("cell-white");    
                box_figure.src = "board_and_figures\\white.jpg";
            }
            
            if (i === 1)
                box_figure.src = "board_and_figures\\pawn_black.png";
            else if (i === 0){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_black.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_black.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_black.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_black.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_black.png";
                }
            }
            if (i === 6){
                box_figure.src = "board_and_figures\\pawn_white.png";
            }
            else if (i === 7){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_white.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_white.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_white.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_white.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_white.png";
                }
            }
            row_button.appendChild(box_button);
            row_figure.appendChild(box_figure);
            row.appendChild(box);
            
        }
        board_button.appendChild(row_button);
        chess_board.appendChild(row_figure);
        board_cells.appendChild(row);
    }
    let button_del_add = document.getElementById("button_del_add");
    button_del_add.className = "button_del_add";
    let button_del = document.createElement("button");
    button_del.className = "button_delete";
    button_del.textContent = "Delete Move";
    let button_add = document.createElement("button");
    button_add.className = "button_add";
    button_add.textContent = "Fill Previously Correct Guesses";
    let button_submit = document.createElement("button");
    button_submit.className = "button_submit";
    button_submit.textContent = "Submit";
    button_del_add.appendChild(button_del);
    button_del_add.appendChild(button_add);
    button_del_add.appendChild(button_submit);
    
    let board_guesses = document.getElementById("board_guesses");
    for (let i = 0; i < GuessNumber; ++ i){
        console.log(100);
        let row_guesses = document.createElement("div");
        row_guesses.className = "row_guesses";
        for (let j = 0; j < 15; ++ j){
            let box_guesses = document.createElement("div");
            box_guesses.className = "box_guesses";
            if ((j % 3) === 0){
                box_guesses.classList.add("number_guesses");
                box_guesses.textContent = String((j / 3) + 1) + '.';
            }
            else{
                box_guesses.textContent = '';
            }
            
            row_guesses.appendChild(box_guesses);   
        }
        board_guesses.appendChild(row_guesses);
    }
}

let knight_moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, -2], [-1, 2]];
let rook_moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let bishop_moves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
let king_moves = [[1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1]];
let queen_moves = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]];

function get_moves_by_figure(i, j, figure, color){
    if ((figure == 'n' && color == 1) || (figure == 'N' && color == 0)){
        return knight_moves;
    }
    if ((figure == 'b' && color == 1) || (figure == 'B' && color == 0)){
        return bishop_moves;
    }
    if ((figure == 'r' && color == 1) || (figure == 'R' && color == 0)){
        return rook_moves;
    }
    if ((figure == 'k' && color == 1) || (figure == 'K' && color == 0)){
        return king_moves;
    }
    if ((figure == 'q' && color == 1) || (figure == 'Q' && color == 0)){
        return queen_moves;
    }
    if ((figure == 'p' && color == 1)){
        if (i == 1){
            return [[1, 1], [1, -1], [1, 0], [2, 0]];
        }
        else{
            return [[1, 1], [1, -1], [1, 0]];
        }
    }
    if ((figure == 'P' && color == 0)){
        if (i == 6){
            return [[-1, 1], [-1, -1], [-1, 0], [-2, 0]];
        }
        else{
            return [[-1, 1], [-1, -1], [-1, 0]];
        }
    }
    return [];
}

function get_all_moves(i0, j0, color){
    let res = [];
    let figure = board_game[i0][j0];
    let moves = get_moves_by_figure(i0, j0, figure, color);
    let cnt = 0;
    if (figure != 'p' && figure != 'P' && figure != 'k' && figure != 'K' && figure != 'n' && figure != 'N'){
        cnt = 1;
    }
    for (let iter = 0; iter < moves.length; ++ iter){
        let i = i0;
        let j = j0;
        do{
            i += moves[iter][0];
            j += moves[iter][1];
            if (i < 0 || i >= 8 || j < 0 || j >= 8){
                break;
            }
            if ((color == 0 && white.indexOf(board_game[i][j]) != -1) || (color == 1 && black.indexOf(board_game[i][j]) != -1)){
                break;
            }
           
            if (figure == 'p' && moves[iter][1] && white.indexOf(board_game[i][j]) == -1 ){
                continue;
            }
            if (figure == 'P' && moves[iter][1] != 0 && black.indexOf(board_game[i][j]) == -1 ){
                continue;
            }
            if ((figure == 'p' || figure == 'P') && moves[iter][1] == 0 && board_game[i][j] != '.'){
                break;
            }
            res.push([i, j]);
            if (board_game[i][j] != '.'){
                break;
            }
           
        } while(cnt != 0);
    }
    return res;
}
InitBoard();
Generate_new_guess();
//InitBoard();

for (let i = 0; i < 8; ++ i){
    let row_button = document.getElementsByClassName("row_button")[i];
    for (let j = 0; j < 8; ++j){
        let box_button = row_button.children[j];
        box_button.addEventListener('click', ()  => {
            let box_figure = document.getElementsByClassName("row_figure")[i].children[j];
            cl(i, j, box_figure)
        });
        box_button.blur();
    }
}

function get_position_king(color){
    if (color == 0){
        for (let i = 0; i < 8; ++ i){
            for (let j = 0; j < 8; ++ j){
                if (board_game[i][j] == 'K'){
                    return [i, j];
                }
            }
        }
    }
    else{
        for (let i = 0; i < 8; ++ i){
            for (let j = 0; j < 8; ++ j){
                if (board_game[i][j] == 'k'){
                    return [i, j];
                }
            }
        }
    }
}

//color - это цвет короля которого проверяем на шах
function is_check(i0, j0, i1, j1, color){
    let board_game_copy = [];
    for (let i = 0; i < 8; ++ i){
        let arr = [];
        for (let j = 0; j < 8; ++ j){
            arr.push(board_game[i][j]);
        }
        board_game_copy.push(arr);
    }
    board_game[i1][j1] = board_game[i0][j0];
    board_game[i0][j0] = '.';
    let pos = get_position_king(color);
    let ok = 0;
    for (let i = 0; i < 8; ++ i){
        for (let j = 0; j < 8; ++ j){
            if ((color == 0 && black.indexOf(board_game[i][j]) == -1) || (color == 1 && white.indexOf(board_game[i][j]) == -1)){
                continue;
            }
            let all_moves = get_all_moves(i, j, (color + 1) % 2);
            for (let iter = 0; iter < all_moves.length; ++iter){
                if (all_moves[iter][0] === pos[0] && all_moves[iter][1] == pos[1]){
                    ok = 1;
                    break;
                }
            }
        }
        if (ok){
            break;
        }
    }
    board_game = [];
    for (let i = 0; i < 8; ++ i){
        let arr = [];
        for (let j = 0; j < 8; ++ j){
            arr.push(board_game_copy[i][j]);
        }
        board_game.push(arr);
    }
    return ok;
}
// цвет короля которого проверяем на мат
function is_mate(i0, j0, i1, j1, color){
    let board_game_copy2 = [];
    for (let i = 0; i < 8; ++ i){
        let arr = [];
        for (let j = 0; j < 8; ++ j){
            arr.push(board_game[i][j]);
        }
        board_game_copy2.push(arr);
    }
    board_game[i1][j1] = board_game[i0][j0];
    board_game[i0][j0] = '.';
    let ok = 1;
    for (let i = 0; i < 8; ++ i){
        for (let j = 0; j < 8; ++ j){
            if ((color == 1 && black.indexOf(board_game[i][j]) == -1) || (color == 0 && white.indexOf(board_game[i][j]) == -1)){
                continue;
            }
            let all_moves = get_all_moves(i, j, color);
            for (let iter = 0; iter < all_moves.length; ++ iter){
                if (!is_check(i, j, all_moves[iter][0], all_moves[iter][1], color)){
                    //console.log(i);
                    //console.log(j);

                    //console.log(all_moves[iter][0]);
                    //console.log(all_moves[iter][1]);
                    ok  = 0;
                    break;
                }
            }
            if (ok === 0){
                break;
            }
        }
        if (ok === 0){
            break;
        }
    }
    board_game = [];
    for (let i = 0; i < 8; ++ i){
        let arr = [];
        for (let j = 0; j < 8; ++ j){
            arr.push(board_game_copy2[i][j]);
        }
        board_game.push(arr);
    }
    return ok;
}

function clear(){
    if (last_picked != -1){
        last_picked.classList.remove("cell_picked");
    }
    last_picked = -1;
    if (last_all_moves.length != 0){
        for (let iter = 0; iter < last_all_moves.length; ++ iter){
            if (board_game[last_all_moves[iter][0]][last_all_moves[iter][1]] != '.'){
                continue;
            }
            if (is_check(idx_x, idx_y, last_all_moves[iter][0], last_all_moves[iter][1], turn)){
                continue;
            }
            let box1 = document.getElementsByClassName("row_figure")[last_all_moves[iter][0]].children[last_all_moves[iter][1]];
            box1.classList.remove("cell-beats");
            if ((last_all_moves[iter][0] + last_all_moves[iter][1]) % 2 == 0){
                box1.src = "board_and_figures\\black.jpg";
            }
            else{
                console.log(last_all_moves[iter][0]);
                console.log(last_all_moves[iter][1]);
                box1.src = "board_and_figures\\white.jpg";
            }
        }
    }
    last_all_moves = [];
}

function picked(i, j){
    let box = document.getElementsByClassName("row")[i].children[j];
    box.classList.add("cell_picked");
    last_picked = box;
    let all_moves = get_all_moves(i, j, turn);
    for (let iter = 0; iter < all_moves.length; ++ iter){
        if (board_game[all_moves[iter][0]][all_moves[iter][1]] != '.'){
            continue;
        }
        if (is_check(i, j, all_moves[iter][0], all_moves[iter][1], turn)){
            continue;
        }
        let box1 = document.getElementsByClassName("row_figure")[all_moves[iter][0]].children[all_moves[iter][1]];
        box1.classList.add("cell-beats");
        box1.src = "board_and_figures\\picked.jpg";
    }
    last_all_moves = all_moves;   
}


function rocker(idx1, idx2, idx3, idx4, idx5, box_figure3, idx0){
    let Text = '';
    if (idx4 == 7){
        Text = 'O-O';
    }
    else{
        Text = 'O-O-O';
    }
    if (idx5 == 7){
        
        board_game[idx5][idx1] = 'K';
        board_game[idx5][idx2] = 'R';
        board_game[idx5][idx3] = '.';
        board_game[idx5][idx4] = '.';
    }
    else{
        board_game[0][2] = 'k';
        board_game[0][3] = 'r';
        board_game[0][4] = '.';
        board_game[0][0] = '.';
    }
    let box_figure0 =  document.getElementsByClassName("row_figure")[idx5].children[idx3];
    let box_figure1 = document.getElementsByClassName("row_figure")[idx5].children[idx2];
    let box_figure2 =  document.getElementsByClassName("row_figure")[idx5].children[idx1];
    box_figure1.src = box_figure3.src;
    box_figure2.src = box_figure0.src;
    let box_figure_add = document.createElement("img");
    box_figure_add.className = "box_figure";
    document.getElementsByClassName("row_figure")[idx5].insertBefore(box_figure_add, box_figure0);
    box_figure0.remove();
    let box_figure_add1 = document.createElement("img");
    box_figure_add1.className = "box_figure";
    document.getElementsByClassName("row_figure")[idx5].insertBefore(box_figure_add1, box_figure3);
    box_figure3.remove();
    if (idx0 == 0){
        box_figure_add.src = "board_and_figures\\white.jpg";
        box_figure_add1.src = "board_and_figures\\black.jpg";
    }
    if (idx0 == 1){
        box_figure_add.src = "board_and_figures\\white.jpg";
        box_figure_add1.src = "board_and_figures\\white.jpg";
    }
    if (idx0 == 2){
        box_figure_add.src = "board_and_figures\\black.jpg";
        box_figure_add1.src = "board_and_figures\\white.jpg";
    }
    if (idx0 == 3){
        box_figure_add.src = "board_and_figures\\black.jpg";
        box_figure_add1.src = "board_and_figures\\black.jpg";
    }
    return Text;    
}

function cl(i, j, box_figure) {
    console.log(100);
    if (figure_is_choosen){    
        
        let i1 = i;
        let j1 = j;
        if (i1 == 7 && j1 == 6){
            j1 = 7;
        }
        else if (i1 == 7 && j1 == 1){
            j1 = 0;
        }
        else if (i1 == 0 && j1 == 1){
            j1 = 0;
        }
        else if (i1 == 0 && j1 == 6){
            j1 = 7;
        }
        let box_figure3 = document.getElementsByClassName("row_figure")[i1].children[j1];
        console.log('check');
        console.log(move_or_not);
        console.log('check');
        if ((board_game[idx_x][idx_y] == 'k' || board_game[idx_x][idx_y] == 'K') && (board_game[i1][j1] == 'r' || board_game[i1][j1] == 'R') && (move_or_not[idx_x][idx_y] == 0 && 
            move_or_not[i1][j1] == 0)){
                clear();
                //picked_remove(idx_x, idx_y);
                
                let ok = 0;
                let Text = '';
                let cur_move = [];
                if (board_game[idx_x][idx_y] == 'K' && board_game[i1][j1] == 'R'){
                    if (j1 == 7 && board_game[7][5] == '.' && board_game[7][6] == '.'){
                        ok = 1;
                        
                        cur_move.push(7);
                        cur_move.push(4);
                        cur_move.push(board_game[7][4]);
                        cur_move.push(7);
                        cur_move.push(6);
                        cur_move.push(board_game[7][6]);
                        cur_move.push(7);
                        cur_move.push(7);
                        cur_move.push(board_game[7][7]);
                        cur_move.push(7);
                        cur_move.push(5);
                        cur_move.push(board_game[7][5]);
                        my_moves.push(cur_move);
                        Text = rocker(6, 5, 4, 7, 7, box_figure3, 0);
                    }
                    if (j1 == 0 && board_game[7][1] == '.' && board_game[7][2] == '.' && board_game[7][3] == '.'){
                        ok = 1;
                        cur_move.push(7);
                        cur_move.push(4);
                        cur_move.push(board_game[7][4]);
                        cur_move.push(7);
                        cur_move.push(2);
                        cur_move.push(board_game[7][2]);
                        cur_move.push(7);
                        cur_move.push(0);
                        cur_move.push(board_game[7][0]);
                        cur_move.push(7);
                        cur_move.push(3);
                        cur_move.push(board_game[7][3]);
                        my_moves.push(cur_move);
                        Text = rocker(2, 3, 4, 0, 7, box_figure3, 1);
                    }
                }
                else if (board_game[idx_x][idx_y] == 'k' && board_game[i1][j1] == 'r'){
                    if (j1 == 7 && board_game[0][5] == '.' && board_game[0][6] == '.'){
                        ok = 1;
                        
                        cur_move.push(0);
                        cur_move.push(4);
                        cur_move.push(board_game[0][4]);
                        cur_move.push(0);
                        cur_move.push(6);
                        cur_move.push(board_game[0][6]);
                        cur_move.push(0);
                        cur_move.push(7);
                        cur_move.push(board_game[0][7]);
                        cur_move.push(0);
                        cur_move.push(5);
                        cur_move.push(board_game[0][5]);
                        my_moves.push(cur_move);
                        Text = rocker(6, 5, 4, 7, 0, box_figure3, 2);
                    }
                    if (j1 == 0 && board_game[0][1] == '.' && board_game[0][2] == '.' && board_game[0][3] == '.'){
                        ok = 1;
                        
                        cur_move.push(0);
                        cur_move.push(4);
                        cur_move.push(board_game[0][4]);
                        cur_move.push(0);
                        cur_move.push(2);
                        cur_move.push(board_game[0][2]);
                        cur_move.push(0);
                        cur_move.push(0);
                        cur_move.push(board_game[0][0]);
                        cur_move.push(0);
                        cur_move.push(3);
                        cur_move.push(board_game[0][3]);
                        my_moves.push(cur_move);
                        Text = rocker(2, 3, 4, 0, 0, box_figure3, 3);
                    }
                }
                if (ok){
                    all_board_game.push(board_game);
                    turn += 1;
                    turn %= 2;
                    figure_is_choosen = 0;
                    let indi = 8 - i1;
                    let indj = letter[j1];
                    let box_guesses = document.getElementsByClassName("row_guesses")[GuessNumber - guess_remain].children[idx_box];
                    box_guesses.textContent = Text;
                    box_guesses.classList.add("filled_box");
                    attempt.push(Text);
                    ++idx_box;
                    if (idx_box % 3 == 0){
                        ++idx_box;
                    }

                    //last_text.push(box_guesses.textContent);
                    return;
                }
        }
        //console.log('check');
        let b = 0;
        let arr = get_all_moves(idx_x, idx_y, (turn));
        for (let iter = 0; iter < arr.length; ++ iter){
            if (arr[iter][0] == i && arr[iter][1] == j){
                b = 1;
                break;
            }
        }
        if (!b){
            clear();
            if ((turn == 0 && white.indexOf(board_game[i][j]) != -1) || (turn == 1 && black.indexOf(board_game[i][j]) != -1)){
                figure_is_choosen = 1;
                picked(i, j);
                idx_x = i;
                idx_y = j;
            }
            else{
                box_figure.blur();
                figure_is_choosen = 0;
            }
        }
        else if (guess_remain != 0 && idx_box != 16 && !flag_checkmate){
            clear();
            //picked_remove(idx_x, idx_y);
            let b1 = is_check(idx_x, idx_y, i, j, turn);
           // console.log(b1);
            if (b1){
                box_figure.blur();
                figure_is_choosen = 0;
                return;
            }
            let check = '';
            if (is_check(idx_x, idx_y, i, j, (turn + 1) % 2)){
                check = '+';
            }
            let b2 = is_mate(idx_x, idx_y, i, j, (turn + 1) % 2);
            let cur_move = [];
            cur_move.push(idx_x);
            cur_move.push(idx_y);
            cur_move.push(board_game[idx_x][idx_y]);
            cur_move.push(i);
            cur_move.push(j);
            cur_move.push(board_game[i][j]);
            my_moves.push(cur_move);
            if (board_game[i][j] != '.'){
                flag = 1;
            }
            turn += 1;
            turn %= 2;
            let figure_move = board_game[idx_x][idx_y];
            board_game[idx_x][idx_y] = '.';
            board_game[i][j] = figure_move;
            let row_figure1 = document.getElementsByClassName("row_figure")[idx_x];
            let box_figure1 = row_figure1.children[idx_y];
            let box_figure_add = document.createElement('img');
            let figure = box_figure1.src;
            box_figure_add.className = "box_figure";
            if ((idx_x + idx_y) % 2 === 0){
                box_figure_add.src = "board_and_figures\\black.jpg";
            }
            else{
                box_figure_add.src = "board_and_figures\\white.jpg";
            }
            row_figure1.insertBefore(box_figure_add, box_figure1);
            figure_is_choosen = 0;
            move_or_not[idx_x][idx_y] = 1;
            box_figure1.remove();
            box_figure.src = figure;
            figure_is_choosen = 0;
            box_figure.blur();
            figure_move = board_game[i][j];
            figure_move = figure_move.toUpperCase();
            let eat = '';
            if (flag){
                eat = 'x';
            }
            if (figure_move == 'P'){
                figure_move = '';
                if (flag)
                    eat = letter[idx_y] + eat;
            }
            let indi = 8 - i;
            let indj = letter[j];
            let box_guesses = document.getElementsByClassName("row_guesses")[GuessNumber - guess_remain].children[idx_box];
           
            flag = 0;
            
            if (b2){
                check = '#';
                flag_checkmate = 1;
            }
            box_guesses.textContent = String(figure_move) + eat + String(indj) + String(indi) + check;
            box_guesses.classList.add("filled_box");
            attempt.push(String(figure_move) + eat + String(indj) + String(indi));
            ++idx_box;
            if (idx_box % 3 == 0){
                ++idx_box;
            }
            let board_game_copy = [];
            for (let x = 0; x < 8; ++ x){
                let arr = [];
                for (let y = 0; y < 8; ++ y){
                    arr.push(board_game[x][y]);
                }
                board_game_copy.push(arr);
            }
            all_board_game.push(board_game_copy);
            //console.log(33);
            //console.log(board_game);
            //console.log(all_board_game);
            //console.log(33);
            //last_text.push(box_guesses.textContent);
        }
        
    }
    else{
        clear();
        if (board_game[i][j] != '.' && ((turn === 0 && white.indexOf(board_game[i][j]) != -1) || (turn === 1 && black.indexOf(board_game[i][j]) != -1))){
            idx_x = i;
            idx_y = j;
            picked(i, j);
            figure_is_choosen = 1;
        }
    }
}

function check_guess(){
    if (guess_remain == 0){
        return ;
    }
    if (idx_box != 16){
        toastr.error("Сначала сделайте все ходы");
        return;
    }
    clear();
    let ok = 1;
    //console.log(attempt);
    let b = -1;
    let b1 = -1;
    board_all_green = [];
    attempt_all_green = [];
    my_moves_all_green = [];
    all_board_game_copy = [];
    //console.log(22);
    //console.log(all_board_game);
    //console.log(22);
    for (let i = 0; i < attempt.length; ++i){
        let color = '';
        if (attempt[i] == correct_moves[i]){
            color = 'green';
        }
        else if (correct_moves.indexOf(attempt[i]) != -1){
            color = 'yellow';
            ok = 0;
        }
        else{
            color = 'gray';
            ok = 0;
        }
        if (color != 'green' && b == -1){
            idx_first_not_green = i;
            b = 0;
            b1 = 0;
            if (i != 0){
                for (let x = 0; x < 8; ++ x){
                    let arr = [];
                    for (let y = 0; y < 8; ++ y){
                        arr.push(all_board_game[i - 1][x][y]);
                    }
                    board_all_green.push(arr);
                }
                //board_all_green = all_board_game[i - 1];
            }
        }
        if (b1 == -1){
            turn_green = (i) % 2;
            turn_green += 1;
            turn_green %= 2;
            all_board_game_copy.push(all_board_game[i]);
            attempt_all_green.push(attempt[i]);
            my_moves_all_green.push(my_moves[i]);
        }
        // else{
        //     //attempt_all_green.push('');
        // }
        let i1 = i;
        if (i1 <= 1){
            i1 += 1;
        }
        else if (i1 <= 3){
            i1 += 2;
        }
        else if (i1 <= 5){
            i1 += 3;
        }
        else if (i1 <= 7){
            i1 += 4;
        }
        else if (i1 <= 9){
            i1 += 5;
        }

        let box_guesses = document.getElementsByClassName("row_guesses")[GuessNumber - guess_remain].children[i1];
        box_guesses.style.backgroundColor = color;
        if (b1 == -1){
            last_text.push(box_guesses.textContent);
        }
    }
    //console.log(10000);
    //console.log(board_all_green);
    //console.log(10000);
    --guess_remain;
    
    idx_box = 1;
    board_game = [['r','n','b','q','k','b','n','r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']];
    attempt = [];
    figure_is_choosen = 0;
    my_moves = [];
    for (let i = 0; i < 8; ++ i){
        for (let j = 0; j < 8; ++ j){
            let box_figure = document.getElementsByClassName("row_figure")[i].children[j];
            if ((i + j) % 2 === 0){
                box_figure.src = "board_and_figures\\black.jpg";
            }
            else{
                box_figure.src = "board_and_figures\\white.jpg";
            }
            if (i === 1)
                box_figure.src = "board_and_figures\\pawn_black.png";
            else if (i === 0){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_black.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_black.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_black.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_black.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_black.png";
                }
            }
            else if (i === 6){
                box_figure.src = "board_and_figures\\pawn_white.png";
            }
            else if (i === 7){
                if (j === 0 || j === 7){
                    box_figure.src = "board_and_figures\\rook_white.png";
                }
                else if (j === 1 || j === 6){
                    box_figure.src = "board_and_figures\\knight_white.png";
                }
                else if (j === 2 || j === 5){
                    box_figure.src = "board_and_figures\\bishop_white.png";
                }
                else if(j === 3){
                    box_figure.src = "board_and_figures\\queen_white.png";
                }
                else{
                    box_figure.src = "board_and_figures\\king_white.png";
                }
            }
        }
    }
    move_or_not = [];
    for (let i = 0; i < 8; ++ i){
        let array = [];
        for (let j = 0; j < 8; ++j){
            array.push(0);
        }
        move_or_not.push(array);
    }
    console.log(11);
    console.log(move_or_not);
    console.log(11);
    all_board_game = [];
    //last_text = [];
    
    if (ok){
        toastr.success("Поздравляем ты победил!");
        guess_remain = 0;
        idx_box = 1;
        let right_answer2 = document.getElementsByClassName("right_answer1")[0].children[0];
        right_answer2.style.display = 'flex';
        return;
    }
    if (guess_remain == 0){
        toastr.error("Вы проиграли!");
        let right_answer2 = document.getElementsByClassName("right_answer1")[0].children[0];
        right_answer2.style.display = 'flex';
    }
}

function get_path_by_figure(figure){
    let ans = "";
    if (figure == 'n'){
        ans = "board_and_figures\\knight_black.png";
    }
    else if (figure == 'b'){
        ans = "board_and_figures\\bishop_black.png";
    }
    else if (figure == 'r'){
        ans = "board_and_figures\\rook_black.png";
    }
    else if (figure == 'p'){
        ans = "board_and_figures\\pawn_black.png";
    }
    else if (figure == 'q'){
        ans = "board_and_figures\\queen_black.png";
    }
    else if (figure == 'k'){
        ans = "board_and_figures\\king_black.png";
    }
    else if (figure == 'N'){
        ans = "board_and_figures\\knight_white.png";
    }
    else if (figure == 'B'){
        ans = "board_and_figures\\bishop_white.png";
    }
    else if (figure == 'R'){
        ans = "board_and_figures\\rook_white.png";
    }
    else if (figure == 'P'){
        ans = "board_and_figures\\pawn_white.png";
    }
    else if (figure == 'Q'){
        ans = "board_and_figures\\queen_white.png";
    }
    else if (figure == 'K'){
        ans = "board_and_figures\\king_white.png";
    }
    return ans;

}

function delete_move(){
    //console.log(idx_box);
    if (idx_box === 1){
        return;
    }
    if (guess_remain == 0){
        return;
    }
    clear();
    let cur_move = my_moves[my_moves.length - 1];
    let box_figure_start = document.getElementsByClassName("row_figure")[cur_move[0]].children[cur_move[1]];
    let box_figure_end = document.getElementsByClassName("row_figure")[cur_move[3]].children[cur_move[4]];
    
    // let figure0 = box_figure_start.src;
    // let figure1 = box_figure_end.src;
    //console.log(cur_move[2])
    console.log(cur_move);
    let ans0 = get_path_by_figure(cur_move[5]);
    box_figure_start.src = get_path_by_figure(cur_move[2]);
    box_figure_end.src = get_path_by_figure(cur_move[5]);
    board_game[cur_move[0]][cur_move[1]] = cur_move[2];
    board_game[cur_move[3]][cur_move[4]] = cur_move[5];
    if (ans0.length === 0){
        let box_figure_add = document.createElement("img");
        box_figure_add.className = "box_figure";
        if ((cur_move[3] + cur_move[4]) % 2 === 0){
            box_figure_add.src = "board_and_figures\\black.jpg";
        }
        else{
            box_figure_add.src = "board_and_figures\\white.jpg";
        }
        
        document.getElementsByClassName("row_figure")[cur_move[3]].insertBefore(box_figure_add, box_figure_end);

        box_figure_add.blur();
        box_figure_end.remove();
    }
    if (cur_move.length > 6){
        console.log(1111);
        box_figure_start = document.getElementsByClassName("row_figure")[cur_move[6]].children[cur_move[7]];
        box_figure_end = document.getElementsByClassName("row_figure")[cur_move[9]].children[cur_move[10]];
        ans0 = get_path_by_figure(cur_move[11]);
        box_figure_start.src = get_path_by_figure(cur_move[8]);
        box_figure_end.src = get_path_by_figure(cur_move[11]);
        board_game[cur_move[6]][cur_move[7]] = cur_move[8];
        board_game[cur_move[9]][cur_move[10]] = cur_move[11];
        if (ans0.length === 0){
            let box_figure_add = document.createElement("img");
            box_figure_add.className = "box_figure";
            if ((cur_move[9] + cur_move[10]) % 2 === 0){
                box_figure_add.src = "board_and_figures\\black.jpg";
            }
            else{
                box_figure_add.src = "board_and_figures\\white.jpg";
            }
            
            document.getElementsByClassName("row_figure")[cur_move[9]].insertBefore(box_figure_add, box_figure_end);

            box_figure_add.blur();
            box_figure_end.remove();
        }
    }
    my_moves.pop();
    --idx_box;
    if (idx_box % 3 == 0){
        --idx_box;
    }
    let box_guesses = document.getElementsByClassName("row_guesses")[GuessNumber - guess_remain].children[idx_box];
    box_guesses.textContent = "";
    box_guesses.classList.remove("filled_box");
    turn += 1;
    turn %= 2;
    figure_is_choosen = 0;
    attempt.pop();
    flag_checkmate = 0;
    all_board_game.pop();
    //last_text.pop();
}

function do_moves(){
    clear();
    console.log(100);
    if (idx_box !=  1){
        console.log("looose");
        return;
    }
    if (attempt_all_green.length == 0){
        return;
    }
    all_board_game = [];
    for (let i = 0; i < all_board_game_copy.length; ++ i){
        all_board_game.push(all_board_game_copy[i]);
    }
    for (let i = 0; i < idx_first_not_green; ++ i){
        attempt.push(attempt_all_green[i]);
        let i1 = i;
        if (i1 <= 1){
            i1 += 1;
        }
        else if (i1 <= 3){
            i1 += 2;
        }
        else if (i1 <= 5){
            i1 += 3;
        }
        else if (i1 <= 7){
            i1 += 4;
        }
        else if (i1 <= 9){
            i1 += 5;
        }
        //console.log(100);
        //console.log(i1);
        //console.log(100);
        let box_guesses = document.getElementsByClassName("row_guesses")[GuessNumber - guess_remain].children[i1];
        box_guesses.textContent = last_text[i];
        box_guesses.classList.add("filled_box");
    }
    board_game = [];
    for (let i = 0; i < 8; ++ i){
        let arr = [];
        for (let j = 0; j < 8; ++ j){
            arr.push(board_all_green[i][j]);
        }
        board_game.push(arr);
    }
    for (let i = 0; i < 8; ++ i){
        for (let j = 0; j < 8; ++ j){
            let box_figure = document.getElementsByClassName("row_figure")[i].children[j];
            let ans = get_path_by_figure(board_game[i][j]);
            
            if (ans.length == 0){
                console.log(1000);
                if ((i + j) % 2 == 0){
                    box_figure.src = "board_and_figures\\black.jpg";
                }
                else{
                    box_figure.src = "board_and_figures\\white.jpg";
                }
            }
            else{
                box_figure.src = ans;
            }
        }
    }
    let i1 = idx_first_not_green;
    if (i1 <= 1){
        i1 += 1;
    }
    else if (i1 <= 3){
        i1 += 2;
    }
    else if (i1 <= 5){
        i1 += 3;
    }
    else if (i1 <= 7){
        i1 += 4;
    }
    else if (i1 <= 9){
        i1 += 5;
    }
    idx_box = i1;
    my_moves = [];
    for (let i = 0; i < my_moves_all_green.length; ++ i){
        my_moves.push(my_moves_all_green[i]);
    }
    //console.log(my_moves);
    turn = turn_green;
}

let button_del = document.getElementsByClassName("button_del_add")[0].children[0];
button_del.addEventListener('click', function(){
    console.log(201);
    delete_move();
})

let button_add = document.getElementsByClassName("button_del_add")[0].children[1];
button_add.addEventListener('click', function(){
    do_moves();
})

let button_submit = document.getElementsByClassName("button_del_add")[0].children[2];
button_submit.addEventListener('click', function(){
    check_guess();
})

document.addEventListener("keydown", function(event){
    if (guess_remain == 0){
        return;
    }
    //let s = event.key;
    let pressed_char = String(event.key);
    //console.log(pressed_char);
    if (pressed_char == 'Enter')
        check_guess();
    if (pressed_char == 'Backspace' || pressed_char == 'ArrowLeft'){
        delete_move();
    }
    if (pressed_char == 'ArrowRight'){
        //console.log(100);
        do_moves();
    }
});
