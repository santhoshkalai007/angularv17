import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformsComponent } from './listforms.component';

describe('ListformsComponent', () => {
  let component: ListformsComponent;
  let fixture: ComponentFixture<ListformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
