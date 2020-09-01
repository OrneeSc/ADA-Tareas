/* 
Hacer una pagina con un header que tenga varios titulos. Empezando por "Raza" y "Random". 
Estos deberian ser Navs(links) para ir a diferentes secciones de una pagina.
Hacer funcionar los links, para eso, al hacer click en link, debería:
-sacarle la clase a is-active a todos los links
-agregarsela al link que fue clickeado
Hacer funcionar una pagina que al cargar, debería cargar una nueva imagen de un gato.
usar el siguiente endpoint: https://api.thecatapi.com/v1/images/search/ 
*/

const load = () => {

    const navRandom = document.querySelector("#Random");
    navRandom.addEventListener("click", () => {        

        axios.get("https://api.thecatapi.com/v1/images/search/")
        .then(res => {
            
            document.querySelector(".div").innerHTML = "";
            const img = document.createElement("img");
            img.src = res.data[0].url; 
            img.classList.add("estilo-imagen");

            const divEnRandom = document.querySelector("div");
            divEnRandom.style.display = "flex";

            divEnRandom.appendChild(img);

       }).catch(console.log(err))
       
    });
    const raza = document.querySelector("#Raza");
    raza.addEventListener("click", () => {

        const divEnRaza = document.querySelector("div");
        divEnRaza.style.display = "none";
    })

}


    
