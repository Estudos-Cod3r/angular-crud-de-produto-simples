import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  product:Product = {
    name:'',
    price: null!
  };

  constructor(private productService:ProductService,
     private route:ActivatedRoute,
     private router:Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(parseInt(id!)).subscribe(product =>{
      this.product = product;
    })
  }

  updateProduct(){
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(['/products']);
    })
  }
  cancel(){
      this.router.navigate(['/products']);
  }

  }
