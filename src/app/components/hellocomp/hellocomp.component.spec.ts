import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellocompComponent } from './hellocomp.component';

describe('HellocompComponent', () => {
  let component: HellocompComponent;
  let fixture: ComponentFixture<HellocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellocompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
