import { Rubrique } from "./rubrique.interface";

export interface FilConversation {
    id: number;
    nom: string;
    rubrique: Rubrique;
}