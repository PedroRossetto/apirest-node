import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joao',
      sobrenome: 'Miranda',
      email: 'joao@email.com',
      idade: 52,
      peso: 146.50,
      altura: 1.54,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
