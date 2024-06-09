const i=document.getElementById('input')
const from=document.getElementById('from')
const to=document.getElementById('to')
const convert=document.getElementById('Convert')
const result=document.getElementById('result')

convert.addEventListener('click',()=>{
    const T=i.value
    const f=from.value
    const t=to.value
    switch(f){
        case 'C':if(t=='F'){
            result.value= (((9/5)*T) +32)
        }else if(t=='K'){
            result.value= parseFloat(T)+273.15
        }else{
            result.value=i.value
        }
        break;
        case 'F':if(t=='C'){
            result.value= ((5/9)* ( parseFloat(T)-32))
        }else if(t=='K'){
            result.value= ((5/9)* ( parseFloat(T)-32))+273.15
        }else{
            result.value=i.value
        }
        break;
        case 'K':if(t=='C'){
            result.value= parseFloat(T)-273.15
        }else if(t=='F'){
            result.value=(((9/5)*(parseFloat(T)-273.15)) +32)
        }else{
            result.value=i.value
        }
        break;
    }

})
// clearing  all values
const clear=document.getElementById('clear')
clear.addEventListener('click',()=>{
    i.value=""
    result.value=""
    from.value='C'
    to.value='F'
})