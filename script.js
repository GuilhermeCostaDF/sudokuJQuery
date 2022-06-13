let sudoku01 = [
    ['','3','','8','','1','','7',''],
    ['','','','','','','','',''],
    ['','','','8','','','','',''],
    ['','','','','','','','',''],
    ['','','','','','','','',''],
    ['','5','','','','','','',''],
    ['','','','','','','3','','5'],
    ['','','','','','','','',''],
    ['','','','','7','2','','1','']
];

$('document').ready(

    function(){
        
        //Criando a tabela do jogo
        for(let i=0; i<9; i++){
            
            let tr = $('<tr>'); // criando uma linha da tabela
            for(let j=0; j<9; j++){
                let input = $(`<input type="text" id=c${i}${j} value="${sudoku01[i][j]}">`)
                let td = $(`<td>`); //criando as colunas da tabela
                td.append(input);
                tr.append(td);


                input.on('input', function(e){
                    // funcao é ativada quando detecta uma mudança na celula
                    let el = $(this);
                    let lin = el.attr('id')[1];
                    let col = el.attr('id')[2];
                    let valor = el.val();

                    // if(jogadaValida(sudoku, lin, col, valor)){
                    //     sudoku01[lin][col] = valor;
                    // }
                    // else{
                    //     // mensagem de erro
                    // }

                    // if(jogoCompleto(sudoku)){
                    //     funcao para "avisar" que o jogo terminou   
                    // }
                    
                })

            }

            $('#grade').append(tr);
        }

        // function jogadaValida(sudoku, lin, col, valor) {
        //     return boolian;
        // }




        // Funcao para "mudar" as páginas
        $('a').on('click', function(e){
            
            switch($(this).attr('id')){
                case 'pgSobre':
                    $('#divSobre')[0].style= "display: block;"
                    $('#divQuemSou')[0].style = "display: none;"  
                    $('#divSudoku')[0].style = "display: none;"           
                    break;
                case 'pgQuemSou':
                    $('#divQuemSou')[0].style = "display: block;"  
                    $('#divSobre')[0].style = "display: none;"
                    $('#divSudoku')[0].style = "display: none;"
                    break;
                case 'pgJogar':
                    $('#divSudoku')[0].style = "display: flex;"  
                    $('#divSobre')[0].style = "display: none;"
                    $('#divQuemSou')[0].style = "display: none;"
                    break;
                default:
                    return;
            }

        })

        for(let i=0; i<9; i++){
            for(let j = 0; j<9; j++){
                $(`#c${i}2`).addClass('borderRight');
                $(`#c${i}5`).addClass('borderRight');
                $(`#c3${j}`).addClass('borderTop');
                $(`#c6${j}`).addClass('borderTop');
                
            }
        }
    }

)