const tmi = require('tmi.js')
const configuration = require('./config')
const fs = require('fs')
const express = require('express')
const httpsApp = require('httpsApp')
const { options } = require('./config,js')

const httpsServer = require('https').createServer(options, {
  key:fs.readFileSync(path,"cert/key.pem"),
  cert:fs.readFileSync(path,"cert/cert.pem")
}, httpsApp)

const crypto = require('crypto')
const https = require('https')

let access_token = ""

axios.post()
  .then(response => {

  })
  .catch(error => {
    console.log(error)
  })