import { NgModule } from '@angular/core';
import { StaticDatasource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository,
    {provide: StaticDatasource, useClass: RestDataSource}, RestDataSource, AuthService]
})

export class ModelModule {

}