import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{

  languages=['EN', 'ES']

  constructor(private _translateService:TranslateService) {
  }

  ngOnInit(): void {
    const defaultLange = 'en';
    this.changeLanguage(defaultLange);
  }

  changeLanguage(lang:string){
    this._translateService.setDefaultLang(lang)
    this._translateService.use(lang);
  }

}
