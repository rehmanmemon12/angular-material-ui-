import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-spinner-module',
  templateUrl: './mat-progress-spinner-module.component.html',
  styleUrls: ['./mat-progress-spinner-module.component.css']
})
export class MatProgressSpinnerModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSpinner = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    }, 5000)
  }

}
