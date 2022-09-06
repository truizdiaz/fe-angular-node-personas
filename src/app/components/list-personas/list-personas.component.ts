import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';


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
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento', 'acciones'];
  dataSource: MatTableDataSource<Persona>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPersona() {
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width: '550px', 
      disableClose: true    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
