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
  loadingCommune: boolean;
  echelleTemps: string = 'JOURNALIERE';
  nomIndicateurs: string[] = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
  nomNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  indicateurBoolean:boolean[] = [true, true, true, true, true, true, true, true]
  favori: Favori = {
    id: null,
    nom: null,
    niveauMeteo: ["Température", "Nuage", "Vent", "Pluie"],
    indicateurAir: ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"],
    echelleTemps: "JOURNALIERE"
  }

  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.loadingCommune = true;
    this.communeService.getEveryName().subscribe(array => {
      this.nomCommunes = array.reverse();
      this.loadingCommune = false;
    });
  }

  setEchelleTemps(echelleTemps: string) {
    this.echelleTemps = echelleTemps;
  }

  saveFavori(form: NgForm) {

  }

}
