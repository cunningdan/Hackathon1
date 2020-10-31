import { AuthController } from './Controllers/AuthController.js';
import CharacterController from './Controllers/CharacterController.js';
import { UserController } from './Controllers/UserController.js';
import { CommentController } from './Controllers/CommentController.js';

class App {
	authController = new AuthController();
	characterController = new CharacterController();
	userController = new UserController();

	commentController = new CommentController();
}

window['app'] = new App();
