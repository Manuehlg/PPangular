import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorExploComponent } from './buscador-explo.component';

describe('BuscadorExploComponent', () => {
  let component: BuscadorExploComponent;
  let fixture: ComponentFixture<BuscadorExploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorExploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorExploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
