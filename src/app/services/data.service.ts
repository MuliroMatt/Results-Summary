import { Injectable } from '@angular/core';
import { Data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[] = [
    {
      category: 'Reaction',
      score: 80,
      icon: './assets/images/icon-reaction.svg',
      bgColor: 'hsl(0, 100%, 67%, 0.05)',
      color: 'hsl(0, 100%, 67%)',
    },
    {
      category: 'Memory',
      score: 92,
      icon: './assets/images/icon-memory.svg',
      bgColor: 'hsl(39, 100%, 56%, 0.05)',
      color: 'hsl(39, 100%, 56%)',
    },
    {
      category: 'Verbal',
      score: 61,
      icon: './assets/images/icon-verbal.svg',
      bgColor: 'hsl(166, 100%, 37%, .05)',
      color: 'hsl(166, 100%, 37%)',
    },
    {
      category: 'Visual',
      score: 72,
      icon: './assets/images/icon-visual.svg',
      bgColor: 'hsl(234, 85%, 45%, .05)',
      color: 'hsl(234, 85%, 45%)',
    },
  ];

  constructor() { }

  getAllData(): Data[]{
    return this.data
  }
}
