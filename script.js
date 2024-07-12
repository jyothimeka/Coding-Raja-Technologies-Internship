function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

// generating cv

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    // direct

    document.getElementById("nameT2").innerHTML=nameField;

    //email

    let emailField = document.getElementById("emailField").value;
    document.getElementById("emailT").innerHTML = emailField;

    //contact

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //linkedin

    document.getElementById("LinkedT").innerHTML=document.getElementById("LinkedField").value;

    //languages known

    document.getElementById("langT").innerHTML=document.getElementById("langField").value;

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //skills

    document.getElementById("skillsT").innerHTML=document.getElementById("skillsField").value;

    //work experience

    let wes=document.getElementsByClassName("weField")

    let str=''
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //academic qualifications

    let aqs=document.getElementsByClassName("eqField")

    let str1=''
    for(let e of aqs){
        str1+=`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";



}

function printCV(){
    window.print();
}