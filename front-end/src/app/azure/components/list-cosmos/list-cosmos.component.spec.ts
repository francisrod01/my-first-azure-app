import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCosmosComponent } from './list-cosmos.component';

describe('ListCosmosComponent', () => {
  let component: ListCosmosComponent;
  let fixture: ComponentFixture<ListCosmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCosmosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
