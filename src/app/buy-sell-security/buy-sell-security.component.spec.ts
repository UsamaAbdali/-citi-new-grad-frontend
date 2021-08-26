import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellSecurityComponent } from './buy-sell-security.component';

describe('BuySellSecurityComponent', () => {
  let component: BuySellSecurityComponent;
  let fixture: ComponentFixture<BuySellSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
