import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { FlagService } from 'src/app/flag.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private openSubcategories: { [category: string]: boolean } = {};
  loggedInUserEmail: string = ""
  nombreProducto: string = "";
  resultados: any[] = [];
  constructor(private router: Router,
    private authService: AuthService,
    private flagService: FlagService
  ) {

  }
  login() {
    this.router.navigate(['/login']);
  }

  redirectTo(category: string) {
    // Aquí redirige a la página correspondiente según la categoría seleccionada
    // Por ejemplo:
    if (category === 'Inicio') {
      this.router.navigateByUrl('/home'); // Ruta relativa a la página de inicio
    } else if (category === 'Plantas') {
      this.router.navigateByUrl('/plantas'); // Ruta relativa a la página de plantas
    } else if (category === 'Maceteros') {
      this.router.navigateByUrl('/maceteros'); // Ruta relativa a la página de maceteros
    } else if (category === 'Admin') {
      this.router.navigateByUrl('/admin'); // Ruta relativa a la página de maceteros
    }
    // Agrega más redirecciones según tus necesidades
  }

  toggleSubcategory(category: string) {
    // Abre o cierra la subcategoría
    this.openSubcategories[category] = !this.openSubcategories[category];
  }

  isSubcategoryOpen(category: string): boolean {
    // Verifica si la subcategoría está abierta o cerrada
    return this.openSubcategories[category] || false;
  }
  logOut() {
    this.authService.logOut();
    this.flagService.setFlag(false);
  }
  obtenerFlag(): boolean {
    return this.flagService.getFlag();
  }
  obtenerFlag2(): boolean {
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    if (this.loggedInUserEmail == 'admin@gmail.com') {
      // If true, call the getFlag method on the flagService
      return this.flagService.getFlag();
    }
    return false
  }
}