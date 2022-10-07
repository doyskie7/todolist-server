const bcrypt = require('bcrypt');
import {SALTROUNDS} from '../common/Constant'




const HashPassword = (password) => {
    const salt = bcrypt.genSaltSync(SALTROUNDS);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
} 

export default HashPassword;