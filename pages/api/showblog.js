// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  let arr = []
  for(let i=0; i<data.length; i++){
    let filee = await fs.promises.readFile("blogdata/"+data[i],'utf-8')
    arr.push(JSON.parse(filee))
  }
  res.status(200).json(arr)
}
