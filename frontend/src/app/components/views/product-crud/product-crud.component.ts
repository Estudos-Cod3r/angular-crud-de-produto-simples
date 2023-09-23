import { Component } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  constructor(private headerService:HeaderService, private router:Router){
    headerService.headerData = {
      title:'Produtos',
      icon:'storefront',
      routeUrl:'/products'
    }
  }

  navigateToProductCreate():void{
    this.router.navigate(['/products/create'])
  }
}
