class Clues {
  constructor(question, pointValue, answer, categoryId, dailyDble) {
    this.question = question || 'What MTV plays 24 hours a day';
    this.pointValue = pointValue || 100;
    this.answer = answer || 'music videos';
    this.categoryId = categoryId || 10;
    this.dailyDble = dailyDble || false;
  }

  removeClue() {

  }
}

export default Clues;
