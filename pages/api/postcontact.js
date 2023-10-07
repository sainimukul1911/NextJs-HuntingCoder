import * as fs from 'fs'

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const data = await fs.promises.readdir('contactdata')
    await fs.promises.writeFile(`contactdata/${data.length+1}.js` , req.body)
    res.status(200).json(req.body)
  }else{
    res.status(200).json(req.body)
  }
}