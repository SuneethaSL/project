function result(){
    var name=document.getElementById("name").value;
    var USN=document.getElementById("USN").value;
    var result=document.getElementById("result");
    if(name==""){
        alert("please enter name");
        return;
    }
    var marks=Math.random()*100;
    if (marks>=85){
        result.innerText=name +" " + "you passed with distinction" +marks.toFixed(2);
    } else if(marks>=70 && marks<=84){
        result.innerText=name +" " +"you passed with 1st class" +marks.toFixed(2);
    }else if(marks>=35 && marks<=69){
        result.innerText=name +" "+"you passed with 2nd class" +marks.toFixed(2);
    }else if(marks<35){
        result.innerText=name +" " + "you fail" +marks.toFixed(2);
    }
}