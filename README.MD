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


### Using the site
By itself the site will not have any price data associated with it.
In order to set the price, you will need to append the price data in the query string of the URL.
```
cpu: $0.30
gpu: $0.45
storage: $500
```
would be appended as
```
https://site-url/?cpu=0.30&gpu=0.45&storage=250
```