import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError:boolean): void{
    this.snackBar.open(msg, 'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
}
