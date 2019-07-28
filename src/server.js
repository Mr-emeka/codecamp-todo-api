// import express
import express from 'express';

// import bodyParser
import bodyParser from 'body-parser';

// import dotenv for environment variables management
import dotenv from 'dotenv';

import appRouter from './routes';

// instantiate dotenv
dotenv.config();

// initialize express
const app = express();

// configure body-parser for express
app.use(bodyParser.json({ extended: true }));

// handles all the routing
app.use("/api/v1", appRouter);

const PORT = process.env.PORT || 3000;

// start the express server
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});

/*
call back
(console.log('hello'),(res,err)=>{
  console.log('thanks');
})

//Promise
(console.log('thanks')).then(res=>console.log('thanks'))
.catch(e=>e);

const fetch = async()=>{
  try{
    await console.log('hello');
    await com
  }
}
*/