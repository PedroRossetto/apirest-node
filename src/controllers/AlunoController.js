import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(
      alunos,
    );
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const alunos = await Aluno.findByPk(id);
      res.json(
        alunos,
      );
    } catch (e) {
      res.json(e.e.errors);
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      res.json(
        `Aluno ${aluno.nome + aluno.sobrenome} criado com sucesso`,
      );
    } catch (e) {
      res.json(e.e.errors);
    }
  }

  async delete(req, res) {
    const aluno = await Aluno.findByPk(req.body.id);
    if (!aluno) {
      res.status(404).json('Aluno não encontrado');
    } else {
      try {
        await aluno.destroy();
        res.status(200).json(
          `Aluno ${aluno.nome + aluno.sobrenome} foi excluido`,
        );
      } catch (e) {
        res.status(400).json(e.e.errors);
      }
    }
  }

  async update(req, res) {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
      res.status(404).json('Aluno não encontrado');
    }
    try {
      await aluno.update(req.body);
      res.status(200).json('Aluno alterado com sucesso');
    } catch (e) {
      res.status(400).json(e.errors);
    }
  }
}

export default new AlunoController();
