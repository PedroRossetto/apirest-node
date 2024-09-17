import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      res.json({
        id, nome, email,
      });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // // Index
  // async index(req, res) {
  //   try {
  //     console.log(req.userId, req.userEmail, 'Passou aqui no index');
  //     const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
  //     return res.json(users);
  //   } catch (e) {
  //     return res.json(null);
  //   }
  // }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  // eslint-disable-next-line consistent-return
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novoDados = await user.update(req.body);
      return res.json(novoDados);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  // eslint-disable-next-line consistent-return
  async delete(req, res) {
    console.log(req.userId);
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json('Usuario deletado');
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
