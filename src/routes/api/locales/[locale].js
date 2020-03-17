"use strict";

export async function put( req, res ){
  const { locale } = req.params;

  if( locale !== "ru" && locale !== "en" )
    return res.status( 422 ).end();

  req.session.locale = locale;
  res.status( 204 ).end();
}
