import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-crear-producto',
    templateUrl: './crear-producto.component.html',
    styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
    productoForm: FormGroup;
    titulo = 'Crear Producto';
    id: string | null;

    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _productoService: ProductoService,
                private aRouter: ActivatedRoute) {
        this.productoForm = this.fb.group({
            servicio: ['', Validators.required],
            cantidad: ['', Validators.required],
            concepto: ['', Validators.required],
            centro_costos: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.esEditar();
    }

    agregarProducto() {

        const PRODUCTO: Producto = {
            servicio: this.productoForm.get('servicio')?.value,
            cantidad: this.productoForm.get('cantidad')?.value,
            concepto: this.productoForm.get('concepto')?.value,
            centro_costos: this.productoForm.get('centro_costos')?.value,
        }

        if(this.id !== null) {
            this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
                this.toastr.info('¡El producto fue actualizado con éxito!', '¡Producto Actualizado!');
                this.router.navigate(['/listar-producto']);
            }, error => {
                console.log(error);
                this.productoForm.reset();
            })
        } else {
            console.log(PRODUCTO);

            this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
            this.toastr.success('¡El producto fue registrado con éxito!', '¡Producto Registrado!');
            this.router.navigate(['/listar-producto']);
        }, error => {
            console.log(error);
            this.productoForm.reset();
        })
        }
    }

    esEditar() {
        if(this.id !== null) {
            this.titulo = 'Editar Producto';
            this._productoService.obtenerProducto(this.id).subscribe(data => {
                this.productoForm.setValue({
                    servicio: data.servicio,
                    cantidad: data.cantidad,
                    concepto: data.concepto,
                    centro_costos: data. centro_costos,
                })
            })
        }
    }

}
