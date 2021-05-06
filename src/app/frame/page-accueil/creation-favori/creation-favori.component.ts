import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/services';
import { NgForm } from '@angular/forms';
import { Favori } from 'src/app/models/favori.interface';
import { ActivatedRoute } from '@angular/router';


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

  favori: any = {
    id: null,
    nom: null,
    niveauMeteo: ["Température", "Nuage", "Vent", "Pluie"],
    indicateurAir: ["co"],
    echelleTemps: "JOURNALIERE",
    commune: null,
  }

  constructor(
    private communeService: CommuneService,
    private activateRoute: ActivatedRoute) { }

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
    console.log(echelleTemps);
    this.favori.echelleTemps = echelleTemps;
  }

  saveFavori(form: NgForm) {
this.favori = {
  nom: form.value.nom,
  niveauMeteo: this.niveauBoolean,
  indicateurAir: this.indicateurBoolean.map(item => this.favori.indicateurAir.indexOf(item)!= -1 ? true : false ),
  echelleTemps: this.echelleTemps,
  commune: form.value.commune
}
console.log(this.favori);

//this.activateRoute.params.subscribe(res => console.log(res));
  }

}
