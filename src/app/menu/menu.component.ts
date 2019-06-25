import { Component, OnInit } from '@angular/core';
import { MainPageServiceService } from '../services/main-page-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private mainMageService: MainPageServiceService) { }

  ngOnInit() {
  }

  cleanPage() {
    this.mainMageService.cleanPage();
  }
}
