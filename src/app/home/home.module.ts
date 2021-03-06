import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SubscriptionComponent } from './profile/subscription/subscription.component';
import { DevicesComponent } from '../configuration_app/devices/devices.component';
import { FiscalInformationComponent } from '../configuration_app/fiscal-information/fiscal-information.component';
import { PaymentComponent } from './profile/payment/payment.component';
import { HeaderComponent } from '../ui/header/header.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import {
  MatFormFieldModule, MatLabel
} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatCommonModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { EditionPreviewComponent } from './edition-preview/edition-preview.component';
import { EditionReadComponent } from './edition-read/edition-read.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ConfigurationComponent } from '../configuration_app/configuration/configuration.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { AddItemCartComponent } from './add-item-cart/add-item-cart.component';
import { AlertMessageComponent } from '../alert-message/alert-message.component';
import { AppRoutingModule } from '../app-routing.module';
import { UiModule } from '../ui/ui.module';
import { BuyEditionComponent } from './buy-edition/buy-edition.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ContactComponent } from '../discovery/pages/contact/contact.component';
import { StaffComponent } from '../discovery/pages/staff/staff.component';
import { ProductComponent } from '../discovery/pages/products/product.component';
import { FooterComponent } from '../discovery/pages/footer/footer.component';




@NgModule({
  declarations: [
    HomeComponent,
    DiscoveryComponent,
    ProfileComponent,
    SubscriptionComponent,
    DevicesComponent,
    FiscalInformationComponent,
    PaymentComponent,
    EditionPreviewComponent,
    SubscribeComponent,
    ConfigurationComponent,
    CreateSubscriptionComponent,
    AddItemCartComponent,
    AlertMessageComponent,
    BuyEditionComponent,
    TermsConditionComponent,
    ProductComponent,
    StaffComponent,
    ContactComponent,


  ],
  entryComponents: [
    EditionPreviewComponent, CreateSubscriptionComponent, BuyEditionComponent,
  ],
  exports: [
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatCommonModule,




  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCarouselModule,
    SpinnersAngularModule,
    PdfViewerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    UiModule,

  ]
})
export class HomeModule { }
