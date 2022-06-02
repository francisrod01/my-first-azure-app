import { Component, OnInit } from '@angular/core';
import { Cosmos } from '@app/azure/cosmos.interface';
import { CosmosService } from '@app/azure/services/cosmos/cosmos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cosmos',
  templateUrl: './list-cosmos.component.html',
  styleUrls: ['./list-cosmos.component.css']
})
export class ListCosmosComponent implements OnInit {
  databases$: Observable<Cosmos[]>;

  constructor(private cosmosSrv: CosmosService) { }

  ngOnInit(): void {
    this.getDatabases();
  }

  private getDatabases() {
    this.databases$ = this.cosmosSrv.getDatabases();
  }

}
