import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlaylistComponent } from './add-new-playlist.component';

describe('AddNewPlaylistComponent', () => {
  let component: AddNewPlaylistComponent;
  let fixture: ComponentFixture<AddNewPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
