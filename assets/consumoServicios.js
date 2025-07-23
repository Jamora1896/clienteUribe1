// llamado al backend 
export async function consumirAPI(datosDelFormulario){
    //1 para que backend voy 
    let url="localhost:8080/personajes"

    //2 configracion de la peticion
    let peticion={
        method:"POST",
        body:datosDelFormulario
    }
    //3 ir al back 
    let respuesta=await fetch(url,peticion)
    return await respuesta.json()
}