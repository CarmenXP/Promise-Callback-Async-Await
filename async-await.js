//ejercicio 1
function cuadradoPromise(value){
    if(value!=="number"){
        return Promise.reject(`Error, el valor ${value} no es un número`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value*value
            });

        }, 0|Math.random()*1000);
    });
    }

async function funcionAsincronicaDeclarada(){
    try{
        console.log("iniciando la función async");
        let obj= await cuadradoPromise(1);
        console.log(`Función Async valor: ${obj.value},  cuadrado: ${obj.result}`);
        obj= await cuadradoPromise(2);
        console.log(`Función Async valor: ${obj.value},  cuadrado: ${obj.result}`);
        obj= await cuadradoPromise(3);
        console.log(`Función Async valor: ${obj.value},  cuadrado: ${obj.result}`);
        obj= await cuadradoPromise(4);
        console.log(`Función Async valor: ${obj.value},  cuadrado: ${obj.result}`);
        console.log(`Finalizando funciones Async`)
    }
    catch{(err)=> console.error(err)}
}
funcionAsincronicaDeclarada();