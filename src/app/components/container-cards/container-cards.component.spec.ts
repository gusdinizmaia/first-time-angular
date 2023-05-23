import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardsComponent } from './container-cards.component';

describe('ContainerCardsComponent', () => {
  let component: ContainerCardsComponent;
  let fixture: ComponentFixture<ContainerCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerCardsComponent]
    });
    fixture = TestBed.createComponent(ContainerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
