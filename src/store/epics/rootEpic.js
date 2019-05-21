/**
 * Combine all epics in this file and export the combined epics.
 */

import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics(...Object.values({
  
}));

export default rootEpic;
