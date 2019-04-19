
        
     var stock, productos,fotos,tabla,usuarios;
        stock=JSON.parse(localStorage.getItem("stock"));
        //alert(stock);
        productos=JSON.parse(localStorage.getItem("productos"));
        fotos=JSON.parse(localStorage.getItem("imagenes"));
        usuarios=JSON.parse(localStorage.getItem("usuarios"));
    function mostrarInventario(){
        
       
                tabla=document.getElementById('tablainventario');
                var fila=tabla.insertRow(-1);
                fila.className="filainventario";
                var columnainicial=fila.insertCell(-1);
                columnainicial.className="tablainicial";
                columnainicial.innerHTML="Nombre de producto &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspStock&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp¿Cuantos productos quiere añadir al stock? ";
        
        
       for(var i=0;i<stock.length;i++)
           {
                var fila=tabla.insertRow(-1);
                fila.className="filainventario"
                var columna=fila.insertCell(-1);
                columna.innerHTML="<img src="+fotos[i]+" style='margin-top:15px;' class='rounded-rectangle z-depth-0' alt='avatar image' height='100'>";
                columna=fila.insertCell(-1);
                columna.innerHTML+="<br><p style:'padding-left:20px; font-family:Montserrat'>"+productos[i]+"</p>";
                columna=fila.insertCell(-1);
                columna.id="stock"+i;
               document.getElementById('stock'+i).style.paddingLeft="35px";
                columna.innerHTML+="<br><p> El stock es: "+stock[i]+"</p>";
               columna=fila.insertCell(-1);
                columna.id="anadirstock"+i;
               document.getElementById('anadirstock'+i).style.paddingLeft="35px";
                columna.innerHTML+="<input type='number' min='1' id='modificarstock"+i+"'></input><button type='button' onclick='actualizarstock("+i+");'>Confirmar</button> ";
               
                
               
           }
               
        
    }
      function actualizarstock(i) {
        var sumar = document.getElementById("stock" + i);
        var suma = document.getElementById("modificarstock" + i);
        if (parseInt(stock[i]) + parseInt(suma.value) > 0) {
          var total = parseInt(stock[i]) + parseInt(suma.value);
          //alert(total);

          sumar.innerHTML = "<p> El stock es: " + total;
          suma.value = null;
          stock[i] = total;
        }
        else {
          sumar.innerHTML = "<p> El stock es: 0";
          suma.value = null;
          stock[i] = 0;
        }


      }
   




