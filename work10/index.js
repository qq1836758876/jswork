function monkey(){
    let total = document.getElementById("mokeytotal").value
    let lick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(totaol)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
          monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kicl!=0){
           monkey.push(head); 
        } 
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}



function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    for (var i = 0; i < str.length; i++) {
      
    var key = str[i];
    if (obj[key]) {
        obj[key]++;
    } else {
        obj[key] = 1;

            }
        }
document.getElementById('result').innerText = JSON.stringify(obj)
}

    
       
