import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';


const listPersonas: Persona[] = [
  { nombre: "Tomas", apellido: "Perez", correo: "tperez@gmail.com", tipoDocumento: "DNI", documento: 35222111, fechaNacimiento: new Date()  },  
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento'];
  dataSource = listPersonas;
  
  constructor() { }

  ngOnInit(): void {
  }

}
