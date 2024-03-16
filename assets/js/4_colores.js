/// 4_colores ejercicio ///
alert("Al hacer click sobre los cuadrados con colores veras cambio al color negro");
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", function (event) {
    const element = event.target;
    element.style.backgroundColor = "black";
  });
});
// segunda parte

let colorGlobal;

document.addEventListener("keydown", function (event) {
  const tecla = event.key;
  guardarColor(tecla);
});

const guardarColor = (tecla) => {
  const teclaVerify = tecla.toLowerCase();

  if (teclaVerify === "a") {
    colorGlobal = "pink";
    changeBg(colorGlobal);
  } else if (teclaVerify === "s") {
    colorGlobal = "orange";
    changeBg(colorGlobal);
  } else if (teclaVerify === "d") {
    colorGlobal = "cyan";
    changeBg(colorGlobal);
  }

  switch (teclaVerify) {
    case "q":
      colorGlobal = "purple";
      crearCuadro();
      break;
    case "w":
      colorGlobal = "gray";
      crearCuadro();
      break;

    case "e":
      colorGlobal = "brown";
      crearCuadro();
      break;
    default:
      break;
  }
};

const changeBg = (color) => {
  const element = document.getElementById("key");
  element.style.backgroundColor = color;
};

const changeBgNew = (color, element) => {
  element.style.backgroundColor = color;
};

const crearCuadro = () => {
  const existElement = document.getElementById("new_key");
  console.log("Funciona");
  if (existElement) {
    changeBgNew(colorGlobal, existElement);
  } else {
    const newDiv = document.createElement("div");
    newDiv.id = "new_key";
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
   
    document.querySelector("body").appendChild(newDiv);
    changeBgNew(colorGlobal, newDiv);
  }
};
