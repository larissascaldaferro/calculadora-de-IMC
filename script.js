 
        function calculo(){
            let nom=document.getElementById('nome').value
            let alt=document.getElementById('altura').value
            let pes=document.getElementById('peso').value
            let res=document.getElementById('res')
            res.innerHTML=''
            let s=(pes/(alt**2)).toFixed(1)
            let valor=''
            if (nom !=='' && alt !=='' && pes !==''){
               
            
                if(s<=18.5){
                    valor='abaixo do peso.'
            }
                else if(s<=25){
                    valor='com peso ideal. Parabéns!!'
  
            }

                else if (s <=30){
                    valor='com sobrepeso grau 1.'
            }
                else if( s<=40){
                    valor='com obsidade grau 2.'
            }
                else {
                    valor='com obsidade morbida grau 3.'
            }
            res.innerHTML+=`Olá ${nom}! Você esta ${valor} `
        }
                
                
            else {
                res.innerHTML+=('preencha todos os campos!')
                let valor=''
                
            }
            

        }