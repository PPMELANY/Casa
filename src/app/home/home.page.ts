import { Component } from '@angular/core';
import { Database, ref, set, object } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rutaDeTABLA: any;
  ledStatus: boolean = false;
  ledColor: boolean = false;
  ledColorDormitorio: boolean = false; // Variable para almacenar el estado del dormitorio
  ledColorCocina: boolean = false; 
  ledColorBamo: boolean = false; 
  ledColorSala: boolean = false; 
  ledColorAtico: boolean = false;
  ledColorlavanderia: boolean = false;

  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, 'Casa');
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);

      // Obtener el estado de cada campo de la base de datos
      this.ledColorAtico = valores_db.atico;
      this.ledColorDormitorio = valores_db.dormitorio;
      this.ledColorCocina = valores_db.cocina;
      this.ledColorBamo = valores_db.baño;
      this.ledColorSala = valores_db.sala;
      this.ledColorlavanderia = valores_db.lavanderia;
    });
  }

  async dormitorio() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado del dormitorio en la base de datos
    const routeDormitorio = ref(this.database, '/Casa/dormitorio');
    set(routeDormitorio, this.ledColor);

    // Actualizar el color del botón basado en el estado del dormitorio
    this.ledColorDormitorio = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado del dormitorio:', this.ledColor);
  }

  async cocina() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado de la cocina en la base de datos
    const routeCocina = ref(this.database, '/Casa/cocina');
    set(routeCocina, this.ledColor);

    // Actualizar el color del botón basado en el estado de la cocina
    this.ledColorCocina = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado de la cocina:', this.ledColor);
  }

  async bamo() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado del baño en la base de datos
    const routeBaño = ref(this.database, '/Casa/baño');
    set(routeBaño, this.ledColor);

    // Actualizar el color del botón basado en el estado del baño
    this.ledColorBamo = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado del baño:', this.ledColor);
}


  async sala() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado de la sala en la base de datos
    const routeSala = ref(this.database, '/Casa/sala');
    set(routeSala, this.ledColor);

    // Actualizar el color del botón basado en el estado de la sala
    this.ledColorSala = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado de la sala:', this.ledColor);
  }

  async atico() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado de la sala en la base de datos
    const routeatico = ref(this.database, '/Casa/atico');
    set(routeatico, this.ledColor);

    // Actualizar el color del botón basado en el estado de la sala
    this.ledColorAtico = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado de la sala:', this.ledColor);
  }

  async lavanderia() {
    // Cambiar el estado del LED
    this.ledColor = !this.ledColor;

    // Cambiar el estado de la sala en la base de datos
    const routelavanderia = ref(this.database, '/Casa/lavanderia');
    set(routelavanderia, this.ledColor);

    // Actualizar el color del botón basado en el estado de la sala
    this.ledColorlavanderia = this.ledColor;

    // Agregar un mensaje de registro para mostrar el estado actual de encendido
    console.log('Estado de la sala:', this.ledColor);
  }
}
