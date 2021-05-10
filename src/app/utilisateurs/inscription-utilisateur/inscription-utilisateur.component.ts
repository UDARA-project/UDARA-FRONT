import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommuneService } from 'src/app/services';


@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.component.html',
  styleUrls: ['./inscription-utilisateur.component.css']
})
export class InscriptionUtilisateurComponent implements OnInit, AfterViewInit {

  loading: boolean;
  nomRegions: string[];
  nomDepartements: string[];
  nomCommunes: string[];
  villeSelectionnee: string;
  validPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private CompteUtilisateurService: CompteUtilisateurService,
    private router : Router,
    private toastr: ToastrService,
    private communeService: CommuneService) { }

  ngOnInit(): void {
    this.loading = true;
    this.initializeRegions();
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

  saveUser(form: NgForm) {    
    console.log('form', form.value);
    if (form.valid) {
      if (!form.value.isActive) {
        form.value.isActive = false;
      }
      this.validPassword = form.value.motDePasse === form.value.confirmationMdp;
      if (this.validPassword) {
        this.CompteUtilisateurService.create(form.value).subscribe(res => {
          this.toastr.success(form.value.nom, 'Incription réussie')
          setTimeout(() => {
            this.router.navigate(['/accueil']);
          }, 2000)
        }) 
      } else {
        this.toastr.error('recommencer en saisissant 2 fois le même mot de passe', "Erreur mot de passe ! ")        
      }
    } else {
      this.toastr.error('recommencer en saisissant toutes les informations nécessaires', "Echec d'inscription")
    } 
  }

}