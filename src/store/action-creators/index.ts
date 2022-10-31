import * as userActionCreators from './user';
import * as basketActionCreators from './basket';
import * as orderActionCreators from './order';

export default {
    ...userActionCreators,
    ...basketActionCreators,
    ...orderActionCreators,
}