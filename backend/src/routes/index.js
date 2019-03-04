import { Router } from 'express';
import { Op } from 'Sequelize';

import { Author, Book, Category, Division, Library, Publisher, Reference } from '../models';

const router = Router();
let books = null;

//
// (async () => {
//   books = await Book.findAll({
//     // where: {
//       //   title: { [Op.like]: `%${keyword}%` }
//       // },
//       attributes: [ 'id', 'thumbnail', 'title', 'publication', 'regNumber', 'isbn', 'callNumber', 'appendix' ],
//       include: [
//         {
//           model: Author,
//           attributes: [ 'name' ]
//         },
//         {
//           model: Category,
//           attributes: [ 'name' ]
//         },
//         {
//           model: Division,
//           attributes: [ 'name' ]
//         },
//         {
//           model: Library,
//           attributes: [ 'name' ]
//         },
//         {
//           model: Publisher,
//           attributes: [ 'name' ]
//         },
//         {
//           model: Reference,
//           attributes: [ 'name' ]
//         },
//       ]
//     })
//   console.log('Books Loading Success..')
// })()

router.post('/enter', (req, res) => {
  const { password } = req.body;

  if (password == process.env.ENTER_PASSWORD) {
    return res.json({
      success: true,
    });
  } else {
    return res.json({
      success: false,
    })
  }

});

router.get('/search', async (req, res) => {

  const { keyword } = req.query;

  try {
    const list = await Book.findAll({
      where: {
        title: { [Op.like]: `%${keyword}%` }
      },
      attributes: [ 'id', 'thumbnail', 'title', 'publication', 'regNumber', 'isbn', 'callNumber', 'appendix' ],
      include: [
        {
          model: Author,
          attributes: [ 'name' ]
        },
        {
          model: Category,
          attributes: [ 'name' ]
        },
        {
          model: Division,
          attributes: [ 'name' ]
        },
        {
          model: Library,
          attributes: [ 'name' ]
        },
        {
          model: Publisher,
          attributes: [ 'name' ]
        },
        {
          model: Reference,
          attributes: [ 'name' ]
        },
      ],
      order: [ [ 'publication', 'DESC' ], 'title' ]
    })

    //const list = books.filter(book => book.title.indexOf(keyword) != -1)

    return res.json({
      success: true,
      list,
    });
  } catch (error) { }


  res.json('Search')
});


export default router;
