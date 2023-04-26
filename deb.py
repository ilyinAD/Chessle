import json
with open('debut.json') as f:
    templates = json.load(f)
#out_file.write('[')
l = []
for i in range(len(templates)):
    s = ''
    t = templates[i]['moves']
    cnt = 0
    for j in t:
        if (j == ' '):
            if (ord(s[0]) <= 57 and ord(s[0]) >= 49):
                cnt += 1
            s = ''
        else:
            s += j
    if (cnt >= 6):
        l.append(templates[i])
        # out_file.write('"')
        # out_file.write(templates[i]['moves'])
        # out_file.write('"')
        # out_file.write(',')

with open('debuts1.json', 'w') as f:
    json.dump(l, f, indent='\n')



# function check_make_a_move(i0, j0, i1, j1, figure0, figure1){
#    # console.log(i1);
#    # console.log(j1);
#   #  console.log(figure0);
#     #console.log(figure1);
#     if (i0 === i1 && j0 === j1){
#         return 0;
#     }
   
    
#     if (turn === 0){
#         #console.log(figure0);
#         #console.log(figure1);
#         if (white.indexOf(figure0) === -1){
#             return 0;
#         }
#         if (white.indexOf(figure1) != -1){
#             return 0;
#         }
#         #console.log(1);
#        # console.log(figure0);
#         if (figure0 === 'N'){
#             #console.log(116);
#             if ((Math.abs(i0 - i1) === 2 && Math.abs(j1 - j0) === 1) || (Math.abs(i0 - i1) === 1 && Math.abs(j1 - j0) === 2)){
#                 return 1;
#             }
#             else{
#                 return 0;
#             }
#         }
#         else if (figure0 === 'R'){
#            # console.log(115);
#             if (i0 === i1){
#                 for (let i = Math.min(j0, j1) + 1; i < Math.max(j0, j1); ++ i){
#                     if (i == j0){
#                         continue;
#                     }
#                     if (board_game[i0][i] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else if (j0 === j1){
#                 for (let i = Math.min(i0, i1) + 1; i < Math.max(i0, i1); ++ i){
#                     if (i == i0){
#                         continue;
#                     }
#                     if (board_game[i][j0] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else{
#                 return 0;
#             }
#         }
#         else if(figure0 === 'B'){
#            # console.log(114);
#             if (i0 + j0 != i1 + j1 && Math.abs(i0 - j0) != Math.abs(i1 - j1)){
#                 return 0;
#             }
#             #console.log(114);
#             let movei = 1;
#             if (i1 < i0){
#                 movei = -1;
#             }
#             let movej =1;
#             if (j1 < j0){
#                 movej = -1;
#             }
#             let i2 = i0;
#             let j2 = j0;
#             for (let i = 0; i < Math.abs(i0 - i1) - 1; ++i){
#                 i2 += movei;
#                 j2 += movej;
#                 if (board_game[i2][j2] != '.'){
#                     return 0;
#                 }
#             }
#             return 1;
#         }
#         else if (figure0 === "Q"){
#            # console.log(113);
#            if (i0 === i1){
#                 for (let i = Math.min(j0, j1) + 1; i < Math.max(j0, j1); ++ i){
#                     if (i == j0){
#                         continue;
#                     }
#                     if (board_game[i0][i] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else if (j0 === j1){
#                 for (let i = Math.min(i0, i1) + 1; i < Math.max(i0, i1); ++ i){
#                     if (i == i0){
#                         continue;
#                     }
#                     if (board_game[i][j0] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else{
#                 if (i0 + j0 != i1 + j1 && Math.abs(i0 - j0) != Math.abs(i1 - j1)){
#                     return 0;
#                 }
#                 let movei = 1;
#                 if (i1 < i0){
#                     movei = -1;
#                 }
#                 let movej =1;
#                 if (j1 < j0){
#                     movej = -1;
#                 }
#                 let i2 = i0;
#                 let j2 = j0;
#                 for (let i = 0; i < Math.abs(i0 - i1) - 1; ++i){
#                     i2 += movei;
#                     j2 += movej;
#                     if (board_game[i2][j2] != '.'){
#                         return 0;
#                     }
                    
