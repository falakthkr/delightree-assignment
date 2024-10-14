const User = require("../models/userModel");

exports.getStatsByAgeRange = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $addFields: {
          ageRange: {
            $switch: {
              branches: [
                {
                  case: {
                    $and: [{ $gte: ["$age", 18] }, { $lte: ["$age", 24] }],
                  },
                  then: "18-24",
                },
                {
                  case: {
                    $and: [{ $gte: ["$age", 25] }, { $lte: ["$age", 34] }],
                  },
                  then: "25-34",
                },
                {
                  case: {
                    $and: [{ $gte: ["$age", 35] }, { $lte: ["$age", 44] }],
                  },
                  then: "35-44",
                },
              ],
              default: "45+",
            },
          },
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "authorId",
          as: "posts",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "userId",
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "userId",
          as: "likes",
        },
      },
      {
        $lookup: {
          from: "views",
          localField: "_id",
          foreignField: "userId",
          as: "views",
        },
      },
      {
        $group: {
          _id: "$_id",
          username: { $first: "$username" },
          ageRange: { $first: "$ageRange" },
          postCount: { $sum: { $size: "$posts" } },
          commentCount: { $sum: { $size: "$comments" } },
          likeCount: { $sum: { $size: "$likes" } },
          viewCount: { $sum: { $size: "$views" } },
        },
      },
      {
        $group: {
          _id: "$ageRange",
          totalPosts: { $sum: "$postCount" },
          totalComments: { $sum: "$commentCount" },
          totalLikes: { $sum: "$likeCount" },
          totalViews: { $sum: "$viewCount" },
        },
      },
      {
        $project: {
          _id: 0,
          ageRange: "$_id",
          totalPosts: 1,
          totalComments: 1,
          totalLikes: 1,
          totalViews: 1,
        },
      },
    ]);

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
