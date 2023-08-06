import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private lang: LanguageService) {}

  ngOnInit() {}
}
