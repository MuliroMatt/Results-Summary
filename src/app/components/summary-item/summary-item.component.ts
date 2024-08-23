import { Component, Input } from '@angular/core';
import { Data } from '../../data';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-summary-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './summary-item.component.html',
  styleUrl: './summary-item.component.scss'
})
export class SummaryItemComponent {
  @Input() data!: Data;
}
