import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogsFormComponent } from './add-blogs-form.component';

describe('AddBlogsFormComponent', () => {
  let component: AddBlogsFormComponent;
  let fixture: ComponentFixture<AddBlogsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
