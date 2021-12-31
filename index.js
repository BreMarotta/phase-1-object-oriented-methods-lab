BoardMember = function(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

    BoardMember.veto = () => {
    return ("No, I must disagree");
    };
    BoardMemeber.prototype.approve = function () {
        return "You can do that!"
    };
    BoardMemeber.prototype.doCharity = function () {
        return "I like to help people"
    };
    BoardMemeber.prototype.releasePressStatement = function () {
        return "You will see great things from Scuber."
    };
    sayHi = function () {
        return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    };

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");