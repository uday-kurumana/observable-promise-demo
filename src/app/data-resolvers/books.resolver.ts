import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { DemoService } from '../demo-service/demo-service';


export const booksResolver: ResolveFn<Book[]> = () => {
    // Logic to fetch and return book data before activating the route
    const demoService = inject(DemoService);
    return demoService.getAllBooks();
}

export const getBookByIdResolver: ResolveFn<Book> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const demoService = inject(DemoService);
  const userId = route.paramMap.get('id')!;
  return demoService.getUserId(userId);
};

