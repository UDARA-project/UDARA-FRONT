import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommuneService } from 'src/app/services/commune.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  loadingCommune: boolean;
  nomCommunes: string[];
  nomCommuneSelected: string;
  @ViewChild('input') inputElement: ElementRef;
  @Output() searchChild = new EventEmitter();

  constructor(
    private communeService: CommuneService,
  ) { }

  ngOnInit(): void {
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.loadingCommune = true;
    this.communeService.getEveryName().subscribe(array => {
      this.nomCommunes = array;
      this.loadingCommune = false;
    });
  }

  onEnter(nomCommune: string) {
    this.nomCommuneSelected = nomCommune;
    this.search();
  }

  search() {
    this.nomCommuneSelected = this.inputElement.nativeElement.value
    this.searchChild.emit(this.nomCommuneSelected);
  }


}