import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  title = 'Shopping Cart';
  numberItems:number = 5;
  constructor() { }

  ngOnInit(): void {
    
  }

}
