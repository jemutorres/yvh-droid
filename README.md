# YVH Droid
YVH Droid is a small API HTTP about the YVH communication system.

It has been coded in [Node.js](https://nodejs.org/en/), using the [Oka](https://www.npmjs.com/package/oka) framework.

This application has been developed following the **Test Driven Development (TDD)** programming practice.

# Installation

Clone the repository. Use **npm** to build the project.
```
npm install
``` 

# Project Structure

    └── project             # Node.js project
        └── app
        │   ├── controllers 
        │   ├── enums       
        │   ├── lib         
        │   ├── models      
        │   └── routes       
        └── tests           # Integration/Unit tests

## Improvements
* [ ] Add interactive API documentation (Swagger).
* [ ] Validate API input data.
* [ ] Add customs middleware (errors handler, response handler).
* [ ] Enable CORS.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
