import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from '../model/account';
import { HistoryModel } from '../model/history';
import { Securities } from '../model/Securities';
import { AccountServiceService } from '../service/account-service.service';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';

HistoryModel
@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  constructor(private accountsService: AccountServiceService, private activedRoute:ActivatedRoute, private router:Router) { 
  }
  currAccount:Account;
  // Default account as placeholder until async request resolved
  securities:Securities[]=[];
  history:HistoryModel[]=[new HistoryModel("2021-08-25", -50),new HistoryModel("2021-08-25", 100), new HistoryModel("2021-08-24", 25)];
  accountId:number=0;
  // boolean tests
  isInvestmentAccount:boolean=false;
  // Used to store Async calls
  private ngSetAccountInitial = new Subscription;
  private ngSetAccountForParams = new Subscription;
  // Forms
  showDepositWithdrawForm:boolean=false;
  depositWithdrawForm:FormGroup;
  buySellSecuritiesForm:FormGroup;
  cashAccOptions=["Deposit", "Withdraw"];


  ngOnInit() {
    this.accountId = this.activedRoute.snapshot.params['id'];
    
    // Create a temp account to avoid issues while waiting for get request.
    this.currAccount=new Account(-1,-1,"cash","defaultAccount", this.securities, this.history);
    this.setAccount();
    
    //Subscribe to the ID parameter, ensure change between accounts 
    this.ngSetAccountForParams =this.activedRoute.paramMap.subscribe(params => {
      this.accountId = +params.get('id');
      this.setAccount();
    });

    // Initialize forms 
    this.initDepositWithdrawForm();
  }

  // Set the currAccount based on URL param ID
  setAccount(){
    this.ngSetAccountInitial=this.accountsService.getAccountById(""+this.accountId)
    .subscribe(data=>{
      this.currAccount=data;
      this.isInvestmentAccount=this.currAccount.type==='investment'
    }),
    error=>{
      console.log("ERROR: Couldn't set Account by Id",error);
    }
  }

  initDepositWithdrawForm(){
    this.depositWithdrawForm= new FormGroup({
      // 'userData': new FormGroup({
        'account_name': new FormControl(this.currAccount.name),
        'transactionType':new FormControl('Deposit', Validators.compose([Validators.required])),
        'amount': new FormControl(null, [Validators.required]),          
      // })
  });
  this.depositWithdrawForm.get('transactionType').valueChanges.subscribe(val => {
    // console.log("trans type changed",this.depositWithdrawForm.get('transactionType').value);

    if (val=="Withdraw") {
      console.log("val is withdraw");
      this.depositWithdrawForm.controls['amount'].setValidators([Validators.required,Validators.max(this.currAccount.amount)]);
    } else {
      console.log("val is deposit");
      this.depositWithdrawForm.controls['amount'].clearValidators();
      this.depositWithdrawForm.controls['amount'].setValidators([Validators.required]);

    }
    this.depositWithdrawForm.controls['amount'].updateValueAndValidity();
  });
  

  
}

  onSubmitDepositWithdraw(){
    var depositVal=0;
    
    // If "withdrawl" covert amount to negative
    if(this.depositWithdrawForm.get('transactionType').value=='Withdraw'){
      depositVal=-Math.abs(this.depositWithdrawForm.get('amount').value)
    }
    // else "deposit"
    else{
      depositVal=Math.abs(this.depositWithdrawForm.get('amount').value)
    }

    this.accountsService.putDepositMoney(this.currAccount.id,depositVal)
    .subscribe(val =>{  
      // Navigate to all manage-accounts once complete
      this.router.navigate(['/manage-accounts'], {fragment:'loading'});
    }),
    error =>{
      console.log("ERROR: Couldn't put to DepositMoney",error);
    }
  }

  onDepositWithdrawBtn(){
    this.showDepositWithdrawForm=true;

  }
  onCancelForm(){
    this.showDepositWithdrawForm=false;
  }

  ngOnDestroy() {
    this.ngSetAccountInitial.unsubscribe();
    this.ngSetAccountForParams.unsubscribe();
}


}
