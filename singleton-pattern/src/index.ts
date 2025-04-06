import util from 'node:util';
import { Logger } from "./logger";
import { getObjectId } from './utils';

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("message log 1");
logger2.log("message log 2");

console.log(util.inspect(logger1, { showHidden: true }));
console.log(util.inspect(logger2, { showHidden: true }));

console.log(getObjectId(logger1));
console.log(getObjectId(logger2));
