let transaccion = document.getElementById('Transacciones')


fetch ('http://localhost:4000/api/gastos').then(datos => datos.json()).then(registro =>{



    for(i=0;i<=5;i++) {
        if(registro.data[i].tipo == 0){
            transaccion.innerHTML +=`<div class="fila gastos">
            <div>${registro.data [i].nombre}</div>
            <div>- $ ${registro.data [i].monto}</div>
        </div>`
    }   else{
         transaccion.innerHTML +=`<div class="fila ingresos">
         <div>${registro.data [i].nombre}</div>
         <div>- $ ${registro.data [i].monto}</div>
         </div>`
        }
    }
})     
    

