import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplotacionesComponent } from './explotaciones.component';

describe('ExplotacionesComponent', () => {
  let component: ExplotacionesComponent;
  let fixture: ComponentFixture<ExplotacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplotacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
