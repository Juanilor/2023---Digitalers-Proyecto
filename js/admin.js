/* Defino Propiedades de mi Objeto
    - Titulo
    - Imagen
    - Precio
    - Descripcion
    - Fecha Creacion
    - Categoria
    -  Id {automatico}
*/

const formularioProductoHTML = document.getElementById('formularioProducto')
const tbodyTable = document.getElementById("tableBodyHtml");

console.log(formularioProductoHTML)

formularioProductoHTML.addEventListener('submit',() => {
    preventDefault()
   alert('eco')
})

const consolas = [
  {
    descripcion: "Consola de hogar con gráficos en alta definición.",
    titulo: "PlayStation 5",
    fechaDeCreacion: "2020-11-12",
    precio: 499.99,
    imagen:
      "https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true",
    categoria: "Consola de Hogar",
  },
  {
    descripcion: "Consola portátil con pantalla táctil.",
    titulo: "Nintendo Switch",
    fechaDeCreacion: "2017-03-03",
    precio: 299.99,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp",
    categoria: "Consola Portátil",
  },
  {
    descripcion:
      "Consola de hogar con alta potencia y compatibilidad hacia atrás.",
    titulo: "Xbox Series X",
    fechaDeCreacion: "2020-11-10",
    precio: 499.99,
    imagen:
      "https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png",
    categoria: "Consola de Hogar",
  },
  {
    descripcion: "Consola clásica miniaturizada con juegos preinstalados.",
    titulo: "NES Classic Edition",
    fechaDeCreacion: "2016-11-10",
    precio: 59.99,
    imagen: "https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg",
    categoria: "Consola Retro",
  },
  // ... Puedes continuar agregando más consolas según lo desees.
];

consolas.forEach(function (conso, index /*, array original */) {
  console.dir(tbodyTable);

  tbodyTable.innerHTML += `
    <tr>
    <td class="table-image">
      <img
        src="${conso.imagen}"
        alt="${conso.titulo}"
      />
    </td>
    <td class="table-title">${conso.titulo}</td>
    <td class="table-description">${conso.descripcion}
    </td>
    <td class="table-price">$${conso.precio}</td>
    <td class="table-categorie">${conso.categoria}</td>
  </tr>`;
});

console.log(consolas);

/*         <tr>
            <td class="table-image">
              <img
                src="https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true"
                alt=""
              />
            </td>
            <td class="table-title">Play 5</td>
            <td class="table-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
              laudantium, voluptatibus voluptatum esse eos.
            </td>
            <td class="table-price">$500</td>
            <td class="table-categorie">categoria</td>
          </tr> */
