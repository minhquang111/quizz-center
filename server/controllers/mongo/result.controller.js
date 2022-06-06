import result from '../../models/mongo/result.model.js'

// dummy data in database
export const getAll = async (req, res) => {
   try {
      const s = await result.find({
         examId:1
       })
      return res.status(200).json(s)
   } catch (err) {
      return res.status(500).json(err)
   }
}