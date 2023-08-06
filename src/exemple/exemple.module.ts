import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExempleComponent } from './exemple.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageService } from 'src/language.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ExempleComponent, HeaderComponent, FooterComponent],
  exports: [ExempleComponent],
  providers: [LanguageService],
})
export class ExempleModule {}
