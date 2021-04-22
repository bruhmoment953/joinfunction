function getPara1(){
    var inputs=[];
    for(var j=1;j <=6; j++)
    {
        inputs.push(document.getElementById("input_" +j).value) ;
        
        


    }
    inputs.join(".") ;
    document.getElementById("showPara1").innerHTML = inputs.join(".") ;


}





function getPara2(){
    var inputs=[];
    for(var j=1;j <=6; j++)
    {
        inputs.push(document.getElementById("input_" +j+"_para2").value) ;
        
        


    }
    inputs.join(".") ;
    document.getElementById("showPara2").innerHTML = inputs.join(".") ;


}