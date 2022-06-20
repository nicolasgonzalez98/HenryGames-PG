const { Router } = require('express');
const { Player } = require('../db.js');

require('dotenv').config();
const axios = require("axios")


const router = Router();

router.get('/', async (req, res) => {
    const {id} = req.query

    try {
        let data

        if(id){
            data = await Player.findByPk(id)
        }else{
            data = await Player.findAll()
        }

        return res.json(data)
    } catch (error) {
        res.json({err: "Error al cargar usuarios"})
    }
})

router.post('/create', async(req, res) => {
    let { name, lastname, user, profile_pic, email, date_of_birth, phone, adress, isDeveloper} = req.body

    if(!name || !lastname || !user || !email){
        res.status(401).send('Faltan datos obligatorios!')
    }

    if(!profile_pic){profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}

    try {

        let create ={
            name,
            lastname,
            user,
            profile_pic,
            email
        }

        if(date_of_birth)create.date_of_birth
        if(phone)create.date_of_birth
        if(adress)create.adress
        if(isDeveloper)isDeveloper

        let player = await Player.create(create)

        return res.json(player)
    } catch (error) {
        return res.status(400).send('No se creo el usuario')
    }
})

router.delete('/delete', async (req, res) => {
    const { id } = req.query

    try {
        const player = await Player.findByPk(id)
        if(!player){
            return res.status(404).send('El jugador no existe')
        }

        await player.destroy()
        return res.send('El jugador fue eliminado')

    } catch (error) {
        res.send(error)
    }

})



module.exports = router