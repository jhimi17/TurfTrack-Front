import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
})
export class SidebarComponent {
  toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('translate-x-0');
      console.log('Menu toggled');
    } else {
      console.error('Sidebar element not found');
    }
  }
}
