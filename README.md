# PSMockPayment
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

This is dummy component specifically used in Salesforce Flow to simulate a payment. Just add it to flow screen, provide input variable for the amount of payment, and it will return a transaction id and message that you can store on record. Here is snapshot of the screen. 

![alt text](https://github.com/thedges/PSMockPayment/blob/main/PSMockPayment.png "PSMockPayment")

## Flow Parameters

| Parameter  | Type | Direction | Definition |
| ------------- | -------------| ---------- |------------- |
| Payment | Text | Input | The payment amount. |
| Transaction ID | Text | Output | A simulated transaction id value that you can store on a record. |
| Transaction Msg| Text | Output | A simulate transaction status message. |

# Installation Instructions

<b>Here are steps to use this component:</b>
  
1. Install the component per the **Deploy to Salesforce** button below
2. Assign the **PSMockPayment** permission set to whatever user needs access to this component.
3. Create a flow and add the "psMockPayment" component to a screen. 
   * Use one variable to provide a payment amount to the component.
   * Create two variables to capture the transaction id and message to store on a record.
4. In the actual flow at runtime, just click the "Pay ..." button and it will show a confirmation message. That's it!
  
<a href="https://githubsfdeploy.herokuapp.com?owner=thedges&repo=PSMockPayment">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
