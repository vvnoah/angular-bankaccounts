import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input() userName:string = "";
  @Input() userBalance:number = 0;
}
