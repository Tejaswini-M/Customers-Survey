import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedTypeComponent } from './mixed-type.component';

describe('MixedTypeComponent', () => {
  let component: MixedTypeComponent;
  let fixture: ComponentFixture<MixedTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
