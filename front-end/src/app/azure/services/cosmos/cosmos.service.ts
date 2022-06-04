import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cosmos } from '@app/azure/cosmos.interface';

@Injectable({
  providedIn: 'root'
})
export class CosmosService {

  constructor(private http: HttpClient) { }

  getDatabases() {
    return this.http.get<Cosmos[]>('/api/azure-cosmos-get');
  }
}
