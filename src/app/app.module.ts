import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GradientButtonModule } from './gradient-button/gradient-button.module';

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, GradientButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
