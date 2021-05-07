import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Favori } from 'src/app/models/favori.interface';
import { FavoriService } from 'src/app/services';
import { CreationFavoriComponent } from '../../page-accueil/creation-favori/creation-favori.component';


@Component({
  selector: 'app-liste-favori',
  templateUrl: './liste-favori.component.html',
  styleUrls: ['./liste-favori.component.css']
})
export class ListeFavoriComponent implements OnInit {

  favoris: Favori[] = [];
  favoriSelected: Favori;

  constructor(private favoriService: FavoriService,
    protected modalService: NgbModal,
    private modale: NgbActiveModal,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.initialiseFavori();
  }

  initialiseFavori() {
    this.favoriService.get().subscribe(res => {
      this.favoris = res;
      this.favoriSelected = res[0];
    });
  }

  onChange(favori: Favori) {
    this.favoriSelected = favori;
  }

  editer() {
    let modal = this.modalService.open(CreationFavoriComponent);
    modal.componentInstance.favori = this.favoriSelected;
  }

  supprimer() {
    this.favoriService.delete(this.favoriSelected.id).subscribe(result => {
      console.log("result", result)
      if (result) {
        this.toastr.success('Suppression réussi !');
        const index = this.favoris.indexOf(this.favoriSelected);
        this.favoris.splice(index, 1)
      }
    });
  }

  dismiss() {
    this.toastr.info("enregistrement annulé");
    this.modale.dismiss();
  }

  afficher() {
    this.modale.close();
    let extras: NavigationExtras = {
      skipLocationChange: false,
      replaceUrl: true,
      queryParams: null,
      state: this.favoriSelected
    };
    this.router.navigateByUrl('/').then(() =>
      this.router.navigate(['accueil'], extras));
  }

}
