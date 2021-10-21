import { Component, DoCheck, Input } from '@angular/core';
import { ListData } from './Type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title: string = 'Jongs TODO List';
  addYn: boolean = false;
  newData: ListData = {
    key: 0,
    title: '',
    content: '',
    date: '',
    note: '',
  };
  list: ListData[] = [
    {
      key: 1,
      title: 'Angular Example',
      content: 'Create TODO List',
      date: '2021-10-21',
      note: '',
    },
  ];
  selectItemKey: number = 0;
  itemCount: number = 1;
  eventEmitText: string = '';

  ngDoCheck() {
    console.log('!', this.selectItemKey);
  }

  handleItem = () => {
    this.newData = {
      key: ++this.itemCount,
      title: '',
      content: '',
      date: '',
      note: '',
    };
    this.addYn = !this.addYn;
  };

  selectItem = (key: number): void => {
    console.log('check key', key);
    this.selectItemKey = key;
  };

  addTodoList = (): void => {
    const { title, content, date } = this.newData;
    if (!title || !content || !date) return alert('빈 값이 존재합니다.');
    this.list.push(this.newData);
    this.handleItem();
  };

  delTodoList = (): void => {
    this.list = this.list.filter((item) => item.key !== this.selectItemKey);
    this.selectItemKey = 0;
  };

  checkEventEmit = (value: string) => {
    this.eventEmitText = value;
  };
}
