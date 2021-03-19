import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChoiceComponent } from './image-choice.component';

describe('ImageChoiceComponent', () => {
  let component: ImageChoiceComponent;
  let fixture: ComponentFixture<ImageChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
