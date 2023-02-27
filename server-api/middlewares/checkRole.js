const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const checkRole = (roles) => {
    return async (req, res, next) => {
        const id = res.locals.jwtPayload.userId

        let user = {}
        //get the user role from database
        try {
            user = await prisma.Users.findUniqueOrThrow({ where: { id: id } })
        } catch (id) {
            res.status(404).send()
        }

        //check if array authorized roles include
        if (roles.indexOf(user.role) > -1) next()
        else res.status(401).json({ message: "you are not an admin" })
    }
}

module.exports = checkRole