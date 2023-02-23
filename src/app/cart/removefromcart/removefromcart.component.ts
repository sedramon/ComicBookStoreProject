import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-removefromcart',
  templateUrl: './removefromcart.component.html',
  styleUrls: ['./removefromcart.component.css'],
})
export class RemovefromcartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any) {}
  ngOnInit(): void {}
}
