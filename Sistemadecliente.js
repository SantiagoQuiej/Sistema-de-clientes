const nombre = document.querySelector('#Nombre')
const edad = document.querySelector('#Edad  ')
const sintoma = document.querySelector('#Sintomas')
const nuevocliente = document.querySelector('#agregarcola')
const contenedor = document.querySelector('#container')
const siguiente = document.querySelector('#clientesiguiente')
const clientecurso = document.querySelector('#nombrecliente')
const clienteedad = document.querySelector('#clientedad')
const cleintesintoma = document.querySelector('#clienintomas')
const contenedoractual = document.querySelector('#contador2')
const ciontenedorsiguinte = document.querySelector('#contador2')
const frase = document.querySelector('#frase')
const tabla = document.querySelector('#tabla')
let pintar = ''
let arreglo = []
const date = new Date();

class clielteagregar {
  constructor(nombre, edad, sintomas) {
    this.nombre = nombre;
    this.edad = edad
    this.sintomas = sintomas
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.fisrt = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.last
  }
  enqueue(nombr, edad, sintomas) {
    const newNode = new clielteagregar(nombr, edad, sintomas);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    arreglo.push(this.last)
    console.log(arreglo);
    contenedor.innerHTML = ''
    arreglo.forEach((item, index) => {
      contenedor.innerHTML += crearnuevo(item, index + 1)
    })
    this.length++;
    return this;
  }
  deques() {
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    arreglo.shift()
    contenedor.innerHTML = ''
    arreglo.forEach((item, index) => {
      contenedor.innerHTML += crearnuevo(item, index + 1)
    })
    this.length--;
    return this
  }
  posicion() {
    return this.length
  }
  peek() {
    if (arreglo[1] == null) {
      contenedoractual.hidden = true
    } else {
      contenedoractual.textContent = arreglo[1].nombre
    }
  }
  peek2() {
    if (arreglo[0] == null) {
      clientecurso.textContent = '---'
      clienteedad.textContent = '-'
      cleintesintoma.textContent = '-'
    } else {
      clientecurso.textContent = arreglo[0].nombre
      clienteedad.textContent = `${arreglo[0].edad}-años`
      cleintesintoma.textContent = arreglo[0].sintomas
    }

  }
}
const clienteingresado = new Queue()


nuevocliente.addEventListener('click', () => {
  clienteingresado.enqueue(nombre.value, edad.value, sintoma.value)
  nombre.value = ''
  edad.value = ''
  sintoma.value = ''
})


const crearnuevo = (cliente, index) => {
  console.log(cliente, 'hola');
  return `
  <tr>
     <th>${index}</th>
     <th>${cliente.nombre}</th>
     <th>${cliente.edad}</th>
     <th>${cliente.sintomas}</th>
     <th>${date.getHours()}:${date.getMinutes()}</th>
 </tr>
                 `
}


siguiente.addEventListener('click', () => {
  ciontenedorsiguinte.hidden = false
  clienteingresado.peek2()
  clienteingresado.peek()
  decir(clienteingresado.peek2())
  clienteingresado.deques()
})

const decir = (texto) => {
  const voz = new SpeechSynthesisUtterance(`Turno de ${texto}`);
  voz.lang = "es-ES";
  window.speechSynthesis.speak(voz);
};
