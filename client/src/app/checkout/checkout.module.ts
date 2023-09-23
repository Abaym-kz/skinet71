import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        CheckoutComponent,
        CheckoutAddressComponent,
        CheckoutDeliveryComponent,
        CheckoutPaymentComponent,
        CheckoutSuccessComponent,
        CheckoutReviewComponent
    ],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        SharedModule
    ]
})
export class CheckoutModule { }
