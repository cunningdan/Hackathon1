import { AuthController } from './Controllers/AuthController.js';
import CharacterController from './Controllers/CharacterController.js';

class App {
	authController = new AuthController();
	characterController = new CharacterController();
}

window['app'] = new App();
