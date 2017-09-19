import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Pragnesh' },
      { id: 11, name: 'Dakshesh' },
      { id: 12, name: 'Anil' },
      { id: 13, name: 'Krunal' },
      { id: 111,name: 'Test'},
      { id: 14, name: 'Uday' },
      { id: 15, name: 'Halpati' }
    ];
    return {heroes};
  }
}