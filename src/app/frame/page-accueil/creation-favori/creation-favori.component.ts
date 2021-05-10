import { Component, Input, OnInit } from '@angular/core';
import { CommuneService, FavoriService } from 'src/app/services';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-creation-favori',
  templateUrl: './creation-favori.component.html',
  styleUrls: ['./creation-favori.component.css']
})
export class CreationFavoriComponent implements OnInit {

  loading: boolean;
  nomRegions: string[];
  nomDepartements: string[];
  nomCommunes: string[];
  echelleTemps: string = 'JOURNALIERE';
  tousLesIndicateurs: string[] = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
  touslesNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  indicateurBoolean: boolean[];
  niveauBoolean: boolean[];

  @Input() favori: any = {
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
    this.loading = true;
    this.initializeRegions();
    this.initializeBoolean();
  }

  ngAfterViewInit() {
    setTimeout(() => { this.loading = false }, 1000);
  }

  initializeRegions() {
    this.communeService.getEveryRegion().subscribe(array => this.nomRegions = array)
  }

  keyupRegion(nomRegion: string) {
    this.communeService.getEveryDepartementByRegion(nomRegion).subscribe(array => this.nomDepartements = array);
  }

  keyupDepartement(nomDepartement: string) {
    this.communeService.getEveryCommuneByDepartement(nomDepartement).subscribe(array => this.nomCommunes = array);
  }

  initializeBoolean() {
    this.indicateurBoolean = this.tousLesIndicateurs.map(item => this.favori.indicateurAir.indexOf(item) != -1 ? true : false);
    this.niveauBoolean = this.touslesNiveaux.map(item => this.favori.niveauMeteo.indexOf(item) != -1 ? true : false);
  }

  setEchelleTemps(echelleTemps: string) {
    this.favori.echelleTemps = echelleTemps;
  }

  saveFavori(form: NgForm) {
    this.favori = {
      id: this.favori.id,
      nom: form.value.nom,
      niveauMeteo: this.niveauBoolean.map((item, i) => item ? this.touslesNiveaux[i] : null).filter(value => value != null),
      indicateurAir: this.indicateurBoolean.map((item, i) => item ? this.tousLesIndicateurs[i] : null).filter(value => value != null),
      echelleTemps: this.echelleTemps,
      commune: form.value.commune,
      compteUtilisateur: localStorage.getItem('token'),
    }
    this.favori.id ? this.favoriService.update(this.favori).subscribe(res => this.toastUpdate()) : this.favoriService.create(this.favori).subscribe(res => this.toastSave());
    this.modale.close();
  }

  dismiss() {
    this.toastr.warning("annulé", "Enregistrement favori", {timeOut: 2000});
    this.modale.dismiss();

    window.location.reload();
  }

  toastSave() {
    this.toastr.success("enregistré", "Création favori", {timeOut: 2000});
    window.location.reload();
  }

  toastUpdate() {
    this.toastr.info("enregistré", "Mise à jour favori", {timeOut: 2000});
    window.location.reload();
  }

}
