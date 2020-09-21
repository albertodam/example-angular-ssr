import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertotComponent } from './albertot.component';

describe('AlbertotComponent', () => {
  let component: AlbertotComponent;
  let fixture: ComponentFixture<AlbertotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbertotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
