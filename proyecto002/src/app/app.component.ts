import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'CrudAngular';
// arreglo del tipo Alumno, que tiene 3 registro almacenados
 alumnoArray: Alumno[] = [
 {id:1, name:"Alex", lastname:"Campos",age:35, direccion: "Col. San Matias", telefono:20202020, mail:'alex@mail.com' },
 {id:2, name:"Maria",lastname:"Lopez",age:20, direccion: "Col. Roma", telefono:21212121, mail:'maria@mail.com' },
 {id:3, name:"Juan", lastname:"Castro",age:25, direccion: "Col. Mascota", telefono:22222222, mail:'juan@mail.com' }
 ]
//atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
 selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0 ,  direccion: '', telefono:0, mail:'' };
//un método que no retorna nada “void”, recibe como parámetro una variable del
//tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
// en pantalla.
 openForEdit(alumno: Alumno): void
 {
 this.selectedAlumno = alumno;
 }
//método que no retorna nada “void”, NO recibe parámetro, pero realiza dos
//operaciones agregar / editar, si no hay registro seleccionado se guarda,
//de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]
 addOrEdit(): void
 {
 if(this.selectedAlumno.id === 0) // INSERT
 {
 this.selectedAlumno.id = this.alumnoArray.length + 1;
 this.alumnoArray.push(this.selectedAlumno);
 }
 this.selectedAlumno = {id:0, name: '', lastname: '', age:0,  direccion: '', telefono:0, mail:'' };
 }
//método que no retorna nada “void”, NO recibe parámetro, elimina del arreglo el
//registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
//realizando un “filter” para no almacenar el registro seleccionado en el nuevo
//arreglo “alumnoArray” , por eso ocupados el operador “!=” y luego limpiamos
//el registro seleccionado.
 delete(): void
 {
 if(confirm('¿Esta seguro de elimiar el Registro?'))
 {
 this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
 this.selectedAlumno = {id:0, name: '', lastname: '', age:0,  direccion: '', telefono:0, mail:'' };
 }
 }
}