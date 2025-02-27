
const IncomeSchema = require('../models/incomeModel')

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // validations
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount should positive'})
        }
        await income.save()
        res.status(200).json({
            message: 'Income added successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1}) // reverse order
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({
            message: 'Getting Error'
        })
    }
}

exports.deleteIncome = async (req, res) => {

    const {id} = req.params
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: 'Income deleted successfully'})
    })
    .catch((error) => {
        res.status(500).json({message: 'Deleting Error'})
    })

}
