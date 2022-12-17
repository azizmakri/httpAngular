import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchInvoicesComponent } from './fetch-invoices.component';

describe('FetchInvoicesComponent', () => {
  let component: FetchInvoicesComponent;
  let fixture: ComponentFixture<FetchInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
