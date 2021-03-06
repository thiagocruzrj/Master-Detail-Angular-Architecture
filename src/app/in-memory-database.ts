import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category-model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Home', description: 'House bill payments' },
      { id: 2, name: 'Health', description: 'Health plan and medicines' },
      { id: 3, name: 'Recreation', description: 'Cinema, park, beaches, etc' },
      { id: 4, name: 'Salary', description: 'Salarioes receivable' },
      { id: 5, name: 'Freelas', description: 'Frelance works' }
    ];
    return { categories };
  }
}
