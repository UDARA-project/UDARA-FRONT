import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicateurAir } from 'src/app/models/indicateurAir.interface';
import { NiveauMeteo } from 'src/app/models/niveauMeteo.interface';
import { CommuneService } from 'src/app/services/commune.service';
import { IndicateurAirService } from 'src/app/services/indicateur-air.service';
import { NiveauMeteoService } from 'src/app/services/niveau-meteo.service';


interface MeteosWithUnit {
  nom: string;
  valeurs: string[];
}

interface IndicateursWithUnit {
  nom: string;
  valeurs: string[];
}

@Component({
  selector: 'app-accueil-data',
  templateUrl: './accueil-data.component.html',
  styleUrls: ['./accueil-data.component.css']
})
export class AccueilDataComponent implements OnInit {

  loadingSearch: boolean;
  nomCommune: string;
  indicateurAirs: IndicateurAir[];
  niveauMeteos: NiveauMeteo[];
  indicateurWithUnit: IndicateursWithUnit[] = [];
  meteoWithUnit: MeteosWithUnit[] = [];
  infoRecensement: string;
  infoGPS: string;
  meteoGlobale: string = "../../../../assets/images/soleil.svg";
  indicateurGlobale: string = "../../../../assets/images/emoji-3.svg";
  temperatureActuelle: number;
  evolutionPolluant: number;
  nomIndicateurs: string[] = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
  nomNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  echelleTemps: any;
  enteteColonne: string[] = [];

  constructor(private communeService: CommuneService,
    private indicateurAirService: IndicateurAirService,
    private activateRoute: ActivatedRoute,
    private niveauMeteoService: NiveauMeteoService) { }

  ngOnInit(): void {
    this.checkNavigation();
  }

  checkNavigation() {
    this.echelleTemps = 'JOURNALIERE';
    history.state.id ? this.searchByFavori() : this.search();
  }

  search() {
    this.loadingSearch = true;
    this.nomIndicateurs = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
    this.nomNiveaux = ["Température", "Nuage", "Vent", "Pluie"];
    this.infoRecensement = "";
    this.indicateurAirService.search(this.nomIndicateurs, this.echelleTemps).subscribe(res => {
      this.renderIndicateur(res);
      this.niveauMeteoService.search(this.nomNiveaux, this.echelleTemps).subscribe(res => {
        this.renderNiveau(res);
      })
    })
  }

  searchByFavori() {
    this.loadingSearch = true;
    this.nomCommune = history.state.commune;
    this.nomIndicateurs = history.state.indicateurAir;
    this.nomNiveaux = history.state.niveauMeteo;
    this.echelleTemps = history.state.echelleTemps;
    this.infoRecensement = `Données sur Favori : ${history.state.nom} - `;
    this.indicateurAirService.searchByCommune(this.nomCommune, this.nomIndicateurs, this.echelleTemps).subscribe(res => {
      this.renderIndicateur(res);
      this.niveauMeteoService.searchByCommune(this.nomCommune, this.nomNiveaux, this.echelleTemps).subscribe(res => {
        this.renderNiveau(res);
      })
    })
  }

  searchByCommune(nomCommune: string) {
    this.loadingSearch = true;
    this.nomCommune = nomCommune;
    this.nomIndicateurs = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
    this.nomNiveaux = ["Température", "Nuage", "Vent", "Pluie"];
    this.infoRecensement = "";
    this.indicateurAirService.searchByCommune(this.nomCommune, this.nomIndicateurs, this.echelleTemps).subscribe(res => {
      this.renderIndicateur(res);
      this.niveauMeteoService.searchByCommune(this.nomCommune, this.nomNiveaux, this.echelleTemps).subscribe(res => {
        this.renderNiveau(res);
      })
    })
  }

  setEchelleTemps(echelleTemps: string) {
    this.echelleTemps = echelleTemps;
    this.nomCommune == undefined ? this.search() : this.searchByCommune(this.nomCommune);
  }

  renderIndicateur(res) {
    this.indicateurWithUnit = [];
    this.indicateurAirs = [];
    this.indicateurAirs = res;
    res.forEach(elt => {
      let newValue = elt.valeurs.map(r => r + "μg/m3");
      this.indicateurWithUnit.push({ nom: elt.nom, valeurs: newValue });
    });
    this.generateIndicateurGlobale();
  }

  renderNiveau(res) {
    this.meteoWithUnit = [];
    this.niveauMeteos = [];
    this.niveauMeteos = res;
    res.forEach(elt => {
      let newValue = [];
      if (elt.nom == "Température") {
        newValue = elt.valeurs.map(r => r + "°C");
      } else if (elt.nom == "Nuage" || elt.nom == "Pluie") {
        newValue = elt.valeurs.map(r => r + "%");
      } else if (elt.nom == "Vent") {
        newValue = elt.valeurs.map(r => r + "m/s");
      }
      this.meteoWithUnit.push({ nom: elt.nom, valeurs: newValue });
    });
    this.renderEnteteColonne();
    this.generateMeteoGlobale();
    this.renderRecensement();
    this.loadingSearch = false;
  }

