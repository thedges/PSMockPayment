import {LightningElement, api} from 'lwc';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
import APP_RESOURCES from '@salesforce/resourceUrl/PSMockPayment';
import makePayment from '@salesforce/apex/PSMockPaymentController.makePayment';

export default class PsMockPayment extends LightningElement {
  @api payment = 50;
  @api symbol = '$';
  @api after = false;
  @api transactionId;
  @api transactionMsg;

  showPayment = false;

  get checkImage() {
    return APP_RESOURCES + '/check.png';
  }

  @api get payAmount() {
    console.log('after=' + this.after);

    if (this.after) {
      return this.payment + this.symbol;
    }
    else
    {
      return this.symbol + this.payment;
    }
  }

  connectedCallback () {
    var self = this;


    Promise.all ([
      loadStyle (this, APP_RESOURCES + '/bootstrap.min.css'),
      loadScript (this, APP_RESOURCES + '/bootstrap.min.js'),
      loadScript (this, APP_RESOURCES + '/jquery.min.js'),
      loadStyle (this, APP_RESOURCES + '/fontawesome/css/all.min.css'),
    ]).then (() => {});
  }

  handlePayment() {
    var self = this;

    makePayment()
    .then(result => {
       console.log('result=' + result);
       var data = JSON.parse(result);
       self.transactionId = data.transactionId;
       self.transactionMsg = data.transactionMsg;

       self.showPayment = true;
    })
    .catch (error => {
       //self.handleError(error);
    });

  }

  tabCreditCard () {
    console.log ('credit card tab selected...');
    this.showPayment = false;

    this.template.querySelector('.nav-tab-paypal').classList.remove('show');
    this.template.querySelector('.nav-tab-paypal').classList.remove('active');

    this.template.querySelector('.nav-tab-card').classList.add('show');
    this.template.querySelector('.nav-tab-card').classList.add('active');

    this.template.querySelector('.nav-tab-bank').classList.remove('show');
    this.template.querySelector('.nav-tab-bank').classList.remove('active');

    this.template.querySelector('.tab-card').classList.add('active');
    this.template.querySelector('.tab-paypal').classList.remove('active');
    this.template.querySelector('.tab-bank').classList.remove('active');
  }

  tabPaypal () {
    console.log ('paypal tab selected...');
    this.showPayment = false;

    this.template.querySelector('.nav-tab-paypal').classList.add('show');
    this.template.querySelector('.nav-tab-paypal').classList.add('active');

    this.template.querySelector('.nav-tab-card').classList.remove('show');
    this.template.querySelector('.nav-tab-card').classList.remove('active');

    this.template.querySelector('.nav-tab-bank').classList.remove('show');
    this.template.querySelector('.nav-tab-bank').classList.remove('active');

    this.template.querySelector('.tab-card').classList.remove('active');
    this.template.querySelector('.tab-paypal').classList.add('active');
    this.template.querySelector('.tab-bank').classList.remove('active');
  }

  tabBank () {
    console.log ('bank tab selected...');
    this.showPayment = false;

    this.template.querySelector('.nav-tab-paypal').classList.remove('show');
    this.template.querySelector('.nav-tab-paypal').classList.remove('active');

    this.template.querySelector('.nav-tab-card').classList.remove('show');
    this.template.querySelector('.nav-tab-card').classList.remove('active');

    this.template.querySelector('.nav-tab-bank').classList.add('show');
    this.template.querySelector('.nav-tab-bank').classList.add('active');

    this.template.querySelector('.tab-card').classList.remove('active');
    this.template.querySelector('.tab-paypal').classList.remove('active');
    this.template.querySelector('.tab-bank').classList.add('active');
  }
}