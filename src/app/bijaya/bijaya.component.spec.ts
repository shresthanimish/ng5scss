import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijayaComponent } from './bijaya.component';

describe('BijayaComponent', () => {
  let component: BijayaComponent;
  let fixture: ComponentFixture<BijayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
