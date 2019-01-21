import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { StaticDatasource } from './static.datasource';

@Injectable()

export class OrderRepository {
    private orders: Order[] = [];
    constructor(private datasource: StaticDatasource){

    }

    getOrder(): Order[]{
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order>{
        return this.datasource.saveOrder(order);
    }
}