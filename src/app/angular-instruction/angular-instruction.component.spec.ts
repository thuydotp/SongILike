import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInstructionComponent } from './angular-instruction.component';

describe('AngularInstructionComponent', () => {
  let component: AngularInstructionComponent;
  let fixture: ComponentFixture<AngularInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
