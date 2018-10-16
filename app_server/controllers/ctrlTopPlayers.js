
const winnerlist = function(req, res){
    res.render('topplayers',{
        winners:
        [
            {season:'2017-2018', player:'Connor McDavid', team: 'Edmonton Oilers', score: '108'},
            {season:'2016-2017', player:'Connor McDavid', team: 'Edmonton Oilers', score: '100'},
            {season:'2015-2016', player:'Patrick Kane', team: 'Chicago BlackHawks', score: '106'},
            {season:'2014-2015', player:'Jamie Benn', team: 'Dallas Stars', score: '86'},
            {season:'2013-2014', player:'Sidney Crosby', team: 'Pittsburgh Penguins', score: '104'}
        ]});
};

module.exports = {
    winnerlist
};