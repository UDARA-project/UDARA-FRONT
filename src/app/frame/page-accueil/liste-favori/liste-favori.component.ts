import { Component, OnInit } from '@angular/core';
import { Favori } from 'src/app/models/favori.interface';
import { FavoriService } from 'src/app/services';

@Component({
  selector: 'app-liste-favori',
  templateUrl: './liste-favori.component.html',
  styleUrls: ['./liste-favori.component.css']
})
export class ListeFavoriComponent implements OnInit {

  favoris: Favori[] = [];

  constructor(private favoriService: FavoriService) { }

  ngOnInit(): void {
    this.initialiseFavori();
  }

  initialiseFavori() {
    this.favoriService.get().subscribe(res => this.favoris = res);
    console.log(this.favoris);
  }

}
