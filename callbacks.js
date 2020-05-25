//primer ejercicio
/*const cities= ["Londres", "New York", "Madrid", "Paris", "Viena"];
cities.forEach(function(city){
    console.log(city);
})
//segundo ejercicio   **********************************************

const countries= ["France", "Spain", "Portugal","Autralia","England", "Ireland"];
//Usando callback
//function newCountry()
function newCountry(country, callback){
    setTimeout(function(){
        countries.push(country);
        console.log(countries),
        callback();
    },2000);
}

//mostrando países
function showCountries(){
setTimeout(function(){
    let html= "";
    countries.forEach(function(country){
        html+=  `<li>${country}</li>`;
    });
    document.getElementById("callbacks").innerHTML=html;
}, 1000);
}
//mostrar países
showCountries();
//mostrar el nuevo país
newCountry("German",showCountries);*/

//tercer ejercicio  *********************************************************
/*const getUser =(id,cb)=>{
    const user={
        name: "Carmen",
        id
    }
    if (id===10) cb("User not exist")
    else cb(null,user)
}
getUser(10,(err,user)=>{
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`);
})*/
//cuarto ejercicio
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

const getUser= (id, cb)=>{
    const user = users.find(user=>user.id==id)
    if (!user) cb(`Not exist a user with id ${id}`)
    else cb(null,user)
}

const getemail= (user, cb)=>{
    const email= emails.find(email=>email.id==user.id)
    if(!email) cb(`${user.name} no tiene email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.mail
    })
}

getUser(2, (err, user)=>{
    if (err) return console.log(err)
    console.log(user);
    getemail(user, (err, res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
})*/