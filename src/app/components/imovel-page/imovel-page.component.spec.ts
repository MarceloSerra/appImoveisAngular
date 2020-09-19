import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelPageComponent } from './imovel-page.component';

describe('ImovelPageComponent', () => {
  let component: ImovelPageComponent;
  let fixture: ComponentFixture<ImovelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
