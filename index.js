const content=document.querySelector("#content");
const submit=document.querySelector("#add");

//POST API
submit.addEventListener('click',()=>{
    let fullname=document.querySelector("#fullname").value;
    let course=document.querySelector("#course").value;
    let yearlevel=document.querySelector("#yearlevel").value;
    let email=document.querySelector("#email").value;
    let dateenrolled=document.querySelector("#dateenrolled").value;
    let formData={fullname,course,yearlevel,email,dateenrolled};

    fetch("https://pdrilldb.onrender.com/api/products",{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json",
        },
    }).catch((error)=>{
        console.log(error);
    })
    alert("User Added Successfully");
    location.reload();
});


window.addEventListener('load', ()=>{
    getUsers();
})

function getUsers(){
    let html=""
    //FETCH API
    fetch("https://pdrilldb.onrender.com/api/products",{mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            html+=`<li> ${element.fullname} ${element.course} - ${element.yearlevel}</li>`
        })

        content.innerHTML=html;
    })
    .catch(error=>{
        console.log(error);
    })
}



