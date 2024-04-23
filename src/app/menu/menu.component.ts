import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) { }


  menuStatus: string = 'closed';



  menuItens?: Array<Menu>;

  ngOnInit() {
    const menu = this.menuService.getItens();

    this.menuItens = menu;
  }

  menuClick() {

    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');

  }

}
