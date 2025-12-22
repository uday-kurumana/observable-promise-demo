import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListTable } from './book-list-table';

describe('BookListTable', () => {
  let component: BookListTable;
  let fixture: ComponentFixture<BookListTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
