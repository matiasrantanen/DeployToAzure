
const winnerlist = function(req, res){
    res.render('stanleycup',{
        winners:
        [
            {year:'2018', team:'Washington Capitals'},
            {year:'2017', team:'Pittsburgh Penguins'},
            {year:'2016', team:'Pittsburgh Penguins'},
            {year:'2015', team:'Chicago Blackhawks'}
        ]});
};
module.exports = {
    winnerlist
};