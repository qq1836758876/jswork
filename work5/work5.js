str = '<table border="1">'
for(let i=9;i>0;--i){
    str+='<tr>'
    for(var j=i;j>0;--j){
        str+='<td>&nbsp;</td>'
    }
    str+='</tr>'
}

str+='</table>'
document.getElementById('table2').innerHTML=str

str2 ='<table border="1">'
for(let i=9;i>0;--i){
    str2+='<tr>'
    for(var j=9;j>0;--j){
        str2+='<td>&nbsp;</td>'
    }
    str2+='</tr>'
}
str2+='</table>'
document.getElementById('table1').innerHTML=str2

str3='<table border="1">'
for(let i=9;i>0;--i){
    str2+='<tr>'
    for(var j=i;j>0;--j){
        str3+='<td>'+j+'*'+i+'='+(j*i)+'</td>'
    }
    str3+='</tr>'
}
str3+='</table>'
document.getElementById('table3').innerHTML=str3