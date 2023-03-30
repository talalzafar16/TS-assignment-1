
fetch("https://fakestoreapi.com/products").then(async(res)=>{
    let data:any[]= await res.json();
    let table=document.getElementById("table")!
    data.map((e)=>{
        table.innerHTML+=`<tr>
        <td>${e.id}</td>
        <td>${e.title}</td>
        <td>${e.description}</td>
        <td>${e.price}</td>
        </tr>`
    })
})
.catch((err)=>{
    console.log(err)
})


