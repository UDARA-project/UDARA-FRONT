import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/services';
import { NgForm } from '@angular/forms';
import { Favori } from 'src/app/models/favori.interface';


@Component({
  selector: 'app-creation-favori',
  templateUrl: './creation-favori.component.html',
  styleUrls: ['./creation-favori.component.css']
})
export class CreationFavoriComponent implements OnInit {

  nomCommunes: string[];
  echelleTemps: string = 'JOURNALIERE';
  tousLesIndicateurs: string[] = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
  touslesNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  indicateurBoolean: boolean[];
  niveauBoolean: boolean[];

  favori: Favori = {
    id: null,
    nom: null,
    niveauMeteo: ["Température", "Nuage", "Vent", "Pluie"],
    indicateurAir: ["co"],
    echelleTemps: "JOURNALIERE"
  }

  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initializeCommunes();
    this.initializeBoolean();
  }

  initializeCommunes() {
    this.communeService.getEveryName().subscribe(array => this.nomCommunes = array.reverse());
  }

  initializeBoolean() {
    this.indicateurBoolean = this.tousLesIndicateurs.map(item => this.favori.indicateurAir.indexOf(item)!= -1 ? true : false );
    this.niveauBoolean = this.touslesNiveaux.map(item => this.favori.niveauMeteo.indexOf(item)!= -1 ? true : false );
  }

  setEchelleTemps(echelleTemps: string) {
    this.echelleTemps = echelleTemps;
  }

  saveFavori(form: NgForm) {

  }

}
