```javascript
const pipeline = [
  {
    $match: {
      createdAt: {
        $gte: ISODate("2023-10-26T00:00:00Z"),
        $lte: ISODate("2023-10-27T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: "$userId",
      totalSpent: { $sum: "$amount" }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  },
  {
    $limit: 10
  }
];
//Solution: Use ISODate to ensure correct date formatting within the $match stage.
```