import { Component, OnInit } from '@angular/core';
import { TallerService } from '../../services/taller/taller.service';
import { Taller } from '../../interfaces/taller';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  taller: Taller | any;

  constructor(private tallerService: TallerService) {}

  ngOnInit() {
    this.taller = this.tallerService.obtenerTalleres().valueChanges();
  }

}
