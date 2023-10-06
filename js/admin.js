/* Defino Propiedades de mi Objeto
    - Titulo
    - Imagen
    - Precio
    - Descripcion
    - Fecha Creacion
    - Categoria
    -  Id {automatico}
*/

const formularioProductoHTML = document.getElementById("formularioProducto");
const tbodyTable = document.getElementById("tableBodyHtml");
const inputFiltrarHTML = document.getElementById("filtrar");

const btn = document.querySelector('button.btn[type="submit"]');

const consolas = [
  {
    id: crypto.randomUUID(),
    descripcion: "Consola de hogar con gráficos en alta definición.",
    titulo: "PlayStation 5",
    fechaDeCreacion: "2020-11-12",
    precio: 499.99,
    imagen:
      "https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true",
    categoria: "Consola de Hogar",
  },
  {
    id: crypto.randomUUID(),
    descripcion: "Consola portátil con pantalla táctil.",
    titulo: "Nintendo Switch",
    fechaDeCreacion: "2017-03-03",
    precio: 299.99,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp",
    categoria: "Consola Portátil",
  },
  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
    descripcion: "Consola clásica miniaturizada con juegos preinstalados.",
    titulo: "NES Classic Edition",
    fechaDeCreacion: "2016-11-10",
    precio: 59.99,
    imagen: "https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg",
    categoria: "Consola Retro",
  },
  // ... Puedes continuar agregando más consolas según lo desees.
];

let idEditar;

console.log(consolas);

const obtenerFecha = () => {
  const fecha = new Date();
  let mes = fecha.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes;
  }
  const year = fecha.getFullYear();
  let dia = fecha.getDate();
  if (dia < 10) {
    dia = "0" + dia;
  }
  const fechaFormateada = `${year}-${mes}-${dia}`;

  return fechaFormateada;
};

// ! LISTENER EVENTO FORMULARIO
formularioProductoHTML.addEventListener("submit", (e) => {
  e.preventDefault();

  const el = formularioProductoHTML.elements;

  let id;

  if (idEditar) {
    id = idEditar;
  } else {
    id = crypto.randomUUID();
  }

  const nuevoProducto = {
    id: id,
    titulo: el.titulo.value,
    categoria: el.categoria.value,
    precio: el.precio.valueAsNumber,
    descripcion: el.descripcion.value,
    imagen: el.imagen.value,
    fechaDeCreacion: obtenerFecha(),
  };

  if (idEditar) {
    const index = consolas.findIndex((consola) => {
      return consola.id === idEditar;
    });

    consolas[index] = nuevoProducto;
    idEditar === undefined;
    btn.innerText = "Agregar Producto";
    btn.classList.remove("btn-success");
  } else {
    consolas.push(nuevoProducto);
  }

  Swal.fire({
    icon: 'success',
    title: 'Producto Agregado/Modificado Correctamente',
    text: 'El Producto se agrego o modifico correctamente.'
  })

  formularioProductoHTML.reset();
  el.titulo.focus();
  pintarProductos(consolas);
});

const pintarProductos = (arrayAPintar) => {
  tbodyTable.innerHTML = "";
  arrayAPintar.forEach(function (conso, index /*, array original */) {
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
      <td class="table-categorie">
      <div class='d-flex gap-1'>
        <button class='mt-4 btn btn-sm btn-danger' onclick='borrarProducto("${conso.id}")'>
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class='mt-4 btn btn-success btn-sm' onclick="editarProducto('${conso.id}')">
          <i class='fa-solid fa-pen-to-square'></i>
        </button>
      </div> 
      </td>
    </tr>`;
  });
};

inputFiltrarHTML.addEventListener("keyup", (evt) => {
  console.log(evt.target.value);

  const busqueda = evt.target.value.toLowerCase();

  const resultado = consolas.filter((producto) => {
    const titulo = producto.titulo.toLowerCase();

    if (titulo.includes(busqueda)) {
      return true;
    }
  });
  console.log(resultado);
  pintarProductos(resultado);
});

const borrarProducto = (idRecibido) => {
  const indiceEncontrado = consolas.findIndex((idProducto) => {
    if (idProducto.id === idRecibido) {
      return true;
    }
    return false;
  });

  consolas.splice(indiceEncontrado, 1);
  pintarProductos(consolas);
};
// - Editar Producto

const editarProducto = function (idRecibido) {
  console.log(idRecibido);

  let productoEditar = consolas.find((prod) => {
    if (prod.id === idRecibido) {
      return true;
    }
  });

  if (!productoEditar) return;

  idEditar = productoEditar.id;

  const elements = formularioProductoHTML.elements;

  elements.titulo.value = productoEditar.titulo;
  elements.categoria.value = productoEditar.categoria;
  elements.precio.value = productoEditar.precio;
  elements.imagen.value = productoEditar.imagen;
  elements.descripcion.value = productoEditar.descripcion;

  btn.innerText = "Editar Producto";
  btn.classList.add("btn-success");

  idEditar === undefined;
};

/*
const obtenerBotones = () => {
  const deleteButtons = document.querySelectorAll('.btn-delete')

  deleteButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      borrarProducto(index)
    } )
  })
}
*/

pintarProductos(consolas);

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
