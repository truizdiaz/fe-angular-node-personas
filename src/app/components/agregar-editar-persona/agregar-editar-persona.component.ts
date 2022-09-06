import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];

  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
