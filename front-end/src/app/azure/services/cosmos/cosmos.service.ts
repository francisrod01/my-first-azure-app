import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cosmos } from '@app/azure/cosmos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CosmosService {
  private apiHost = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getDatabases() {
    return this.http.get<Cosmos[]>(this.apiHost + '/api/azure/cosmos');
  }
}
