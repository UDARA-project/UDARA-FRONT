import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/services';

@Component({
  selector: 'app-creation-favori',
  templateUrl: './creation-favori.component.html',
  styleUrls: ['./creation-favori.component.css']
})
export class CreationFavoriComponent implements OnInit {

  nomCommunes: string[];
  loadingCommune: boolean;

  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.loadingCommune = true;
    this.communeService.getEveryName().subscribe(array => {
      this.nomCommunes = array.reverse();
      this.loadingCommune = false;
    });
  }

}
