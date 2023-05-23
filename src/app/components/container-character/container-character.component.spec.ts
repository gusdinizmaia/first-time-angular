import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCharacterComponent } from './container-character.component';

describe('ContainerCharacterComponent', () => {
  let component: ContainerCharacterComponent;
  let fixture: ComponentFixture<ContainerCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerCharacterComponent]
    });
    fixture = TestBed.createComponent(ContainerCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
