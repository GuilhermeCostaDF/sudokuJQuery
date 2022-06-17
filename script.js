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
    [
        ['', '4', '6', '1', '5', '', '', '', '2'],
        ['', '', '', '', '', '', '', '7', '5'],
        ['5', '7', '', '2', '', '', '', '1', '6'],
        ['3', '', '', '6', '7', '2', '8', '', ''],
        ['4', '', '9', '8', '3', '', '5', '2', ''],
        ['2', '', '', '5', '4', '', '1', '', ''],
        ['', '', '2', '', '1', '5', '', '', ''],
        ['8', '1', '', '7', '6', '', '', '4', ''],
        ['', '', '4', '', '2', '', '6', '', '']
    ],
    //grade para testes rápidos
    [
        ['9', '2', '6', '3', '5', '4', '7', '8', '1'],
        ['8', '5', '1', '7', '6', '2', '4', '3', '9'],
        ['4', '7', '3', '8', '1', '9', '5', '2', '6'],
        ['3', '4', '2', '6', '7', '8', '1', '9', '5'],
        ['3', '4', '2', '6', '7', '8', '1', '9', '7'],
        ['1', '9', '7', '2', '4', '5', '8', '6', '3'],
        ['6', '8', '5', '4', '9', '7', '3', '1', '2'],
        ['', '3', '4', '1', '2', '6', '9', '5', '8'],
        ['2', '1', '9', '5', '8', '3', '6', '7', '']
    ],
];

//Gera um número aleatório de 0 a 4 para a escolha da grade
// const numeroSudoku = Math.floor(Math.random() * 5);
const numeroSudoku = 5;


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
                
                $('#grade').append(tr);

                input.on('change', function (e) {

                    let el = $(this);
                    let lin = el.attr('id')[1];
                    let col = el.attr('id')[2];
                    let valor = el.val();

                    if (jogadaValida(sudoku[numeroSudoku], lin, col, valor)) {
                        sudoku[numeroSudoku][lin][col] = valor;
                        $(this).removeClass('jogadaInvalida') //Caso a primeiro jogada tenha sido "errada" remove o estilo
                    }else {
                        $(this).addClass('jogadaInvalida');
                    }

                    if(jogoCompleto(sudoku[numeroSudoku])) {
                        
                        $('#modalFimDoJogo').css({
                            'z-index': '0',
                        })

                        $('#my-canvas').css({
                            'visibility': 'visible'
                        })

                        $('body').css({
                            'overflow': 'hidden',
                        })

                    }

                })

            }


            //evento criado para evitar um bug visual no carregamento da tela 'jogar'
            $('table').css({
                'border': '2px solid black',
            })
        }

        function jogadaValida(sudoku, lin, col, valor) {
            
            if(valor <= 0 || valor > 9){
                return false;
            }

            else{
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (sudoku[lin][j] == valor || sudoku[i][col] == valor )  {
                            return false;
                        }    
                    }
                }

                return true;
            }

        }

        function jogoCompleto(sudoku) {
            let res = Boolean;

            for (let i = 0; i < 9; i++) {
                //forEach percorre os arrays internos para verificar se ainda tem célula vazia

                sudoku[i].forEach(element => {
                    if(element == '') {
                        res = false;
                    }
                });

            }
            return res;
        }


        //Laço para pintar bordas de celulas específicas
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                $(`#c${i}2`).addClass('borderRight');
                $(`#c${i}5`).addClass('borderRight');
                $(`#c3${j}`).addClass('borderTop');
                $(`#c6${j}`).addClass('borderTop');
            }
        }


        // Funcao para "mudar" as páginas
        $('a').on('click', function (e) {

            switch ($(this).attr('id')) {
                case 'pgSobre':
                    $('#divSobre')[0].style = "display: block;"
                    $('#divQuemSou')[0].style = "display: none;"
                    $('#divSudoku')[0].style = "display: none;"
                    //cancelar animação caso o jogo tenha sido finalizado
                    $('#my-canvas').css({
                        'visibility': 'hidden',
                    })
        
                    $('body').css({
                        'overflow': 'auto',
                    })
                    break;
                case 'pgQuemSou':
                    $('#divQuemSou')[0].style = "display: block;"
                    $('#divSobre')[0].style = "display: none;"
                    $('#divSudoku')[0].style = "display: none;"
                    //cancelar animação caso o jogo tenha sido finalizado
                    $('#my-canvas').css({
                        'visibility': 'hidden',
                    })
                    $('body').css({
                        'overflow': 'auto',
                    })
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

        //evento para fechar o modal caso o jogador deseje 
        $('#fecharModal').on('click', function(){
            $('#modalFimDoJogo').css({
                'z-index': '-1',
            })

            $('#my-canvas').css({
                'visibility': 'hidden',
            })

            $('body').css({
                'overflow': 'auto',
            })
        })

        //script de animação dos confetes
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        
    }

)