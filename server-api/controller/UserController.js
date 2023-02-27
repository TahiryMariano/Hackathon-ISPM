const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')
const { validatePassword } = require('../services/validatePassword')

class UserController {
    static listAllUsers = async (req, res, next) => {
        try {
            //get all users from database
            const users = await prisma.Users.findMany()

            //send to the users object
            res.json(users)
        } catch (error) {
            res.status(404).json({ message: "Users not found" })
        }
    }

    static getOneUserById = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const user = await prisma.Users.findUnique({
                where: { id: id }
            })
            res.json(user)
        } catch (error) {
            res.status(404).json({ message: "User not found" })
        }
    }

    static newUser = async (req, res, next) => {

        //validation password
        if (!validatePassword(data.password)) {
            res.status(400).json({ message: "Password does not meet requirements" })
        }

        try {
            const data = req.body
            data.password = bcrypt.hashSync(data.password, 8)
            const user = await prisma.Users.create({ data: data })
            res.status(200).json(user)
        } catch (error) {
            res.status(409).send("email already in use")
        }
    }

    static editUser = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const data = req.body
            const user = await prisma.Users.update({
                where: { id: id },
                data: data
            })
            res.json(user)
        } catch (error) {
            res.status(404).json({ message: "user not found" })
        }
    }

    static deleteUser = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const deletedUser = await prisma.Users.delete({
                where: { id: id }
            })
            res.json(deletedUser)
        } catch (error) {
            res.status(404).send(error)
        }

        //after all,send 204 status(no content )but accept response 
        //res.status(204)
    }
}
module.exports = UserController