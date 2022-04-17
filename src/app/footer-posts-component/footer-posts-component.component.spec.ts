import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostsComponentComponent } from './footer-posts-component.component';

describe('FooterPostsComponentComponent', () => {
  let component: FooterPostsComponentComponent;
  let fixture: ComponentFixture<FooterPostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPostsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
