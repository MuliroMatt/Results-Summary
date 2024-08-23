import { Component, inject } from '@angular/core';
import { SummaryItemComponent } from '../summary-item/summary-item.component';
import { Data } from '../../data';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SummaryItemComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  data: Data[] = [];
  dataService: DataService = inject(DataService)

  constructor() {
    this.data = this.dataService.getAllData()
  }
}

