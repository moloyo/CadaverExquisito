import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MainPageServiceService } from '../services/main-page-service.service';

@Component({
  selector: 'app-cadaver',
  templateUrl: './cadaver.component.html',
  styleUrls: ['./cadaver.component.scss']
})
export class CadaverComponent implements OnInit {
  cadaver: FormGroup;
  esPrimerOracion: boolean;
  esTerminado: boolean;
  cadaverTerminado: string;

  constructor(fb: FormBuilder, private mainPageService: MainPageServiceService) {
    this.cadaver = fb.group({
      primerOracion: { value: undefined, disabled: true },
      segundaOracion: new FormControl(
        { value: undefined, disabled: false },
        Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])
      )
    });
  }

  ngOnInit() {
    this.esPrimerOracion = true;
    this.esTerminado = false;
    this.mainPageService.cleanEvent.subscribe(() => this.reset());
  }

  next() {
    const primerOracion = this.cadaver.get('primerOracion');
    const segundaOracion = this.cadaver.get('segundaOracion');

    if (this.esPrimerOracion) {
      this.esPrimerOracion = false;
      this.cadaverTerminado = segundaOracion.value;
    } else {
      this.cadaverTerminado += ` ${segundaOracion.value}`;
    }
    
    primerOracion.setValue(segundaOracion.value);
    segundaOracion.setValue(undefined);
  }

  finish() {
    this.next();
    this.esTerminado = true
    this.esPrimerOracion = true;
  }

  reset() {
    this.esPrimerOracion = true;
    this.esTerminado = false;
    this.cadaver.reset();
  }

}
