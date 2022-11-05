import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueFacoComponent } from './o-que-faco.component';

describe('OQueFacoComponent', () => {
  let component: OQueFacoComponent;
  let fixture: ComponentFixture<OQueFacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OQueFacoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OQueFacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