#                 }
#                 return 1;
#             }
#         }
#         else if (figure0 === "K"){
#             #console.log(112);
#             if (Math.abs(i0 - i1) >= 2 || Math.abs(j0 - j1) >= 2){
#                 return 0;
#             }
#             let dist = Math.abs(i0 - i1) + Math.abs(j0 - j1); 
#             if (dist === 0 || dist > 2){
#                 return 0;
#             }
#             return 1;
#         }
#         else{
#             #console.log(111);
#             if (i0 === i1 + 1 && j1 === j0 + 1 && board_game[i1][j1] != '.'){
#                 return 1;
#             }
#             if (i0 === i1 + 1 && j1 === j0 - 1 && board_game[i1][j1] != '.'){
#                 return 1;
#             }
#             if (j0 != j1){
#                 return 0;
#             }
#             #console.log(111);
#             if (i0 - i1 <= 0 || i0 - i1 > 2){
#                 return 0;
#             }
#             #console.log(111);
#             if (i0 === i1 + 1){
#                 if (board_game[i1][j1] != '.'){
#                     return 0;
#                 }
#                 return 1;
#             }
#             else {
#                 if (i0 != 6){
#                     return 0;
#                 }
#                 if (board_game[i1][j1] != '.'){
#                     return 0;
#                 }
#                 return 1;
#             }
#         }
#     }
#     else{
#         #console.log(1);
#         if (black.indexOf(figure0) === -1){
#             return 0;
#         }
#         if (black.indexOf(figure1) != -1){
#             return 0;
#         }
#         #console.log(0);
#         #console.log(figure0);
#         if (figure0 === 'n'){
#             #console.log(116);
#             if ((Math.abs(i0 - i1) === 2 && Math.abs(j1 - j0) === 1) || (Math.abs(i0 - i1) === 1 && Math.abs(j1 - j0) === 2)){
#                 return 1;
#             }
#             else{
#                 return 0;
#             }
#         }
#         else if (figure0 === 'r'){
#             #console.log(115);
#             if (i0 === i1){
#                # console.log(2);
#                # console.log(Math.min(j0, j1));
#                 #console.log(Math.max(j0, j1));
#                 for (let i = Math.min(j0, j1) + 1; i < Math.max(j0, j1); ++ i){
#                     if (i == j0){
#                         continue;
#                     }
                    
#                     if (board_game[i0][i] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else if (j0 === j1){
#                 console.log(2);
#                 for (let i = Math.min(i0, i1) + 1; i < Math.max(i0, i1); ++ i){
#                     if (i == i0){
#                         continue;
#                     }
#                     console.log(board_game[i][j0]);
#                     if (board_game[i][j0] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else{
#                 console.log(2);
#                 return 0;
#             }
#         }
#         else if(figure0 === 'b'){
#             #console.log(114);
#             if (i0 + j0 != i1 + j1 && Math.abs(i0 - j0) != Math.abs(i1 - j1)){
#                 return 0;
#             }
#             let movei = 1;
#             if (i1 < i0){
#                 movei = -1;
#             }
#             let movej =1;
#             if (j1 < j0){
#                 movej = -1;
#             }
#             let i2 = i0;
#             let j2 = j0;
#             console.log(114);
#             for (let i = 0; i < Math.abs(i0 - i1) - 1; ++i){
#                 i2 += movei;
#                 j2 += movej;
#                 if (board_game[i2][j2] != '.'){
#                     return 0;
#                 }
                
#             }
#             return 1;
#         }
#         else if (figure0 === "q"){
#            # console.log(113);
#            if (i0 === i1){
#                 for (let i = Math.min(j0, j1) + 1; i < Math.max(j0, j1); ++ i){
#                     if (i == j0){
#                         continue;
#                     }
#                     if (board_game[i0][i] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else if (j0 === j1){
#                 for (let i = Math.min(i0, i1) + 1; i < Math.max(i0, i1); ++ i){
#                     if (i == i0){
#                         continue;
#                     }
#                     if (board_game[i][j0] != '.'){
#                         return 0;
#                     }
#                 }
#                 return 1;
#             }
#             else{
#                 if (i0 + j0 != i1 + j1 && Math.abs(i0 - j0) != Math.abs(i1 - j1)){
#                     return 0;
#                 }
#                 let movei = 1;
#                 if (i1 < i0){
#                     movei = -1;
#                 }
#                 let movej =1;
#                 if (j1 < j0){
#                     movej = -1;
#                 }
#                 let i2 = i0;
#                 let j2 = j0;
#                 for (let i = 0; i < Math.abs(i0 - i1) - 1; ++i){
#                     i2 += movei;
#                     j2 += movej;
#                     if (board_game[i2][j2] != '.'){
#                         return 0;
#                     }
                    
