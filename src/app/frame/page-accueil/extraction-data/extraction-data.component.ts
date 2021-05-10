import { Component, OnInit } from '@angular/core';
import { CommuneService, CompteUtilisateurService, ExtractionDataService, FavoriService, FilConversationService, IndicateurAirService, MessageService, NiveauMeteoService, NotifService, RubriqueService } from 'src/app/services';

@Component({
  selector: 'app-extraction-data',
  templateUrl: './extraction-data.component.html',
  styleUrls: ['./extraction-data.component.css']
})
export class ExtractionDataComponent implements OnInit {

  //tables: any[] = ['Communes', 'Comptes Utilisateur', 'Favoris', 'Fils de conversation', "Indicateurs d'air", "Niveau Météo", "Messages", "Notifications", "Rubriques"];
  tables: any[] = ['Communes', 'Comptes Utilisateur', 'Favoris', 'Fils de conversation', "Messages", "Notifications", "Rubriques"];
  tableSelected: string = 'Communes';
  schemaCommune = ["id", "name", "lat", "lon", "departement", "region", "population"];
  schemaCompteUtilisateur = ["id", "codePostal", "commune", "email", "motDePasse", "nom", "nomUtilisateur", "prenom", "role", "statutActif"];
  schemaFavori = ["id", "commune", "compteUtilisateur", "indicateurAir", "niveauMeteo", "nom", "echelleTemps"];
  schemaFilConversation = ["id", "nom"];
  schemaNotification = ["id", "texte", "heure", "lu"];
  schemaRubrique = ["id", "nom"];
  schemaMessage = ["id", "nom", "date"];


  constructor(private extractionDataService: ExtractionDataService,
    private communeService: CommuneService,
    private compteUtilisateurService: CompteUtilisateurService,
    private favoriService: FavoriService,
    private filConversationService: FilConversationService,
    private indicateurAirService: IndicateurAirService,
    private messageService: MessageService,
    private niveauMeteoService: NiveauMeteoService,
    private notifService: NotifService,
    private rubriqueService: RubriqueService) { }

  ngOnInit(): void {
  }

  onChange(selection: string) {
    this.tableSelected = selection;
  }

  factory() {
    if (this.tableSelected == 'Communes') this.communeService.get().subscribe(res => this.download(res, this.schemaCommune));
    if (this.tableSelected == 'Comptes Utilisateur') this.compteUtilisateurService.get().subscribe(res => this.download(res, this.schemaCompteUtilisateur));
    if (this.tableSelected == 'Favoris') this.favoriService.get().subscribe(res => this.download(res, this.schemaFavori));
    if (this.tableSelected == 'Fils de conversation') this.filConversationService.get().subscribe(res => this.download(res, this.schemaFilConversation));
    //if (this.tableSelected == "Indicateurs d'air") this.indicateurAirService.get().subscribe(res => this.download(res));
    //if (this.tableSelected == "Niveau Météo") this.niveauMeteoService.get().subscribe(res => this.download(res));
    if (this.tableSelected == "Messages") this.messageService.get().subscribe(res => this.download(res, this.schemaMessage));
    if (this.tableSelected == "Notifications") this.notifService.get().subscribe(res => this.download(res, this.schemaNotification));
    if (this.tableSelected == "Rubriques") this.rubriqueService.get().subscribe(res => this.download(res, this.schemaRubrique));
  }

  
  download(data, schemaJson: string[]){
    let now = new Date();
    let date = now.toLocaleDateString().split("/").reverse().join(".");
    let time = now.toLocaleTimeString().replace(":", ".").replace(":", ".");
    console.log(data)
    this.extractionDataService.downloadFile(data, schemaJson, `UDARA-${this.tableSelected} ${date}.${time}`);
  }

}
