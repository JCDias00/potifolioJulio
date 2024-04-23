import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuServie: MenuService){}
  
}
