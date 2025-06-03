import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozosComponent } from './pozos.component';

describe('PozosComponent', () => {
  let component: PozosComponent;
  let fixture: ComponentFixture<PozosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PozosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PozosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
