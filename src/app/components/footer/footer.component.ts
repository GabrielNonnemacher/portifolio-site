import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date = 2024;

  public ngOnInit(): void {
    const newDate = new Date()
    this.date = newDate.getFullYear();
  }
}