#                 }
#                 return 1;
#             }
#         }
#         else if (figure0 === "k"){
#             #console.log(112);
#             if (Math.abs(i0 - i1) >= 2 || Math.abs(j0 - j1) >= 2){
#                 return 0;
#             }
#             let dist = Math.abs(i0 - i1) + Math.abs(j0 - j1); 
#             if (dist === 0 || dist > 2){
#                 return 0;
#             }
#             return 1;
#         }
#         else{
#             #console.log(111);
#             if (i0 === i1 - 1 && j1 === j0 + 1 && board_game[i1][j1] != '.'){
#                 return 1;
#             }
#             if (i0 === i1 - 1 && j1 === j0 - 1 && board_game[i1][j1] != '.'){
#                 return 1;
#             }
#             if (j0 != j1){
#                 return 0;
#             }
#             #console.log(111);
#             if (i1 - i0 <= 0 || i1 - i0 > 2){
#                 return 0;
#             }
#             #console.log(111);
#             if (i0 === i1 - 1){
#                 if (board_game[i1][j1] != '.'){
#                     return 0;
#                 }
#                 return 1;
#             }
#             else {
#                 if (i0 != 1){
#                     return 0;
#                 }
#                 if (board_game[i1][j1] != '.'){
#                     return 0;
#                 }
#                 return 1;
#             }
#         }
#     }
# }


