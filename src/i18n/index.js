"use strict";

import dicts from "./dicts";

export default lang => {
  return key => dicts[ lang ][ key ];
}
