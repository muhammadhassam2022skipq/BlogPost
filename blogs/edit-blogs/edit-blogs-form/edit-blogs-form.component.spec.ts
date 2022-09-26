import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogsFormComponent } from './edit-blogs-form.component';

describe('EditBlogsFormComponent', () => {
  let component: EditBlogsFormComponent;
  let fixture: ComponentFixture<EditBlogsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
