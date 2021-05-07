import { Component, OnInit } from '@angular/core';
import { CreationFavoriComponent } from '../../page-accueil/creation-favori/creation-favori.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommuneService, FavoriService } from 'src/app/services';
import { Favori } from 'src/app/models/favori.interface';

interface MenuItem {
  titre: string,
  iconName: string[],
  route: string[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  favoris: Favori[] = [];
  nomCommunes: string[] = [];
  readonly menus: MenuItem[] = [
    {
      titre: 'Accueil',
      iconName: ['fa', 'fa-home'],
      route: ['/accueil'],
    },
    {
      titre: 'Favoris',
      iconName: ['fa', 'fa-star'],
      route: ['/favoris'],
    },
    {
      titre: 'Extraire les données',
      iconName: ['fa', 'fa-sign-out'],
      route: ['/extractionData'],
    },
    {
      titre: 'Forum',
      iconName: ['fa', 'fa-comments'],
      route: ['/forum/listeFilsConversations'],
    },
    {
      titre: 'Gestion utilisateurs',
      iconName: ['fa', 'fa-users'],
      route: ['/utilisateurs/listeUtilisateur'],
    }
  ]

  constructor(protected modalService: NgbModal,
    private favoriService: FavoriService,
    private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initialiseFavori();
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.communeService.getEveryName().subscribe(array => this.nomCommunes = array.reverse());
  }

  initialiseFavori() {
    this.favoriService.get().subscribe(res => this.favoris = res);
    console.log(this.favoris);
  }
  openModal() {
    let modal = this.modalService.open(CreationFavoriComponent);
    modal.componentInstance.nomCommunes = this.nomCommunes;
  }


}
