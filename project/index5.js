const insert=document.getElementById("insert")

window.addEventListener("keydown",(e)=>{
    insert.innerHTML= `
    <div class="color">
    <table  style="color: whitesmoke; font-size: 1.4rem; border-color:white">
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key==" "?"space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
     </table>
    </div>
    `
})