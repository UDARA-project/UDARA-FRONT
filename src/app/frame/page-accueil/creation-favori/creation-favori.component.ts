import { Component, Input, OnInit } from '@angular/core';
import { CommuneService, FavoriService } from 'src/app/services';
import { NgForm } from '@angular/forms';
import { Favori } from 'src/app/models/favori.interface';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-creation-favori',
  templateUrl: './creation-favori.component.html',
  styleUrls: ['./creation-favori.component.css']
})
export class CreationFavoriComponent implements OnInit {

  @Input() nomCommunes: string[];
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
    private favoriService: FavoriService,
    private activateRoute: ActivatedRoute,
    private modale: NgbActiveModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.initializeCommunes();
    this.initializeBoolean();
  }

  initializeCommunes() {
    this.communeService.getEveryName().subscribe(array => this.nomCommunes = array.reverse());
  }

  initializeBoolean() {
    this.indicateurBoolean = this.tousLesIndicateurs.map(item => this.favori.indicateurAir.indexOf(item) != -1 ? true : false);
    this.niveauBoolean = this.touslesNiveaux.map(item => this.favori.niveauMeteo.indexOf(item) != -1 ? true : false);
  }

  setEchelleTemps(echelleTemps: string) {
    console.log(echelleTemps);
    this.favori.echelleTemps = echelleTemps;
  }

  saveFavori(form: NgForm) {
    this.favori = {
      nom: form.value.nom,
      niveauMeteo: this.niveauBoolean.map((item, i) => item ? this.touslesNiveaux[i] : null).filter(value => value != null),
      indicateurAir: this.indicateurBoolean.map((item, i) => item ? this.tousLesIndicateurs[i] : null).filter(value => value != null),
      echelleTemps: this.echelleTemps,
      commune: form.value.commune,
      compteUtilisateur: "nicolas.hornuel@gmail.com"
    }
    this.favoriService.create(this.favori).subscribe();
    //this.activateRoute.params.subscribe(res => console.log(res));
  }

  dismiss() {
    this.toastr.info("enregistrement annulé");
    this.modale.dismiss();
  }
  confirm() {
    this.toastr.success("enregistrement effectué");
    this.modale.close();
  }

}
