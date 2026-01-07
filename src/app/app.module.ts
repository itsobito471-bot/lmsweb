import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landingPage/components/landing-page/landing-page.component';
import { HeaderComponent } from './pages/landingPage/components/header/header.component';
import { HeroComponent } from './pages/landingPage/components/hero/hero.component';
import { StatsComponent } from './pages/landingPage/components/stats/stats.component';
import { TrendingCoursesComponent } from './pages/landingPage/components/trending-courses/trending-courses.component';
import { LearningCategoriesComponent } from './pages/landingPage/components/learning-categories/learning-categories.component';
import { InstructorBannerComponent } from './pages/landingPage/components/instructor-banner/instructor-banner.component';
import { TestimonialsComponent } from './pages/landingPage/components/testimonials/testimonials.component';
import { FooterComponent } from './pages/landingPage/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    TrendingCoursesComponent,
    LearningCategoriesComponent,
    InstructorBannerComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
