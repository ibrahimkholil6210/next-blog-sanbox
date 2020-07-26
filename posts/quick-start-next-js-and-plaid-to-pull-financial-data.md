---
title: 'Quick Start: Next.js and Plaid to pull financial data'
date: 2020-03-14T04:00:00.000+00:00
subtitle: Your guide to getting started with Plaid in a Next.js app
socialimage: https://res.cloudinary.com/raskin-me/image/upload/v1584292547/nextjs-plaid-tailwind/nextjs-plaid-social-image_ohwo5z.jpg

---
Now that I've got a lovely [Next.js personal website](https://raskin.me) up and running, I'm ready for my next project. I've always enjoyed grabbing CSV files from my credit card or bank accounts and playing around with the financial data. It allowed me to run super custom reports for properly managing personal finances. One method of doing this was using Jupyter Notebook and running some Matplotlib plots, which I explain on [this GitHub repo](https://github.com/perryraskin/TransFormer).

For a while now I've been meaning to integrate Plaid into a web app and try manipulating some financial data. After inevitably using it in the many budgeting apps I've encountered, I knew I had to give it a try myself. Currently I use [Copilot](https://copilot.money), an iOS budgeting app that uses Plaid, and I absolutely love it. My code MRJA4Q will get you **3 months free**!

I followed a [blog post](https://medium.com/@dereksams/building-a-react-app-with-the-plaid-api-93e45ae61b58) by Derek Sams that showed me how to get a React app running with Plaid. To get it working with Next.js, I had to make a few changes you may notice if you decide to compare the two.

## Our Starter App

What we're focusing on here is to simply get Plaid working with a working React app. It will make a call to Plaid's transactions API and display transactions to the console. Of course once you get this done you can build upon this thing to make it do some really useful stuff!

## Get Set Up

If you'd like, you can get started from scratch using [Next.js's guide](https://nextjs.org/learn/basics/getting-started/setup) on starting a new project. For this post I'll focus on the [boilerplate repo](https://github.com/perryraskin/nextjs-plaid-starter) I published to GitHub. Once you clone the repo you'll want to run `npm install` in the root folder to get all set up. Please see the ReadMe file for more information.

## The Code

Notice our API routes in `/pages/api`. Next.js automatically handles routing for us simply based on files it detects in this folder, like magic! We will take advantage of this along with our handy fetching utility called `isomorphic-unfetch`. These are important for working with Plaid's API.

### The API

Let's take a look at the API in `/pages/api/plaid/index.js`. First we need to import `next-connect,` which will allow us to utilize the Next.js request handler. In our case, we will be sending a `POST` request. Then of course we'll need `plaid` for connecting to Plaid's API, and `moment` to do work with a few dates.

    import nextConnect from 'next-connect';
    import plaid from 'plaid';
    import moment from 'moment';

Next, we need to initialize some variables. As our `.env` file defines the API tokens received from Plaid, I defined them here. These are used to create the Plaid client object, which allows us to exchange keys and grab transactions as will be seen later in the file.

    const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
    const PLAID_SECRET = process.env.PLAID_SECRET_SANDBOX;
    const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
    const PLAID_ENV = process.env.PLAID_ENV;
    
    var ACCESS_TOKEN = null;
    var ITEM_ID = null;
    
    // Initialize the Plaid client
    export const client = new plaid.Client(
      PLAID_CLIENT_ID,
      PLAID_SECRET,
      PLAID_PUBLIC_KEY,
      plaid.environments[PLAID_ENV],
      { version: '2019-05-29', clientApp: 'Plaid Quickstart' }
    );
    
    const handler = nextConnect();

`handler.post` will begin the API call. We are doing two things here:

* Calling `client.exchangePublicToken` to provide us with the access token
* Calling `client.getTransactions` to return all transactions from the past 30 days

Once we receive the access token from `client.exchangePublicToken` we will use it when we call `client.getTransactions`. That's pretty much all that's going on here. The rest of the code is console logging the results so we can see what's going on as it happens.

Upon a successful response, we will receive the following JSON:

    res.json({
      ok: true,
      message: 'Success!',
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      transactions: transactions
    })

If you use Postman, you should see this response. Clicking the "View Transactions" button after you connect the (sandbox) bank account, the dev console will output the `{ transactions: transactions }` part of that response. More on front end aspects in the next section. Be sure to use the following sandbox credentials, provided by Plaid:

* **User ID:** user_good
* **Password:** pass_good

### The Front End Component

I recently learned that if we want to work with state when using Next.js, we need to call `useState()`. For our little project, we'll need `transactions` to be stateful.

    const [transactions, setTransactions] = useState(Object);

That's it! We're basically just declaring a variable along with a matching setter for its state. In this case, `transactions` is the variable and `setTransactions` is the setter function. If you are familiar with deconstructing, you cant think about it as deconstructing the imported `useState` functionality.

    function handleOnSuccess(public_token: any, metadata: any) {
        // send token to client server
        fetchSwal
          .post('/api/plaid', {
            public_token: public_token,
            metadata: metadata,
          })
          .then((res) => {
            if (res.ok !== false) {
              setTransactions({ transactions: res.transactions });
            }
          });
      }

This is the function that handles the click of our “Connect your bank!” button to grab transactions. You'll see in the `PLink` component how it all comes together. This basically just makes an API call to grab the transactions from the account you just logged into through Plaid! Once we have the transactions, our `setTransactions` setter function sets the state to the value we just received.

We will then print the transactions to the dev console (in Chrome, for example) by clicking the "View Transactions" button. 

    function handleClick(res: any) {
      console.log('transactions:', transactions);
    }

## Conclusion

It's amazing that we have access to such a great API like Plaid. It really allows us devs to get creative with all kinds of data.

Feel free to leave comments and let me know how this went for you! I'd love to hear about any cool features you implemented following this initial setup.