import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true
})
export class SidebarComponent {
  isMenuOpen = false;

  toggleMenu() {
    console.log("Menu toggled");
    console.log("isMenuOpen before toggle:", this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    console.log("isMenuOpen after toggle:", this.isMenuOpen);
  }
}
