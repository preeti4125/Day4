function map(){
    const name=document.getElementById("name").value;
    const dept=document.getElementById("dept").value;
    const res=document.getElementById("result");
    let data={
        name:name,
        dept:dept

    };
res.innerHTML=`NAME & DEPT: ${data.name} (${data.dept})`;
}