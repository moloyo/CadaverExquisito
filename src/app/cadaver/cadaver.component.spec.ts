import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadaverComponent } from './cadaver.component';

describe('CadaverComponent', () => {
  let component: CadaverComponent;
  let fixture: ComponentFixture<CadaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
