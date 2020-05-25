//primer ejercicio
/*const aplicarDescuento= new Promise(function(resolve,reject){
    const descuento = true;
    if(descuento){
        resolve("Descuento aplicado");
    }else{
        reject("No se aplicó descuento");
    }
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});*/
//segundo ejercicio********************************************+
/*const users=[
    {name: "Carmen",
    id: 1
},
{name: "Miriam",
id: 2
},
{name:"esme",
id: 3}
]

const emails=[
    {id:1,
    mail: "carmen@gmail.com"},
    {id:2,
    mail: "miriam@gmail.com"}
]

const getUser = (id)=>{
    const user= users.find(user=> user.id==id)
    return promise= new Promise((resolve, reject)=>{
        if(!user) reject(`No existe el usuario con id ${id}`)
        else resolve(user)
    })
}
const getEmail=(user)=>{
    const email= emails.find(email=>email.id==user.id)
    return promise= new Promise ((resolve, reject)=>{
        if(!email) reject(`${user.name} no tiene email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.mail
        })
    })
}
getUser(4)
.then(user=> getEmail(user))
.then(res=> console.log(res))
.catch(err=> console.log(err))*/
//ejercicio 3 ****************************************************
/*function cuadradoPromise(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                cuadrado: value*value

            });
        }, 0|Math.random()*1000);
    });
}
cuadradoPromise(6)
.then((obj)=>{
    //console.log(obj);
    console.log("inicio de promesa");
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise(7);
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise(8);
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise(9);
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    console.log("Fin de la promesa");
})
.catch(err => console.log(err))*/

//ejercicio 4, añadiendo restriciones al ejercicio anterior.******************************
/*function cuadradoPromise(value){
 if(typeof value!=="number") return Promise.reject(`Error, el valor ${value} no es un número`);
    return new Promise((resolve, reject)=>{  
        setTimeout(()=>{
            resolve({
                value,
                cuadrado: value*value

            });
        }, 0|Math.random()*1000);
    });
}
cuadradoPromise(6)
.then((obj)=>{
    //console.log(obj);
    console.log("inicio de promesa");
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise(7);
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise("8");
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    return cuadradoPromise(9);
})
.then(obj=>{
    console.log(`promesa de numero: ${obj.value}, su resultado es:  ${obj.cuadrado}`);
    console.log("Fin de la promesa");
})
.catch(err=> console.error(err))*/
