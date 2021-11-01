import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/interfaces/taller';
import { TallerService } from 'src/app/services/taller/taller.service';

@Component({
  selector: 'app-lista-talleres',
  templateUrl: './lista-talleres.component.html',
  styleUrls: ['./lista-talleres.component.scss'],
})
export class ListaTalleresComponent implements OnInit {

  taller: Taller | any;

  constructor(private tallerService: TallerService) {}

  ngOnInit() {
    this.taller = this.tallerService.obtenerTalleres().valueChanges();
  }

}
