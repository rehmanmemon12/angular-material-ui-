import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matbadges',
  templateUrl: './matbadges.component.html',
  styleUrls: ['./matbadges.component.css']
})
export class MatbadgesComponent implements OnInit {

  notification = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
