import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckingIn } from './checking-in';

describe('CheckingIn', () => {
  let component: CheckingIn;
  let fixture: ComponentFixture<CheckingIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingIn],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckingIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
