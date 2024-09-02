import jwt from 'jsonwebtoken';
import User from '../models/User';

class HomeController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password || email.trim() === '' || password.trim() === '') {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }
    // Pegando atributo especifico de um objeto
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json(
      token,
    );
  }
}

export default new HomeController();
