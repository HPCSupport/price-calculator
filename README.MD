## A simple price calculator

This app is created using vue, tailwindcss and nodejs

### Development
In order to build this app you will need to install nodejs and the yarn package manager.

### Inside the main folder run
```bash
yarn install
```
to install all javascript dependencies.

### To start the development server run
```bash
cd webapp
yarn serve
```

### To build the webapp run
```bash
cd webapp
yarn build
```
This builds the webapp to `webapp/dist`

### To build the demo files run
```bash
cd webapp
yarn build-demo
```
This builds the webapp to `docs`


### Using the application
By itself the site will not have any price data associated with it.
In order to configure the application, access the site without any queries.

In this page, setup what options you want displayed, then click on **go**.

Configuration options
- Title: This will be displayed as the box header.
- Item: This is the item being sold.
- Units: This is the counting units of the item.
- Cost: This is how much a single unit costs.

For example if you want to bill **$5** per **hour** of **work** for **painting**, you will set the following:
- Title: Painting
- Item: Workers
- Units: Hours
- Cost: 5