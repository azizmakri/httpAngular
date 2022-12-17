import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/Model/invoices';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
url=environment.baseUrl;

  constructor(private http: HttpClient) { }

  addInvoice(data: any) {
    return this.http.post(this.url+'invoices/', data)
  }
  fetchInvoices():Observable<Invoice[]> {
    return this.http.get<Invoice[]>('http://localhost:3000/invoices/')
  }
  removeInvoice(id:any) {
    return this.http.delete('http://localhost:3000/invoices/'+id)
  }
  updateInvoice(data: any,id:any) {
    return this.http.put('http://localhost:3000/invoices/'+id, data)
  }

  obs() {
    return new Observable(
      () => {
        console.log('obssssss')
      }
    )
  }

}
