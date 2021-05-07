import { Component, OnInit } from '@angular/core';
import { CreationFavoriComponent } from '../../page-accueil/creation-favori/creation-favori.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FavoriService } from 'src/app/services';
import { Favori } from 'src/app/models/favori.interface';
import { ListeFavoriComponent } from '../../page-accueil/liste-favori/liste-favori.component';

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

  constructor(protected modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalAdd() {
    this.modalService.open(CreationFavoriComponent);
  }

  openModalList() {
    this.modalService.open(ListeFavoriComponent);
  }

}
