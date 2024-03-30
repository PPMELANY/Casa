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
    this.ledColor = !this.ledColor;
    const routeCocina = ref(this.database, '/Casa/cocina');
    set(routeCocina, this.ledColor);
    this.ledColorCocina = this.ledColor;
    console.log('Estado de la cocina:', this.ledColor);
  }

  async bamo() {
    this.ledColor = !this.ledColor;
    const routeBaño = ref(this.database, '/Casa/baño');
    set(routeBaño, this.ledColor);
    this.ledColorBamo = this.ledColor;
    console.log('Estado del baño:', this.ledColor);
}


  async sala() {
    this.ledColor = !this.ledColor;
    const routeSala = ref(this.database, '/Casa/sala');
    set(routeSala, this.ledColor);
    this.ledColorSala = this.ledColor;
    console.log('Estado de la sala:', this.ledColor);
  }

  async atico() {
    this.ledColor = !this.ledColor;
    const routeatico = ref(this.database, '/Casa/atico');
    set(routeatico, this.ledColor);
    this.ledColorAtico = this.ledColor;
    console.log('Estado de la sala:', this.ledColor);
  }

  async lavanderia() {
    this.ledColor = !this.ledColor;
    const routelavanderia = ref(this.database, '/Casa/lavanderia');
    set(routelavanderia, this.ledColor);
    this.ledColorlavanderia = this.ledColor;
    console.log('Estado de la sala:', this.ledColor);
  }
}
