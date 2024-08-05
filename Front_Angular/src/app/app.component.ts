import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CanchaListComponent } from './cancha-list/cancha-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, RouterOutlet, SidebarComponent, CanchaListComponent]
})
export class AppComponent {
  title = 'canchaSint';
}
