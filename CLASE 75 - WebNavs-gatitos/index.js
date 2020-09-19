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
            
            document.querySelector("div").innerHTML = " ";
            const img = document.createElement("img");
            img.src = res.data[0].url; 
            img.classList.add("estilo-imagen");

            const divEnRandom = document.querySelector("div");
            divEnRandom.style.display = "flex";

            divEnRandom.appendChild(img);

       }).catch(console.log("error"))
       
    });
    const raza = document.querySelector("#Raza");
    raza.addEventListener("click", () => {

        const divEnRaza = document.querySelector("div");
        divEnRaza.style.display = "none";
        const divBuscador = document.querySelector(".div-buscador");
        divBuscador.style.display = "Flex";

    });

        const agregarValoresATabla = async () =>{
        try{
            const input = document.querySelector("#buscador-Raza").value;
            const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${input}`)
            console.log(res.data);
            const tr = document.createElement("tr");
            tr.classList.add("tr-estilos");
            const tdName = document.createElement("td");
            //tdName.classList.add("tdName");//
            const tdTemperament = document.createElement("td");
            //tdTemperament.classList.add("tdTemperament");//
            const tdOrigin = document.createElement("td");
            //tdOrigin.classList.add("tdOrigin");//
            const tdHypoallergenic = document.createElement("td");
            //tdHypoallergenic.classList.add("tdHypoallergenic");//
            


            tdName.innerText = res.data[0].name;
            //console.log(tdName);//
            tdTemperament.innerText = res.data[0].temperament;
            tdOrigin.innerText = res.data[0].origin;
            tdHypoallergenic.innerText = res.data[0].hypoallergenic;

            const tbody = document.querySelector("#tbody");

            tr.appendChild(tdName);
            tr.appendChild(tdTemperament);
            tr.appendChild(tdOrigin);
            tr.appendChild(tdHypoallergenic);
            tbody.appendChild(tr);

    }catch(err){
        console.log("ERROR");
        alert("Esa raza no está en nuestra lista, por favor elija otra");
        }
    }

    //con click ok
    const button = document.querySelector("#button");
     button.addEventListener("click", () => {
         agregarValoresATabla();
     });

    //con enter no me funciona. al input
    const input = document.querySelector("#buscador-Raza");
    input.addEventListener("keydown", event => {
         if (event.keyCode === 13) { 
         agregarValoresATabla();
         }
     });
};
