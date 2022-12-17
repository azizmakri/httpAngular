import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Model/invoices';
import { InvoiceServiceService } from '../../Invoice/Service/invoice-service.service';



@Component({
  selector: 'app-fetch-invoices',
  templateUrl: './fetch-invoices.component.html',
  styleUrls: ['./fetch-invoices.component.css']
})
export class FetchInvoicesComponent implements OnInit{
  listinvoices: Invoice[] = [];
 
  constructor(private InvoiceServiceService:InvoiceServiceService) { }

  ngOnInit(): void {
    this.InvoiceServiceService.fetchInvoices().subscribe(
      (data : Invoice[])=>{
        this.listinvoices=data
        });

      }
    }