#color - это цвет не тех чьи ходы мы хотим получить
# function get_all_moves(i0, j0, color){
#     let res = [];
#     let figure0 = board_game[i0][j0];
#     #console.log(color);
#     if (color === 1){
#         if (white.indexOf(board_game[i0][j0]) == -1){
#             return [];
#         }
#         #console.log(figure0);
#         #console.log(figure1);
#         #console.log(1);
#        # console.log(figure0);
#         if (figure0 === 'N'){
#             #console.log(116);
#             let knight_move = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, -2], [-1, 2]];
#             for (let i = 0; i < knight_move.length; ++ i){
#                 let i1 = i0 + knight_move[i][0];
#                 let j1 = j0 + knight_move[i][1];
#                 if (i1 >= 0 && i1 < 8 && j1 >= 0 && j1 < 8 && white.indexOf(board_game[i1][j1]) == -1){
#                     res.push([i1, j1]);
#                 }
#             }
#         }
#         else if (figure0 === 'R'){
#            # console.log(115);
#             #if (i0 === i1){
#             for (let i = i0 - 1; i >= 0; -- i){
#                 if (board_game[i][j0] != '.'){
#                     if (white.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let i = i0 + 1; i < 8; ++ i){
#                 if (board_game[i][j0] != '.'){
#                     if (white.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let j = j0 - 1; j >= 0; -- j){
#                 if (board_game[i0][j] != '.'){
#                     if (white.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             for (let j = j0 + 1; j < 8; ++ j){
#                 if (board_game[i0][j] != '.'){
#                     if (white.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#         }
#         else if(figure0 === 'B'){
#             let bishop_moves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
#             for (let iter = 0; iter < bishop_moves.length; ++ iter){
#                 let i = i0 + bishop_moves[iter][0];
#                 let j = j0 + bishop_moves[iter][1];
#                 while (i >= 0 && i < 8 && j >= 0 && j < 8){
#                     if (board_game[i][j] != '.'){
#                         if (white.indexOf(board_game[i][j]) == -1){
#                             res.push([i, j]);
#                         }
#                         break;
#                     }
#                     res.push([i, j]);
#                     i += bishop_moves[iter][0];
#                     j += bishop_moves[iter][1];
#                 }
#             }  
#         }
#         else if (figure0 === "Q"){
#             for (let i = i0 - 1; i >= 0; -- i){
#                 if (board_game[i][j0] != '.'){
#                     if (white.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let i = i0 + 1; i < 8; ++ i){
#                 if (board_game[i][j0] != '.'){
#                     if (white.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let j = j0 - 1; j >= 0; -- j){
#                 if (board_game[i0][j] != '.'){
#                     if (white.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             for (let j = j0 + 1; j < 8; ++ j){
#                 if (board_game[i0][j] != '.'){
#                     if (white.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             let bishop_moves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
#             for (let iter = 0; iter < bishop_moves.length; ++ iter){
#                 let i = i0 + bishop_moves[iter][0];
#                 let j = j0 + bishop_moves[iter][1];
#                 while (i >= 0 && i < 8 && j >= 0 && j < 8){
#                     if (board_game[i][j] != '.'){
#                         if (white.indexOf(board_game[i][j]) == -1){
#                             res.push([i, j]);
#                         }
#                         break;
#                     }
#                     res.push([i, j]);
#                     i += bishop_moves[iter][0];
#                     j += bishop_moves[iter][1];
#                 }
#             }
#         }
#         else if (figure0 === "K"){
#             console.log(300);
#             console.log(i0);
#             console.log(j0);
#             let king_moves = [[1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1]];
#             for (let iter = 0; iter < king_moves.length; ++ iter){
#                 let i = i0 + king_moves[iter][0];
#                 let j = j0 + king_moves[iter][1];
#                 if (i >= 0 && i < 8 && j >= 0 && j < 8 && white.indexOf(board_game[i][j]) == -1){
#                     res.push([i, j]);
#                 }
#             }
#         }
#         else{
#             let i = i0;
#             let j = j0;
#             #console.log(111);
#             if (i != 0 && board_game[i - 1][j] == '.'){
#                 res.push([i - 1, j]);
#             }
#             if (i == 6 && board_game[i - 2][j] == '.'){
#                 res.push([i - 2, j]);
#             }
#             if (i - 1 >= 0 && j - 1 >= 0 && black.indexOf(board_game[i - 1][j - 1]) != -1){
#                 res.push([i - 1, j - 1]);
#             }
#             if (i -1 >= 0 && j + 1 < 8 && black.indexOf(board_game[i - 1][j + 1]) != -1){
#                 res.push([i - 1, j + 1]);
#             }
#         }
#     }
#     else{
#         if (black.indexOf(board_game[i0][j0]) == -1){
#             return [];
#         }
#         #console.log(figure0);
#         #console.log(figure1);
#         #console.log(1);
#        # console.log(figure0);
#         if (figure0 === 'n'){
#             #console.log(116);
#             let knight_move = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, -2], [-1, 2]];
#             for (let i = 0; i < knight_move.length; ++ i){
#                 let i1 = i0 + knight_move[i][0];
#                 let j1 = j0 + knight_move[i][1];
#                 if (i1 >= 0 && i1 < 8 && j1 >= 0 && j1 < 8 && black.indexOf(board_game[i1][j1]) == -1){
#                     res.push([i1, j1]);
#                 }
#             }
#         }
#         else if (figure0 === 'r'){
#            # console.log(115);
#             #if (i0 === i1){
#             for (let i = i0 - 1; i >= 0; -- i){
#                 if (board_game[i][j0] != '.'){
#                     if (black.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let i = i0 + 1; i < 8; ++ i){
#                 if (board_game[i][j0] != '.'){
#                     if (black.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let j = j0 - 1; j >= 0; -- j){
#                 if (board_game[i0][j] != '.'){
#                     if (black.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             for (let j = j0 + 1; j < 8; ++ j){
#                 if (board_game[i0][j] != '.'){
#                     if (black.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#         }
#         else if(figure0 === 'b'){
#            #console.log(100);
#             let bishop_moves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
#             for (let iter = 0; iter < bishop_moves.length; ++ iter){
#                 let i = i0 + bishop_moves[iter][0];
#                 let j = j0 + bishop_moves[iter][1];
#                 while (i >= 0 && i < 8 && j >= 0 && j < 8){
#                     if (board_game[i][j] != '.'){
#                         if (black.indexOf(board_game[i][j]) == -1){
#                             res.push([i, j]);
#                         }
#                         break;
#                     }
#                     res.push([i, j]);
#                     i += bishop_moves[iter][0];
#                     j += bishop_moves[iter][1];
#                 }
#             }  
#             #console.log(res);
#         }
#         else if (figure0 === "q"){
#             for (let i = i0 - 1; i >= 0; -- i){
#                 if (board_game[i][j0] != '.'){
#                     if (black.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let i = i0 + 1; i < 8; ++ i){
#                 if (board_game[i][j0] != '.'){
#                     if (black.indexOf(board_game[i][j0]) == -1){
#                         res.push([i, j0]);
#                     }
#                     break;
#                 }
#                 res.push([i, j0]);
#             }
#             for (let j = j0 - 1; j >= 0; -- j){
#                 if (board_game[i0][j] != '.'){
#                     if (black.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             for (let j = j0 + 1; j < 8; ++ j){
#                 if (board_game[i0][j] != '.'){
#                     if (black.indexOf(board_game[i0][j]) == -1){
#                         res.push([i0, j]);
#                     }
#                     break;
#                 }
#                 res.push([i0, j]);
#             }
#             let bishop_moves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
#             for (let iter = 0; iter < bishop_moves.length; ++ iter){
#                 let i = i0 + bishop_moves[iter][0];
#                 let j = j0 + bishop_moves[iter][1];
#                 while (i >= 0 && i < 8 && j >= 0 && j < 8){
#                     if (board_game[i][j] != '.'){
#                         if (black.indexOf(board_game[i][j]) == -1){
#                             res.push([i, j]);
#                         }
#                         break;
#                     }
#                     res.push([i, j]);
#                     i += bishop_moves[iter][0];
#                     j += bishop_moves[iter][1];
#                 }
#             }
#         }
#         else if (figure0 === "k"){
#             #console.log(300);
#             let king_moves = [[1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1]];
#             for (let iter = 0; iter < king_moves.length; ++ iter){
#                 let i = i0 + king_moves[iter][0];
#                 let j = j0 + king_moves[iter][1];
#                 if (i >= 0 && i < 8 && j >= 0 && j < 8 && black.indexOf(board_game[i][j]) == -1){
#                     res.push([i, j]);
#                 }
#             }
#         }
#         else{
#             let i = i0;
#             let j = j0;
#             #console.log(111);
#             if (i != 7 && board_game[i + 1][j] == '.'){
#                 res.push([i + 1, j]);
#             }
#             if (i == 1 && board_game[i + 2][j] == '.'){
#                 res.push([i + 2, j]);
#             }
#             if (i + 1 < 8 && j - 1 >= 0 && white.indexOf(board_game[i + 1][j - 1]) != -1){
#                 res.push([i + 1, j - 1]);
#             }
#             if (i + 1 < 8 && j + 1 < 8 && white.indexOf(board_game[i + 1][j + 1]) != -1){
#                 res.push([i + 1, j + 1]);
#             }
#         }
#     }
#     return res;
# }


# function picked_remove(i, j){
#     let box = document.getElementsByClassName("row")[idx_x].children[idx_y];
#     box.classList.remove("cell_picked");
#     let all_moves = get_all_moves(i, j, turn);
#     for (let iter = 0; iter < all_moves.length; ++ iter){
#         if (board_game[all_moves[iter][0]][all_moves[iter][1]] != '.'){
#             continue;
#         }
#         if (is_check(i, j, all_moves[iter][0], all_moves[iter][1], turn)){
#             continue;
#         }
#         let box1 = document.getElementsByClassName("row_figure")[all_moves[iter][0]].children[all_moves[iter][1]];
#         box1.classList.remove("cell-beats");
#         if ((last_all_moves[iter][0] + last_all_moves[iter][1]) % 2 == 0){
#             box1.src = "board_and_figures\\black.jpg";
#         }
#         else{
#             box1.src = "board_and_figures\\white.jpg";
#         }
#     }
# }
