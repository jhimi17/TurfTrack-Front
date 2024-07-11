import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CanchaListComponent } from './cancha-list/cancha-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CanchaListComponent]
})
export class AppComponent {
  title = 'canchaSint';
}
