let sudoku = [
    [
        ['', '3', '', '8', '', '1', '', '7', ''],
        ['', '', '6', '', '', '', '9', '', ''],
        ['', '7', '5', '', '6', '2', '', '', ''],
        ['', '', '', '6', '', '5', '3', '', '9'],
        ['', '1', '', '', '8', '', '', '', ''],
        ['', '', '3', '', '', '', '', '6', '8'],
        ['8', '', '4', '', '3', '6', '1', '9', '7'],
        ['3', '', '7', '1', '5', '4', '', '2', '6'],
        ['2', '', '1', '', '', '', '5', '', '']
    ],
    [
        ['', '9', '', '', '3', '', '1', '5', ''],
        ['2', '1', '8', '7', '', '5', '', '', '6'],
        ['', '', '', '', '', '6', '', '', '4'],
        ['9', '', '', '', '7', '8', '4', '', ''],
        ['1', '8', '5', '4', '2', '', '7', '6', ''],
        ['3', '7', '', '', '6', '', '', '2', '8'],
        ['', '', '1', '', '', '', '', '7', ''],
        ['', '', '9', '', '5', '7', '', '', '1'],
        ['8', '', '7', '', '', '3', '', '4', '']
    ],
    [
        ['', '', '4', '3', '', '', '', '', '1'],
        ['', '', '7', '', '9', '1', '2', '4', ''],
        ['1', '9', '', '', '4', '', '8', '', ''],
        ['7', '', '9', '2', '', '', '5', '', '6'],
        ['', '', '2', '', '5', '', '', '3', ''],
        ['', '', '', '', '7', '6', '9', '1', '2'],
        ['4', '', '5', '', '8', '', '', '', ''],
        ['2', '7', '', '', '', '', '1', '5', '8'],
        ['', '', '', '6', '2', '5', '3', '7', '']
    ],
    [
        ['', '6', '', '8', '', '', '5', '', '9'],
        ['', '2', '', '6', '', '', '', '', ''],
        ['', '', '4', '5', '', '', '', '', ''],
        ['', '5', '1', '3', '7', '', '9', '', '8'],
        ['', '4', '9', '', '8', '', '7', '6', '3'],
        ['7', '', '', '', '', '2', '4', '1', ''],
        ['9', '', '6', '', '5', '3', '2', '8', ''],
        ['4', '', '5', '', '1', '', '', '9', ''],
        ['3', '', '', '4', '', '6', '', '', '7']
    ],

];

//Gera um número aleatório de 0 a 4 para a escolha da grade
const numeroSudoku = Math.floor(Math.random() * 4);

$('document').ready(

    function () {

        //Criando a tabela do jogo
        for (let i = 0; i < 9; i++) {

            let tr = $('<tr>'); // criando uma linha da tabela
            for (let j = 0; j < 9; j++) {
                let input = $(`<input type="text" id=c${i}${j} value="${sudoku[numeroSudoku][i][j]}">`)
                let td = $(`<td>`); //criando as colunas da tabela
                td.append(input);
                tr.append(td);

                input.on('input', function (e) {
                    // funcao é ativada quando detecta uma mudança na celula
                    let el = $(this);
                    let lin = el.attr('id')[1];
                    let col = el.attr('id')[2];
                    let valor = el.val();

                    if(jogadaValida(sudoku, lin, col, valor)){
                        sudoku[numeroSudoku][lin][col] = valor;
                        $(this).removeClass('jogadaInvalida')
                    }
                    else{
                        $(this).toggleClass('jogadaInvalida');
                    }

                    // if(jogoCompleto(sudoku)){
                    //     funcao para "avisar" que o jogo terminou   
                    // }

                })

            }

            $('#grade').append(tr);

            //evento criado para evitar um bugvisual no carregamento da tela 'jogar'
            $('table').css({
                'border': '2px solid black',
            })
        }

        function jogadaValida(sudoku, lin, col, valor) {

            for(let i=0; i<9;i++){
                for(let j=0; j<9; j++){
                    if(sudoku[numeroSudoku][lin][j] == valor || sudoku[numeroSudoku][i][col] == valor){
                        return false
                    }
                }
            }
            return true;
        }


        // Funcao para "mudar" as páginas
        $('a').on('click', function (e) {

            switch ($(this).attr('id')) {
                case 'pgSobre':
                    $('#divSobre')[0].style = "display: block;"
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

        //Laço para pintar bordas de celulas específicas
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                $(`#c${i}2`).addClass('borderRight');
                $(`#c${i}5`).addClass('borderRight');
                $(`#c3${j}`).addClass('borderTop');
                $(`#c6${j}`).addClass('borderTop');
            }
        }
    }

)