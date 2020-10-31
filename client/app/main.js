import { AuthController } from './Controllers/AuthController.js';
import CharacterController from './Controllers/CharacterController.js';
import { UserController } from './Controllers/UserController.js';

class App {
	authController = new AuthController();
	characterController = new CharacterController();
	userController = new UserController();
}

window['app'] = new App();
