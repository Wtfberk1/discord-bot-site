const express = require('express')
const app = express()
const port = 3000
const { clientId, token, logo, siteName, botInvite, dcDestekSunucusu } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const INTENTS = Object.values(GatewayIntentBits);
const client = new Client({ intents: INTENTS });

app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
  res.render('index', { 
    name: siteName,
    logo: logo,
    botname: client.user.username,
    dcinvite: botInvite,
    sInvite: dcDestekSunucusu,
    swCount: client.guilds.cache.size
})
})

app.get('/hakkimizda', (req, res) => {
  res.render('hakkimizda', { 
    name: siteName,
    logo: logo,
    botname: client.user.username,
    dcinvite: botInvite,
    sInvite: dcDestekSunucusu
})
})

app.get('/iletisim', (req, res) => {
  res.render('iletisim', { 
    name: siteName,
    logo: logo,
    dcinvite: botInvite,
    sInvite: dcDestekSunucusu
})
})

app.get('/komutlar', (req, res) => {
  res.render('komutlar', { 
    name: siteName,
    logo: logo,
    dcinvite: botInvite,
    sInvite: dcDestekSunucusu
})
})

app.listen(port, () => {
  console.log(`Site ${port} portundan açıldı.`)
})

client.login(token)

client.on("ready", () => {
  console.log(client.user.tag + " olarak giriş yapıldı.");
})