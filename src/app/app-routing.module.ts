import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  {
    path: 'plantas',
    loadChildren: () => import('./pages/plantas/plantas.module').then(m => m.PlantasPageModule)
  },
  {
    path: 'maceteros',
    loadChildren: () => import('./pages/maceteros/maceteros.module').then(m => m.MaceterosPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'palmera',
    loadChildren: () => import('./pages/palmera/palmera.module').then(m => m.PalmeraPageModule)
  },
  {
    path: 'monstera',
    loadChildren: () => import('./pages/monstera/monstera.module').then(m => m.MonsteraPageModule)
  },
  {
    path: 'cheflera',
    loadChildren: () => import('./pages/cheflera/cheflera.module').then(m => m.ChefleraPageModule)
  },
  {
    path: 'scindapsus',
    loadChildren: () => import('./pages/scindapsus/scindapsus.module').then(m => m.ScindapsusPageModule)
  },
  {
    path: 'jade',
    loadChildren: () => import('./pages/jade/jade.module').then(m => m.JadePageModule)
  },
  {
    path: 'ficus',
    loadChildren: () => import('./pages/ficus/ficus.module').then(m => m.FicusPageModule)
  },
  {
    path: 'aralia',
    loadChildren: () => import('./pages/aralia/aralia.module').then(m => m.AraliaPageModule)
  },
  {
    path: 'helecho',
    loadChildren: () => import('./pages/helecho/helecho.module').then(m => m.HelechoPageModule)
  },
  {
    path: 'nordico',
    loadChildren: () => import('./pages/nordico/nordico.module').then(m => m.NordicoPageModule)
  },
  {
    path: 'bora',
    loadChildren: () => import('./pages/bora/bora.module').then(m => m.BoraPageModule)
  },
  {
    path: 'marruecos',
    loadChildren: () => import('./pages/marruecos/marruecos.module').then(m => m.MarruecosPageModule)
  },
  {
    path: 'greda',
    loadChildren: () => import('./pages/greda/greda.module').then(m => m.GredaPageModule)
  },
  {
    path: 'danes',
    loadChildren: () => import('./pages/danes/danes.module').then(m => m.DanesPageModule)
  },
  {
    path: 'colgante',
    loadChildren: () => import('./pages/colgante/colgante.module').then(m => m.ColgantePageModule)
  },
  {
    path: 'pack',
    loadChildren: () => import('./pages/pack/pack.module').then(m => m.PackPageModule)
  },
  {
    path: 'estambul',
    loadChildren: () => import('./pages/estambul/estambul.module').then(m => m.EstambulPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'olvido-contra',
    loadChildren: () => import('./pages/olvido-contra/olvido-contra.module').then(m => m.OlvidoContraPageModule)
  },

  {
    path: 'pedido',
    loadChildren: () => import('./pages/pedido/pedido.module').then(m => m.PedidoPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminPageModule)
  },

  {
    path: 'agregar-producto',
    loadChildren: () => import('./pages/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
  },
  {
    path: 'eliminar-usuario',
    loadChildren: () => import('./pages/eliminar-usuario/eliminar-usuario.module').then(m => m.EliminarUsuarioPageModule)
  },
  {
    path: 'eliminar-producto',
    loadChildren: () => import('./pages/eliminar-producto/eliminar-producto.module').then(m => m.EliminarProductoPageModule)
  },
  {
    path: 'listar-producto',
    loadChildren: () => import('./pages/listar-producto/listar-producto.module').then(m => m.ListarProductoPageModule)
  },
  {
    path: 'listar-usuario',
    loadChildren: () => import('./pages/listar-usuario/listar-usuario.module').then(m => m.ListarUsuarioPageModule)
  },
  {
    path: 'editar-producto',
    loadChildren: () => import('./pages/editar-producto/editar-producto.module').then(m => m.EditarProductoPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./pages/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./pages/agregar-usuario/agregar-usuario.module').then(m => m.AgregarUsuarioPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found' // Redirige cualquier ruta no coincidente a la página de error 404
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
