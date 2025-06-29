import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isMenuOpen = false;
  screenIsSmall = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
