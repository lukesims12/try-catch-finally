const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:ID', (req, res) => {
    const { side } = req.query;
    const { ID } = req.params;

    if (!side) {
        return res.redirect(`/cards/${ID}?side=question`);
    }

    const name = req.cookies.username;
    const text = cards[ID][side];
    const templateData = { ID, text, name };

    if (side === 'question') {
        const { hint } = cards[ID];
        templateData.hint = hint;
        templateData.side = 'question'
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else {
        templateData.side = 'answer'
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

router.get('/', (req, res) => {
    res.redirect(`cards/${Math.floor(Math.random() * cards.length)}?side=question`)
});

module.exports = router;