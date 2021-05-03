import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class AbstractHttpService {
    protected url: string;
    
    constructor(protected http: HttpClient, path: string) { 
        this.url = `${environment.urlBack}/${path}`;
    }

}
