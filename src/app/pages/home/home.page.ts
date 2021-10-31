import { Component, OnInit } from '@angular/core';
import { TallerService } from '../../services/taller/taller.service';
import { Taller } from '../../interfaces/taller';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private tallerService: TallerService) {}

  taller: Taller | any;

  ngOnInit() {
    this.taller = this.tallerService.obtenerTalleres().valueChanges();
  }

}
