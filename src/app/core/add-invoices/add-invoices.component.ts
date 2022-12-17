import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Model/invoices';
import { InvoiceServiceService } from '../../Invoice/Service/invoice-service.service';


@Component({
  selector: 'app-add-invoices',
  templateUrl: './add-invoices.component.html',
  styleUrls: ['./add-invoices.component.css']
})
export class AddInvoicesComponent implements OnInit{

  invoice: Invoice = new Invoice;

  constructor(private i:InvoiceServiceService) { }

  ngOnInit(): void {  
  }

  showForm(t:any){
    console.log(t)
  }
  addP(f:any){
    this.i.addInvoice(f).subscribe(
      ()=>{
        console.log('added')
      }
    );
  }
}
