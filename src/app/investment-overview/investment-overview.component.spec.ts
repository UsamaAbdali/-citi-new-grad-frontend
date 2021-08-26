import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOverviewComponent } from './investment-overview.component';

describe('InvestmentOverviewComponent', () => {
  let component: InvestmentOverviewComponent;
  let fixture: ComponentFixture<InvestmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
