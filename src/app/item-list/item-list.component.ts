import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() items: any[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() togglePurchased = new EventEmitter<number>();

  editIndex: number | null = null;

  editItem(index: number) {
    this.editIndex = index;
  }

  saveEdit(index: number) {
    this.editIndex = null;
  }

  cancelEdit() {
    this.editIndex = null;
  }

  get purchasedItems() {
    return this.items.filter(item => item.isPurchased);
  }

  get notPurchasedItems() {
    return this.items.filter(item => !item.isPurchased);
  }

  toggleItemPurchased(index: number): void {
    this.items[index].isPurchased = !this.items[index].isPurchased;
  }
}