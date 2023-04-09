import { TestBed } from '@angular/core/testing';
import { TodolistComponent } from './app.component';

describe('TodolistComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodolistComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodolistComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  

  it('should render title', () => {
    const fixture = TestBed.createComponent(TodolistComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('TodolistComponent app is running!');
  });
});
