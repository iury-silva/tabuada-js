function tabuada(){

var num = document.getElementById('num')
var resultado = document.getElementById('resultado')

if(num.value.length == 0){
  
  window.alert("Insira um numero!!")


}else{
  
  var n = Number(num.value)
  var c=1

  resultado.innerHTML = ''
  while(c<=10){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c} `
    resultado.appendChild(item)
    c++
  }


}




   

}
