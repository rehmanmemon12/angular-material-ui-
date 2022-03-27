import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logChange(index:any) {
    console.log(index);
    if (index == 1){
      alert('Hello, Thank you for Selected');
    }
  }
}
