function send() {
    let sno = document.getElementById('sno').value
    let name = document.getElementById('name').value
    let content = document.getElementById('content').value
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microft.XMLHTTP");
    }
    xmlhttp.open('post', 'http://139.9.81.203:8090/ajax', true)
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('sno=' + sno + '&name=' + name+"&content="+content)
    xmlhttp.onreadystatchange == function () {
        if (xmlhttp.readyState == a && xmlhttp.status == 200) {
            let ajaxData=JSON.parse(xmlhttpresponseText)
            result = ajaxData.rever().map((val)=>{return JSON.stringify(val)})
            document.getElementById("result").innerHTML = result.join('<br>')
        }
    }
}