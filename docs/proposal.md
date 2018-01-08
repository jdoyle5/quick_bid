# QuickBid

[QuickBid](https://quickbid.wixsite.com/quickbid) is a 60 second live auction app aimed at helping companies eliminate surplus inventory fast and minimize deadweight loss.

## Background & Overview

This app was inspired by the estate sales and auto auctions that team member Max Tocarev attended. Every minute, there is a new item up for auction, and each auction lasts one minute. QuickBid serves 2 sides: companies with excess items that need extra visibility beyond their own sales and discounts, and value-seeking customers looking to score great deals fast. In a nutshell, QuickBid is a combination of Ebay auctions and flash sales.

## Functionality & MVP

### Core Features
* OAuth
* Dashboard - featuring upcoming schedule of items available for bidding
* Bidding window - showcases the item details and multi-player bidding functionality
* Bidding - each click on the ‘Enter bid’ button will increase the current bid by a set increment. The increment will be determined based on that item’s MSRP (i.e. a more expensive item will have a larger bid increment than a less expensive item)
    * real time bidding enabled by websockets

### Bonus Features
* Implement categories for easier navigation
* Users can bookmark a future auction and set a reminder (push notification)
* User profile component

## Technologies & Technical Challenges

* Language & frameworks: Javascript and MERN stack (MongoDB, Express, React Native, Node.js)
    * Since this is a new, unfamiliar stack for the whole team, we expect to spend the prior weekend doing heavy research, tutorials to get up to speed
* Socket.io to allow real time bidding
    * This is a new technology for the entire team and we expect to spend a significant chunk of time learning and debugging
* Sample data will be pulled from the Walmart open API

## Weekend Accomplishments

* Heavy research on the MERN stack
* Completed tutorial on React Native and MongoDB setup
* Hit Walmart API and examined data structure
* Installed Homebrew, Xcode, and other necessary packages
* Started skeleton for project, initialized database and built first model

## Wireframes
![home page](https://raw.githubusercontent.com/jdoyle5/quick_bid/master/docs/wireframes/Screen%201.png)

![show page](https://raw.githubusercontent.com/jdoyle5/quick_bid/master/docs/wireframes/Screen%202.png)

![auction page](https://raw.githubusercontent.com/jdoyle5/quick_bid/master/docs/wireframes/Screen%203.png)

## Team Members & Project Timeline

Max Tocarev, Maxine Chui, Joey Doyle, Wilson Chun

* Day 1 (OAuth 7 project skeleton)
    * Complete skeleton for React/Redux
    * Complete OAuth for Facebook/Google login
    * Seed small sample data
        * Extract data from Walmart API
    * Write test RESTful API call
* Day 2 (sockets and product index page)
    * Get a product to show on frontend/product index view
    * Complete socket.io tutorial
    * Begin implementation of socket.io
* Day 3 (continue Day 2 agenda)
    * Complete product index page
    * Write logic for bidding action + API calls
    * Keep working on sockets and auction component
    * Debug
* Day 4 (deployment)
    * Complete socket implementation
    * Create auction page
    * Debug
* Day 5
    * Push to Heroku
    * Improve landing page
    * Debug
* Day 6
    * Create web page
    * Create emulator (appetize)
    * Style and refine
    * Bonus features
* Day 7
    * Style and refine
    * Bonus features
