import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenseaComponent } from './opensea.component';

describe('OpenseaComponent', () => {
  let component: OpenseaComponent;
  let fixture: ComponentFixture<OpenseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenseaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
