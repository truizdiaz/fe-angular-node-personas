import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];
  form: FormGroup;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder) {
      this.maxDate = new Date();
      this.form = this.fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        tipoDocumento: [null, Validators.required],
        documento: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        fechaNacimiento: [null, Validators.required],
      })
     }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  addEditPersona() {

    if(this.form.invalid) {
      return;
    }
    
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento
    }
    console.log(this.form);
   
    
  }

}
