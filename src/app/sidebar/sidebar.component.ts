import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    console.log('Toggle Menu clicked', this.menuVisible);
  }
}
