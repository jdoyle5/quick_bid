# quickBid

[quickBid](https://quickbid.wixsite.com/quickbid) is a 60 second live auction app aimed at helping companies eliminate surplus inventory fast and minimize deadweight loss.

## Table of Contents

- [Background](#background)
- [Technologies](#technologies)
- [Features](#features)
- [Maintainers](#maintainers)

## Background

This app was inspired by the estate sales and auto auctions that team member Max Tocarev attended. Every minute, there is a new item up for auction, and each auction lasts one minute. QuickBid serves 2 sides: companies with excess items that need extra visibility beyond their own sales and discounts, and value-seeking customers looking to score great deals fast. In a nutshell, QuickBid is a combination of Ebay auctions and flash sales.

## Technologies

* Language & frameworks: Javascript and MERN stack (MongoDB, Express, React Native, Node.js)
    * Since this is a new, unfamiliar stack for the whole team, we expect to spend the prior weekend doing heavy research, tutorials to get up to speed
* Socket.io to allow real time bidding
    * This is a new technology for the entire team and we expect to spend a significant chunk of time learning and debugging
* Sample data will be pulled from the Walmart open API

## Features

### OAuth

![OAuth](https://github.com/jdoyle5/quick_bid/blob/master/docs/screenshots/OAuth.png)

Allow users to easily log in using Facebook or Google before accessing the main contents of the app.

### Dashboard

![Dashboard](https://github.com/jdoyle5/quick_bid/blob/master/docs/screenshots/Dashboard_1.png)

Features a list of all the items available for bidding.

![Dashboard2](https://github.com/jdoyle5/quick_bid/blob/master/docs/screenshots/Dashboard_2.png)

Clicking on an item will display additional information; the item's MSRP and the auction time for the item.

### Bidding window

![Bidding Window](https://github.com/jdoyle5/quick_bid/blob/master/docs/screenshots/Auction_Window.png)

```javascript
//socket.js

export const increaseBid = (userKey, bidAmount, auctionItemId, socket) => {
  Item.findOne({bid_time: bidTime()}).exec((err, foundItem) => {
    if (foundItem.id === auctionItemId) {
      Item.findOneAndUpdate({bid_time: bidTime()}, {
        "$set": {
          "highest_bid": bidAmount,
          "highest_bidder_key": userKey
        }
      }, {new: true}
    ).exec((err2, updatedItem) => {
        socket.emit('auction item', updatedItem);
        if (err2) {
          console.log(err2);
        }
      });
    }

  });

```

Showcases the item details and multi-player real time bidding functionality enabled by websockets. By clicking on the yellow button with the current bid price, it will increase the current bid by a set increment. The increment will be determined based on that item’s MSRP (i.e. a more expensive item will have a larger bid increment than a less expensive item)

### Future Features
* Implement categories for easier navigation
* Users can bookmark a future auction and set a reminder (push notification)
* User profile component

## Maintainers

[@tocarevmax](https://github.com/tocarevmax)
[@Maxine-Chui](https://github.com/Maxine-Chui)
[@jdoyle5](https://github.com/jdoyle5)
[@w-chun](https://github.com/w-chun)
