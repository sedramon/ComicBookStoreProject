export interface Review {
  userId: number;
  comicId: number;
  grade: number;
}

export class ReviewService {
  private reviewList: Array<Review> = [
    {
      userId: 1,
      comicId: 2,
      grade: 1,
    },
    {
      userId: 1,
      comicId: 7,
      grade: 2,
    },
    {
      userId: 2,
      comicId: 6,
      grade: 3,
    },
    {
      userId: 1,
      comicId: 5,
      grade: 4,
    },
    {
      userId: 1,
      comicId: 4,
      grade: 4,
    },
    {
      userId: 2,
      comicId: 3,
      grade: 3,
    },
    {
      userId: 1,
      comicId: 2,
      grade: 5,
    },
    {
      userId: 1,
      comicId: 3,
      grade: 2,
    },
    {
      userId: 1,
      comicId: 4,
      grade: 1,
    },
    {
      userId: 3,
      comicId: 5,
      grade: 5,
    },
    {
      userId: 1,
      comicId: 6,
      grade: 5,
    },
    {
      userId: 1,
      comicId: 7,
      grade: 2,
    },
    {
      userId: 2,
      comicId: 8,
      grade: 3,
    },
    {
      userId: 1,
      comicId: 9,
      grade: 4,
    },
    {
      userId: 2,
      comicId: 10,
      grade: 4,
    },
  ];

  getReviewList() {
    return this.reviewList;
  }

  addReviewToList(review: Review) {
    this.reviewList.push(review);
  }

  calculateGradeForBook(comicIdSelected: number): number {
    var gradeSum = 0;
    var totalGrade = 0;
    this.reviewList.forEach((comic) => {
      if (comic.comicId == comicIdSelected) {
        gradeSum += comic.grade;
        totalGrade++;
      }
    });
    if (totalGrade == 0) {
      return 0;
    }
    totalGrade = gradeSum / totalGrade;
    return totalGrade;
  }
}
