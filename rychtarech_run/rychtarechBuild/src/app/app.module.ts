import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UvodComponent} from './uvod/uvod.component';
import {AktualityComponent} from './aktuality/aktuality.component';
import {KnihyComponent} from './knihy/knihy.component';
import {BioComponent} from './bio/bio.component';
import {BlogComponent} from './blog/blog.component';
import {LinkyComponent} from './linky/linky.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from '../../node_modules/ng2-smooth-scroll'

//routing
import  {Routes, RouterModule} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './uvod/books/books.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RecenzieComponent} from './uvod/recenzie/recenzie.component';
import {ServerService} from "./server.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { FooterComponent } from './footer/footer.component';
import { KnihovnaComponent } from './knihy/knihovna/knihovna.component';
import { SliderComponent } from './bio/slider/slider.component';
import { ClanokComponent } from './blog/clanok/clanok.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//routers sites
const appRoutes: Routes = [
    { path: '', redirectTo: '/uvod', pathMatch: 'full' },
    {path: 'uvod', component: UvodComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'aktuality', component: AktualityComponent},
    {path: 'bio', component: BioComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: BlogComponent},
    {path: 'knihy', component: KnihyComponent},
    {path: 'kontakt', component: KontaktComponent},
    {path: 'linky', component: LinkyComponent},
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found'},


];

@NgModule({
    declarations: [
        AppComponent,
        UvodComponent,
        AktualityComponent,
        KnihyComponent,
        BioComponent,
        BlogComponent,
        LinkyComponent,
        KontaktComponent,
        HeaderComponent,
        BooksComponent,
        NavigationComponent,
        RecenzieComponent,
        FooterComponent,
        KnihovnaComponent,
        SliderComponent,
        ClanokComponent,
        AdminComponent,
        PageNotFoundComponent,
        SmoothScrollToDirective,
        SmoothScrollDirective,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes), //registrcia routeru
        FormsModule,
        HttpModule,
    ],
    providers: [
        ServerService,
        { provide: APP_INITIALIZER, useFactory: serverProviderFactory, deps: [ServerService], multi: true },

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function serverProviderFactory(provider: ServerService) {
    return () => provider.getClanky();
}