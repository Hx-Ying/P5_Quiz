var express = require('express');
var {models} = require('../models/index')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

/* GET/credits*/
router.get('/credits', function(req, res, next) {
	let enlaceFoto = './images/perfil.jpg'
	res.render('credits', {
		title: 'Créditos',
		autor: 'Hengxuan Ying',
		foto: enlaceFoto
	});
});

/* GET/quizzes*/
router.get('/quizzes', function(req, res, next) {
	let questions = [];
	models.quiz.findAll()
	.then(quizzes => {
		questions = quizzes;
		res.render('quizzes', {
			title: 'Lista de quizzes',
			questions: questions
		});
		
	})
	.catch(error => {
		errorlog(socket, error.message);
		res.render('quizzes', {
			title: 'Lista de quizzes',
			questions: questions
		});

	});
	
	
});


module.exports = router;
