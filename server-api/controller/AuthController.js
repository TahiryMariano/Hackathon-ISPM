const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { PrismaClient } = require('@prisma/client')
const { validatePassword } = require('../services/validatePassword')
const prisma = new PrismaClient()
dotenv.config()
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

class AuthController {
    static login = async (req, res, next) => {
        //check if email and password are set
        let { email, password } = req.body
        if (!(email && password)) {
            res.status(401).json({ message: "veuillez remplir" })
        }

        //get user from database
        let user = {}
        try {
            user = await prisma.Users.findUnique({
                where: { email: email }
            })
        } catch (error) {
            res.status(401).json({ message: "User not registered" })
        }

        //check the password
        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) {
            res.status(401).json({ message: "email or password incorrect" })
            return
        }

        //sign JWT, valid for 1 hour
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            accessTokenSecret,
            { expiresIn: 3600 }
        )

        //send the jwt in response
        res.status(200).json({
            user: {
                id: user.id,
                email: user.email
            },
            message: "Login successfully",
            token: token
        })
    }

    static changePassword = async (req, res, next) => {
        //get id from JWT
        const id = res.locals.jwtPayload.userId

        //get parameters from body
        const { currentPassword, newPassword } = req.body
        if (!(currentPassword && newPassword)) {
            res.status(401).send()
        }

        //get user from database
        let user = {}
        try {
            user = await prisma.Users.findUnique({ where: { id: Number(id) } })
        } catch (error) {
            res.status(404).json({ message: "user not found" })
        }

        //check if old password matchs
        const checkPassword = await bcrypt.compareSync(currentPassword, user.password)
        if (!checkPassword) {
            res.status(401).json({ message: " current password is incorrect" })
            return
        }

        //validate the model(password length)
        if (!validatePassword(newPassword)) {
            return res.status(400).json({ message: "New password does not meet requirements" })
        }

        //hash the new password and save
        const hashedPassword = await bcrypt.hashSync(newPassword, 8)

        await prisma.Users.update({
            where: { id: id },
            data: { password: hashedPassword }
        })

        res.status(200).json({ message: "Password changed successfully" })
    }
}

module.exports = AuthController