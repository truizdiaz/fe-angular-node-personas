import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';


const listPersonas: Persona[] = [
  { nombre: "Tomas", apellido: "Perez", correo: "tperez@gmail.com", tipoDocumento: "DNI", documento: 35222111, fechaNacimiento: new Date()  },
  { nombre: "Juan", apellido: "Juarez", correo: "jjuarez@gmail.com", tipoDocumento: "DNI", documento: 31222333, fechaNacimiento: new Date()  },  
  { nombre: "Marcos", apellido: "Gonzalez", correo: "marcosgonzalez@gmail.com", tipoDocumento: "DNI", documento: 28976555, fechaNacimiento: new Date()  },  
  { nombre: "Micaela", apellido: "Aliaga", correo: "maliaga@gmail.com", tipoDocumento: "DNI", documento: 27564235, fechaNacimiento: new Date()  },  
  { nombre: "Fernanda", apellido: "Ortiz", correo: "fortiz@gmail.com", tipoDocumento: "DNI", documento: 33237543, fechaNacimiento: new Date()  },  
  { nombre: "Sofia", apellido: "Pelegrini", correo: "spelegrini@gmail.com", tipoDocumento: "DNI", documento: 22334565, fechaNacimiento: new Date()  },  
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento'];
  dataSource: MatTableDataSource<Persona>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { 
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