  renderRecensement() {
    if (this.nomCommune == undefined) {
      this.infoRecensement = "Données Globales Françaises"
    } else {
      this.communeService.findByName(this.nomCommune).subscribe(r => {
        this.infoRecensement += `Commune : ${r.name}, ${r.population} Habitants -- Région : ${r.region}, Code département : ${r.departement}`;
        this.infoGPS = `Coordonnées GPS de la station (latitude, longitude) : ${r.lat} - ${r.lon}`;
      })
    }
  }

  generateMeteoGlobale() {
    this.niveauMeteoService.search(["Température", "Nuage", "Vent", "Pluie"], this.echelleTemps).subscribe(res => this.niveauMeteos = res);
    let nombreValeur = this.niveauMeteos[0].valeurs.length;
    this.temperatureActuelle = Math.round(this.niveauMeteos[0].valeurs[nombreValeur - 1]);
    let nuageValeur = this.niveauMeteos[1] ? this.niveauMeteos[1].valeurs[nombreValeur - 1] : 0;
    let ventValeur = this.niveauMeteos[2] ? this.niveauMeteos[2].valeurs[nombreValeur - 1] : 0;
    let pluieValeur = this.niveauMeteos[3] ? this.niveauMeteos[3].valeurs[nombreValeur - 1] : 0;
    if (nuageValeur > 33 && nuageValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+soleil.svg"
    } else if (nuageValeur > 66 && ventValeur <= 10 && pluieValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage.svg"
    } else if (nuageValeur > 66 && ventValeur <= 10 && pluieValeur > 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+pluie.svg"
    } else if (nuageValeur > 66 && ventValeur > 10 && pluieValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+vent.svg"
    } else if (nuageValeur > 66 && ventValeur > 10 && pluieValeur > 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+vent+pluie.svg"
    }
  }

  generateIndicateurGlobale() {
    let nombreValeur = this.indicateurAirs[0].valeurs.length;
    let cumulJour: number = 0;
    let cumulHier: number = 0;
    for (const indicateur of this.indicateurAirs) {
      cumulJour += indicateur.valeurs[nombreValeur - 1];
      cumulHier += indicateur.valeurs[nombreValeur - 2]
    }
    this.evolutionPolluant = Math.round(((cumulJour - cumulHier) / cumulHier) * 100);
    if (this.evolutionPolluant > 25) {
      this.indicateurGlobale = "../../../../assets/images/emoji-1.svg"
    } else if (this.evolutionPolluant > 10) {
      this.indicateurGlobale = "../../../../assets/images/emoji-2.svg"
    } else if (this.evolutionPolluant < 25) {
      this.indicateurGlobale = "../../../../assets/images/emoji-5.svg"
    } else if (this.evolutionPolluant < 10) {
      this.indicateurGlobale = "../../../../assets/images/emoji-4.svg"
    }
  }

  renderEnteteColonne() {
    this.enteteColonne = [];
    let nombreValeur = this.niveauMeteos[0].valeurs.length;
    if (this.echelleTemps == "JOURNALIERE") {
      let date = new Date();
      let nbDuJour = date.getDay();
      let nomDuJour;
      for (let i = 0; i < nombreValeur; i++) {
        nbDuJour - i <= 0 ? nbDuJour = 7 + i : nbDuJour;
        switch (nbDuJour - i) {
          case 1: nomDuJour = "lundi"; break;
          case 2: nomDuJour = "mardi"; break;
          case 3: nomDuJour = "mercredi"; break;
          case 4: nomDuJour = "jeudi"; break;
          case 5: nomDuJour = "vendredi"; break;
          case 6: nomDuJour = "samedi"; break;
          case 7: nomDuJour = "dimanche"; break;
        }
        this.enteteColonne.push(nomDuJour);
      }
    } else if (this.echelleTemps == "HEBDOMADAIRE") {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // Thursday in current week decides the year.
      let week1 = new Date(date.getFullYear(), 0, 4); // January 4 is always in week 1.
      let currentWeek = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
      for (let i = 0; i < nombreValeur; i++) {
        this.enteteColonne.push(`semaine${currentWeek - i}`)
      }
    } else if (this.echelleTemps == "MENSUEL") {
      let date = new Date();
      let nbDuMois = date.getMonth() + 1;
      let nomDuMois;
      for (let i = 0; i < nombreValeur; i++) {
        nbDuMois - i <= 0 ? nbDuMois = 12 + i : nbDuMois;
        switch (nbDuMois - i) {
          case 1: nomDuMois = "janvier"; break;
          case 2: nomDuMois = "février"; break;
          case 3: nomDuMois = "mars"; break;
          case 4: nomDuMois = "avril"; break;
          case 5: nomDuMois = "mai"; break;
          case 6: nomDuMois = "juin"; break;
          case 7: nomDuMois = "juillet"; break;
          case 8: nomDuMois = "aout"; break;
          case 9: nomDuMois = "septembre"; break;
          case 10: nomDuMois = "octobre"; break;
          case 11: nomDuMois = "novembre"; break;
          case 12: nomDuMois = "decembre"; break;
        }
        this.enteteColonne.push(nomDuMois);
      }
    }
    this.enteteColonne.reverse();
  }


}
