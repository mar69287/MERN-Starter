import User from '../models/user.js'

export { 
        create, 
        login 
    };

async function create(req, res) {
    console.log('in users create controller');
}

async function login(req, res) {
    console.log('in users login controller');
}
