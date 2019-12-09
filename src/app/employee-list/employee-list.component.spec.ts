import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list.component';
import { Router } from '@angular/router';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
