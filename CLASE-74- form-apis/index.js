/* Utilizando esta url: 
(https://jsonplaceholder.typicode.com/users/6) 
hacer un get y mostrar todas las propiedades que puedan cada una en su propio <input>*/


const load = () => {
    const postsButton = document.querySelector("#button");
    postsButton.addEventListener("click", () => {
    
    axios.get("https://jsonplaceholder.typicode.com/users/6")
    .then( res => {
        document.querySelector("#name").value = res.data.name;
        document.querySelector("#Username").value = res.data.username;
        document.querySelector("#Email").value =  res.data.email;
        document.querySelector("#Street").value = res.data.address.street;
        document.querySelector("#Suite").value = res.data.address.suite;
        document.querySelector("#City").value =  res.data.address.city;
        document.querySelector("#ZipCode").value =  res.data.address.zipcode;
        document.querySelector("#GeoLat").value =  res.data.address.geo.lat;
        document.querySelector("#GeoLng").value = res.data.address.geo.lng;
        document.querySelector("#Phone").value = res.data.phone;
        document.querySelector("#Website").value =  res.data.website;
    })
    .catch(err => console.log(err));
})
}
