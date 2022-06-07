$('document').ready(

    function(){

        $('a').on('click', function(e){
            console.log($(this)[0].id)

            switch($(this)[0].id){
                case 'pgSobre':
                    $('#divSobre')[0].style = "display: block;"
                    $('#divQuemSou')[0].style = "display: none;"  
                    // $('#divSudoku')[0].style = "display: none;"           
                    break;
                case 'pgQuemSou':
                    $('#divQuemSou')[0].style = "display: block;"  
                    $('#divSobre')[0].style = "display: none;"
                    // $('#divSudoku')[0].style = "display: none;"
                    break;
                case 'pgJogar':
                    // $('#divQuemSou')[0].style = "display: block;"  
                    // $('#divSobre')[0].style = "display: none;"
                    // $('#divSudoku')[0].style = "display: none;"
                    break;
                default:
                    return;
            }

        })


    }

)