import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaDetailsComponent } from './cancha-details.component';

describe('CanchaDetailsComponent', () => {
  let component: CanchaDetailsComponent;
  let fixture: ComponentFixture<CanchaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanchaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanchaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
