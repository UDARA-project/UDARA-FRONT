import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommuneService } from 'src/app/services/commune.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  loading: boolean;
  nomRegions: string[];
  nomDepartements: string[];
  nomCommunes: string[];
  nomCommuneSelected: string;
  @Output() searchChild = new EventEmitter();

  constructor(
    private communeService: CommuneService,
  ) { }

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

  onEnter(nomCommune: string) {
    this.nomCommuneSelected = nomCommune;
    this.search();
  }

  search() {
    this.searchChild.emit(this.nomCommuneSelected);
  }


}