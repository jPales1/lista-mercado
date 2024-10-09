import { Component } from '@angular/core';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  isPurchased: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddItemFormComponent, ItemListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-supermercado';

  items: Item[] = [];

  addItem(itemName: string) {
    if (itemName) {
      this.items.push({ name: itemName, isPurchased: false });
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleItemPurchased(index: number): void {
    this.items[index].isPurchased = !this.items[index].isPurchased;
  }
}