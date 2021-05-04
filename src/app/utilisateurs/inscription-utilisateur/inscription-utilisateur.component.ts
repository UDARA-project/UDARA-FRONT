import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommuneService } from 'src/app/services';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.component.html',
  styleUrls: ['./inscription-utilisateur.component.css']
})
export class InscriptionUtilisateurComponent implements OnInit, AfterViewInit {


  form = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    nomUtilisateur: new FormControl(''),
    email: new FormControl(''),
    motDePasse: new FormControl(''),
    confirmermotDePasse: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    codePostal: new FormControl('')
  })
  nomCommunes: string[];
  nomDepartements: string[];
  loading: boolean;

  constructor(private formBuilder: FormBuilder,
    private CompteUtilisateurService: CompteUtilisateurService,
    private router : Router,
    private toastr: ToastrService,
    private communeService: CommuneService) { }

  ngOnInit(): void {
    this.loading = true;
    this.initializeCommunes();
    this.initializeDepartements();
  }

  ngAfterViewInit() {
    setTimeout(() => { this.loading = false }, 1000);
  }

  initializeCommunes() {
    this.communeService.getEveryName().subscribe(array => this.nomCommunes = array );
  }

  initializeDepartements() {
    this.communeService.getEveryNameOfDepartement().subscribe(array => this.nomDepartements = array)
  }

  keyupDepartement(nomDepartement: string) {
    this.communeService.getNameCommuneByDepartement(nomDepartement).subscribe(array => this.nomCommunes = array);
  }

  saveUser() {
    console.log(this.form);
    if(this.form.valid){
      if (!this.form.value.isActive) {
        this.form.value.isActive = false;
      }
      this.CompteUtilisateurService.create(this.form.value).subscribe(res =>{
        
        this.toastr.success('Please fix the form errors and continue', 'Form Errors!')
        setTimeout(() => {this.router.navigate(['utilisateurs/listeUtilisateur']);
      }, 2000)
      }) 
      } else {
        this.toastr.error('Please fix the form errors and continue', "Form Errors")
      } 
   }

}
