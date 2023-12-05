import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { InicioAplicativoComponent } from './components/inicio-aplicativo/inicio-aplicativo.component';

const routes: Routes = [ // Rutas de navegación
    { path: '', component: InicioAplicativoComponent }, // Página inicial
    { path: 'listar-producto', component: ListarProductoComponent }, // Tabla de productos
    { path: 'crear-producto', component: CrearProductoComponent }, // Formulario crear producto
    { path: 'editar-producto/:id', component: CrearProductoComponent }, // Formulario editar producto
    { path: '**', redirectTo: '', pathMatch: 'full' } // Navegación sin sentido
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
