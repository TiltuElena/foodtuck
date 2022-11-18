import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChooseUsComponent } from './about-choose-us.component';

describe('AboutChooseUsComponent', () => {
  let component: AboutChooseUsComponent;
  let fixture: ComponentFixture<AboutChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutChooseUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
