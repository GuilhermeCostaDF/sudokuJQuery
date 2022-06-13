$('document').ready(

    function(){
        
        //Criando a tabela do jogo
        for(let i=0; i<9; i++){
            
            let tr = $('<tr>'); // criando uma linha da tabela
            for(let j=0; j<9; j++){
                let td = $(`<td> <input type="text" id=c${i}${j}> </td>`); //criando as colunas da tabela
                tr.append(td);
            }

            $('#grade').append(tr);
        }


        // Funcao para "mudar" as páginas
        $('a').on('click', function(e){
            
            switch($(this)[0].id){
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

    }

)