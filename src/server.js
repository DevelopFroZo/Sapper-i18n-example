import sirv from 'sirv';
import express from "express";
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from "express-session";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = express();

server.use(
  session( {
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
    secret: "cats"
  } )
);

server.use( ( req, res, next ) => {
  if( !req.session.locale ) req.session.locale = "ru";

  next();
} );

server // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware( {
      session: ( req, res ) => ( {
        locale: req.session.locale
      } )
    } )
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
