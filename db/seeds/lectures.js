
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lectures').del()
    .then(function () {
      // Inserts seed entries
      return knex('lectures').insert([
        {lecture_name: 'English', lecture_professor: 'Chang', lecture_time: 'Monday', lecture_location: "ESL101"},
        {lecture_name: 'Math', lecture_professor: 'Cheng', lecture_time: 'Wednesday', lecture_location: "DUB49"},
        {lecture_name: 'Chemistry', lecture_professor: 'Rumplestiltskin', lecture_time: 'Friday', lecture_location: "SCI22"}
      ]);
    });
};
