import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageServiceService {
  @Output() cleanEvent: EventEmitter<any>;

  constructor() {
    this.cleanEvent = new EventEmitter();
  }

  cleanPage() {
    this.cleanEvent.emit(null);
  }
}
